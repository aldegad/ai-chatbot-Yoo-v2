// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 이 함수는 모든 요청을 가로챕니다.
export function middleware(request: NextRequest) {
  // 응답 객체 생성
  const response = NextResponse.next();

  // CORS 헤더 추가
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS 메서드에 대한 프리플라이트 요청을 처리합니다.
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: response.headers });
  }

  return response;
}

// 이 미들웨어가 적용될 경로를 설정합니다.
export const config = {
  matcher: '/api/:path*',
};
