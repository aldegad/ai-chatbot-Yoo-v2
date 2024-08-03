import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@lib/mongodb';
import { IUser } from '@type';
import User from '@models/User';


export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password }: IUser.SignUpParams = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: '이미 회원인 이메일 입니다. 로그인을 해주세요.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: '회원 가입 되었습니다.' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error signUp' }, { status: 500 });
  }
}
