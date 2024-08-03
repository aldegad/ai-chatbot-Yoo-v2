import { useCallback } from "react";

export const useErrorCatch = () => {
  const createErrorCatch = useCallback((error: unknown) => {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert('알 수 없는 오류가 발생했습니다.');
    }
    // 여기에 로깅이나 다른 에러 처리 로직을 추가할 수 있습니다.
  }, []);

  return { createErrorCatch };
};