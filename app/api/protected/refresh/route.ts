import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get('refreshToken')?.value;

    if (!refreshToken) {
      return NextResponse.json({ error: 'Refresh token not found' }, { status: 401 });
    }

    const decoded = jwt.verify(refreshToken, JWT_SECRET) as { userId: string };
    const newToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET, { expiresIn: '1h' });

    const response = NextResponse.json({ message: 'Token refreshed', token: newToken });
    response.cookies.set('token', newToken, { httpOnly: true, maxAge: 3600 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error refreshing token' }, { status: 401 });
  }
}