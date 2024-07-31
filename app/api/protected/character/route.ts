import dbConnect from '@lib/mongodb';
import Character from '@models/Character';
import User from '@models/User';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7) 
    : null;

  if(!token) return NextResponse.json({ error: '인증되지 않았습니다.' }, { status: 401 });
  console.log(token);
  try {
    await dbConnect();
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await User.findById(decoded.userId);

    if (!user) {
      return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
    }

    const { name, system, visibility } = await req.json();
    
    const character = await Character.create({
      name,
      system,
      creator: user._id,
      visibility
    });

    return NextResponse.json({ data: character }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error character create' }, { status: 500 });
  }
}