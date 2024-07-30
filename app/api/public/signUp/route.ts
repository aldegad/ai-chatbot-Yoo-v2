import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@lib/mongodb';
import User, { IUser } from '@models/User';
import { SignUpParams } from '@app/type.api';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password }: SignUpParams = await req.json();

    const existingUser = await User.findOne<IUser>({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
