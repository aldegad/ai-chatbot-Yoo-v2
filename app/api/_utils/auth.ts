// app/api/_utils/auth.ts
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@lib/mongodb';
import User from '@models/User';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function authenticateUser(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return { error: '인증되지 않았습니다.' , status: 401 };
  }

  try {
    await dbConnect();
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await User.findById(decoded.userId);

    if (!user) {
      return { error: '유효하지 않은 토큰입니다.' , status: 401 };
    }

    return { user };
  } catch (error) {
    console.error(error);
    if(error instanceof Error) {
      if(error.name === 'TokenExpiredError') {
        return { error: '토큰이 만료되었습니다.', status: 401 };
      }
    }
    return { error: 'Error authentication user: ' + error, status: 500 };
  }
}