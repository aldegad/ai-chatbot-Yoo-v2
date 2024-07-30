import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function middleware(request: NextRequest) {
  // CORS 헤더 설정
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS 메서드에 대한 프리플라이트 요청 처리
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: response.headers });
  }

  // 보호된 경로에 대한 토큰 검증
  if (request.nextUrl.pathname.startsWith('/api/protected')) {
    const token = request.cookies.get('token')?.value || request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      return new NextResponse(
        JSON.stringify({ message: 'Authentication required' }),
        { status: 401, headers: response.headers }
      );
    }

    try {
      jwt.verify(token, JWT_SECRET);
      return response;
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid token' }),
        { status: 401, headers: response.headers }
      );
    }
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*'],
};