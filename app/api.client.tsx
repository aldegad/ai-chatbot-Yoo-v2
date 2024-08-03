
import { ICharacter, IUser } from '@type';
import clientEnv from '@clientEnv';
import axios, { AxiosResponse } from 'axios';
import cookieManager from '@local_modules/cookieManager';

const instance = axios.create({
  baseURL: clientEnv.LOCAL_ADDRESS,
  timeout: 10000
});

// 응답 인터셉터로 에러 처리
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      // 서버에서 보낸 에러 메시지가 있으면 그것을 사용
      throw new Error(error.response.data.error || '알 수 없는 오류가 발생했습니다.');
    }
    throw new Error('네트워크 오류가 발생했습니다.');
  }
);

export const apiClient = {
  user: {
    signUp: (params: IUser.SignUpParams): Promise<AxiosResponse<IUser.SignUpResponse>> => 
      instance.post('/api/user/signUp', params),
    login: (params: IUser.LoginParams): Promise<AxiosResponse<IUser.LoginResponse>> => {
      const _instance = instance.post('/api/user/login', params);
      _instance.then(({ data }) => {
        const cookies = cookieManager();
        cookies.set('token', data.token);
        cookies.set('refreshToken', data.refreshToken);
      })
      return _instance;
    }
    // 다른 API 호출들...
  },
  character: {
    create: async(params: ICharacter.CreateParams): Promise<AxiosResponse<ICharacter.CreateResponse>> => {
      const cookies = cookieManager();
      const token = await cookies.get('token');
      return instance.post('/api/character/create', params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },
    list: async(params: ICharacter.ListParams): Promise<AxiosResponse<ICharacter.ListResponse>> => {
      const cookies = cookieManager();
      const token = await cookies.get('token');
      return instance.post('/api/character/list', params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },
    mine: async(params: ICharacter.MineParams): Promise<AxiosResponse<ICharacter.MineResponse>> => {
      const cookies = cookieManager();
      const token = await cookies.get('token');
      return instance.get('/api/character/mine', {
        params,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    },
  }
}