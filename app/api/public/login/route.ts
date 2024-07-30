import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@lib/mongodb';
import User from '@models/User';
import { LoginParams } from '@api/type';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password }: LoginParams = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: '가입된 정보가 없습니다.' }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: '가입된 정보가 없습니다.' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    const response = NextResponse.json({ message: '로그인 되었습니다.', token, refreshToken });
    /** 
     * 앱까지 같이 할 프로젝트라 이것을 사용할 수 없음
     * response.cookies.set('token', token, { httpOnly: true, maxAge: 3600 });
     * response.cookies.set('refreshToken', refreshToken, { httpOnly: true, maxAge: 604800 }); 
    */

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error logging in' }, { status: 500 });
  }
}
