import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@lib/mongodb';
import User from '@models/user';

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 422 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ email, password: hashedPassword });

  await newUser.save();

  return NextResponse.json({ message: 'User created', userId: newUser._id }, { status: 200 });
}
