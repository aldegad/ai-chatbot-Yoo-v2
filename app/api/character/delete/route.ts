import { NextRequest, NextResponse } from 'next/server'
import Character from '@models/Character'
import { ICharacter } from '@type'
import { authenticateUser } from '@api/_utils/auth'

export async function POST(req: NextRequest) {
  const authResult = await authenticateUser(req)
  if ('error' in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status })
  }
  const { user } = authResult

  try {
    const { characterId }: ICharacter.DeleteParams = await req.json()
    
    const deletedCharacter = await Character.findByIdAndDelete({
      _id: characterId,
      creatorId: user._id
    })

    // 캐릭터가 존재하지 않았거나 현재 사용자의 것이 아니었다면
    if (!deletedCharacter) {
      return NextResponse.json({ error: '캐릭터가 존재하지 않거나, 삭제권한이 없습니다.' }, { status: 404 });
    }

    return NextResponse.json({ message: `캐릭터가 삭제 되었습니다.` }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error character create' }, { status: 500 })
  }
}