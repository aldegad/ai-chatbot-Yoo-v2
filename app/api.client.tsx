
import { ICharacter, IUser } from '@type';
import clientEnv from '@clientEnv';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import cookieManager from '@local_modules/cookieManager';

const instance = axios.create({
  baseURL: clientEnv.LOCAL_ADDRESS,
  timeout: 10000
})

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && error.response?.data?.error === '토큰이 만료되었습니다.' && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({resolve, reject});
        }).then(token => {
          /** 
           * 이거 필요없지 않나??? 아래쪽에서 setAuth를 해줬는데? 일단 주석처리.
           * originalRequest.headers['Authorization'] = 'Bearer ' + token; */
          return instance(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        apiClient.user.refresh()
          .then(({data}) => {
            apiClient.setAuth(data);
            processQueue(null, data.accessToken);
            resolve(instance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
)

export const apiClient = {
  setAuth: ({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) => {
    const cookies = cookieManager();
    cookies.set('accessToken', accessToken);
    cookies.set('refreshToken', refreshToken);
    instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },
  retryRequest: (config: AxiosRequestConfig) => {
    return instance(config);
  },
  user: {
    signUp: (params: IUser.SignUpParams): Promise<AxiosResponse<IUser.SignUpResponse>> => 
      instance.post('/api/user/signUp', params),
    login: (params: IUser.LoginParams): Promise<AxiosResponse<IUser.LoginResponse>> => {
      const _instance = instance.post('/api/user/login', params);
      _instance.then(({ data }) => {
        apiClient.setAuth(data);
      })
      return _instance;
    },
    refresh: async(): Promise<AxiosResponse<IUser.RefreshResponse>> => {
      const cookies = cookieManager();
      const refreshToken = await cookies.get('refreshToken');
      const _instance = instance.post('/api/user/refresh', {
        refresh_token: refreshToken
      })
      _instance.then(({data}) => {
        apiClient.setAuth(data);
      });
      return _instance;
    }
    // 다른 API 호출들...
  },
  character: {
    create: (params: ICharacter.CreateParams): Promise<AxiosResponse<ICharacter.CreateResponse>> => {
      return instance.post('/api/character/create', params);
    },
    list: (params: ICharacter.ListParams): Promise<AxiosResponse<ICharacter.ListResponse>> => {
      return instance.post('/api/character/list', params);
    },
    mine: (params: ICharacter.MineParams): Promise<AxiosResponse<ICharacter.MineResponse>> => {
      return instance.get('/api/character/mine', {
        params
      });
    },
  }
}