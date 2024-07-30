import { LoginParams, LoginResponse, SignUpParams, SignUpResponse } from '@app/api.type';
import clientEnv from '@clientEnv';
import axios, { AxiosResponse } from 'axios';

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
  public: {
    signUp: (params: SignUpParams): Promise<AxiosResponse<SignUpResponse>> => 
      instance.post('/api/public/signUp', params),
    login: (params: LoginParams): Promise<AxiosResponse<LoginResponse>> => 
      instance.post('/api/public/login', params),
    // 다른 API 호출들...
  },
  protected: {

  }
};