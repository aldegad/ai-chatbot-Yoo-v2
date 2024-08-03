import useRouter from "@local_modules/router/useRouter";
import axios from "axios";
import { useCallback } from "react";

export const useErrorCatch = () => {
  const router = useRouter()
  const createErrorCatch = useCallback(async(error: unknown) => {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.error || '네트워크 오류가 발생했습니다.');
      if(error.response?.status === 401) {
        router.push('/login');
      }
    } else {
      alert('알 수 없는 오류가 발생했습니다.');
    }
  }, [router]);

  return { createErrorCatch }
}