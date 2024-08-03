import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_SECRET as string;

export async function POST(req: NextRequest) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json({ error: 'Refresh token not found' }, { status: 401 });
    }

    const decoded = jwt.verify(refreshToken, REFRESH_SECRET) as { userId: string, exp: number };
    
    const now = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = decoded.exp - now;
    const shouldRefreshToken = timeUntilExpiry < 7 * 24 * 3600; // 7일 미만으로 남았는지 확인

    const newAccessToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET, { expiresIn: '5m' });
    
    let newRefreshToken = refreshToken;
    if (shouldRefreshToken) {
      newRefreshToken = jwt.sign({ userId: decoded.userId }, REFRESH_SECRET, { expiresIn: '30d' });
    }

    const response = NextResponse.json({ 
      message: 'Token refreshed', 
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    });

    response.cookies.set('accessToken', newAccessToken, { httpOnly: true, maxAge: 3600, secure: true, sameSite: 'strict' });
    
    if (shouldRefreshToken) {
      response.cookies.set('refreshToken', newRefreshToken, { httpOnly: true, maxAge: 30 * 24 * 3600, secure: true, sameSite: 'strict' });
    }

    return response;
  } catch (error) {
    // 에러 처리 로직
    return NextResponse.json({ error: 'Error refreshing token' }, { status: 401 });
  }
}