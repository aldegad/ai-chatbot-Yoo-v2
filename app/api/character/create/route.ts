import { NextRequest, NextResponse } from 'next/server'
import Character from '@models/Character'
import { ICharacter } from '@type'
import { authenticateUser } from '@api/_utils/auth'

export async function POST(req: NextRequest) {
  const authResult = await authenticateUser(req);
  if ('error' in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }
  const { user } = authResult;

  try {
    const { name, system, visibility, secret }: ICharacter.CreateParams = await req.json();
    
    await Character.create({
      name,
      system,
      secret,
      creatorId: user._id,
      visibility
    });

    return NextResponse.json({ message: `${name} 캐릭터가 생성 되었습니다.` }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error character create' }, { status: 500 });
  }
}