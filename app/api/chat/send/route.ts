import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { IChat } from '@type';
import { authenticateUser } from '@api/_utils/auth';
import Character from '@models/Character';

const API_KEYS = [
  process.env.ANTHROPIC_API_KEY1, 
  process.env.ANTHROPIC_API_KEY2, 
  process.env.ANTHROPIC_API_KEY3,
  process.env.ANTHROPIC_API_KEY4
] // 여러 개의 토큰을 배열에 저장

const SYSTEM_CONFIG = (process.env.SYSTEM_CONFIG as string).replace(/\\n/g, '\n');;
const INIT_MESSAGE_FILTER1 = process.env.INIT_MESSAGE_FILTER1 as string;
const INIT_MESSAGE_FILTER2 = process.env.INIT_MESSAGE_FILTER2  as string;
const REJECTED_MESSAGE_FILTER1 = process.env.REJECTED_MESSAGE_FILTER1 as string;
const REJECTED_MESSAGE_FILTER2 = process.env.REJECTED_MESSAGE_FILTER2 as string;
const TEST_NPC = process.env.TEST_NPC as string;
const TEST_USER = process.env.TEST_USER as string;

let currentTokenIndex = 1; // 현재 사용 중인 토큰의 인덱스

export async function POST(req: NextRequest) {
  const authResult = await authenticateUser(req);
  if ('error' in authResult) {
    return NextResponse.json({ error: authResult.error }, { status: authResult.status });
  }
  const { user } = authResult;

  try {
    const { message, characterId }: IChat.SendParams = await req.json();
    const character = await Character.findById(characterId);

    if(!character) return NextResponse.json({ error: '삭제된 캐릭터 입니다.' }, { status: 404 });

    const system = `${SYSTEM_CONFIG}\n\n{npc}:\n${character.system}\n${character.secret}\n{user}:\n${TEST_USER}`;

    const responseMessage = await attemptApiCall({ system, message });

    return NextResponse.json({ message: responseMessage });
  } catch(error) {
    return NextResponse.json({ error: '대화 실패' }, { status: 500 });
  }
}

const attemptApiCall = async({ system, message, rejectedMessage, _tryCount, _inToken, _outToken }:any) => {
  let tryCount = _tryCount ? _tryCount + 1 : 1;
  let totalInToken = _inToken || 0;
  let totalOutToken = _outToken || 0;

  console.log('attepmt api call: ', `\x1b[33m${tryCount}\x1b[0m`);

  let messageWithUnlocker = [];
  if(!rejectedMessage) {
    messageWithUnlocker = [
      { role: "user", content: INIT_MESSAGE_FILTER1 },
      { role: "assistant", content: INIT_MESSAGE_FILTER2 },
      { role: "user", content: `{d}${message}{/d}` }
    ]
  } else {
    messageWithUnlocker = [
      { role: "user", content: message },
      { role: "assistant", content: rejectedMessage },
      { role: "user", content: REJECTED_MESSAGE_FILTER1 },
      { role: "assistant", content: REJECTED_MESSAGE_FILTER2 },
      { role: "user", content: `{d}${message}{/d}` }
    ]
  }

  const response = await axios.post('https://api.anthropic.com/v1/messages', {
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4096,
    system,
    messages: messageWithUnlocker
  }, {
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEYS[currentTokenIndex],
          'anthropic-version': '2023-06-01'
      }
  });

  totalInToken += response.data.usage.input_tokens;
  totalOutToken += response.data.usage.output_tokens;

  if(validateString(response.data.content[0].text)) {
    console.log(
      messageWithUnlocker, 
      `totalInToken: \x1b[33m${totalInToken}\x1b[0m, totalOutToken: \x1b[33m${totalOutToken}\x1b[0m, tryCount: ${tryCount}`
    );
    return response.data.content[0].text;
  } else {
    return await attemptApiCall({
      // system, 
      message, 
      rejectedMessage: response.data.content[0].text,
      _tryCount: tryCount,
      _inToken: totalInToken,
      _outToken: totalOutToken
    });
  }
}

const validateString = (text:string) => {
  return true;
  if(text.includes('{d}')) {
      return true;
  } else {
      return false;
  }
}