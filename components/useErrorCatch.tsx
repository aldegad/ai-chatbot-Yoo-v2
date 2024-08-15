import { useCallback } from "react"
import axios from "axios"
import useRouter from "@local_modules/router/useRouter"
import useAlert from "@components/useAlert"

export const useErrorCatch = () => {
  const { createAlert } = useAlert();
  const router = useRouter()
  const createErrorCatch = useCallback(async(error: unknown) => {
    if (axios.isAxiosError(error)) {
      (await createAlert({ content: error.response?.data?.error || '네트워크 오류가 발생했습니다.' })).present()
      if(error.response?.status === 401) {
        router.push('/login')
      }
    } else {
      (await createAlert({ content: '알 수 없는 오류가 발생했습니다.' })).present()
    }
  }, [router])

  return { createErrorCatch }
}