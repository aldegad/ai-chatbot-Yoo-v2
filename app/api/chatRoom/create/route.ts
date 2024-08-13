import { authenticateUser } from "@api/_utils/auth";
import Character from "@models/Character";
import ChatRoom from "@models/ChatRoom";
import { IChatRoom } from "@type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authResult = await authenticateUser(req);
  if ('error' in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }
  const { user } = authResult;

  try {
    const { characterId, userName, userSystem }: IChatRoom.CreateParams = await req.json();
    const character = await Character.findById(characterId);

    if(!character) return NextResponse.json({ error: '삭제된 캐릭터 입니다.' }, { status: 404 });

    await ChatRoom.create({
      userId: user._id,
      characterId: character._id,
      userName,
      userSystem
    })

    return NextResponse.json({ message: '채팅방이 생성 되었습니다.' }, { status: 201 });
  } catch(error) {
    return NextResponse.json({ error: '대화 실패' }, { status: 500 });
  }
}