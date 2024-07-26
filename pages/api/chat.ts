import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { exCharactor, initMessageFilter1, initMessageFilter2, rejectedMessageFilter1, rejectedMessageFilter2, systemConfig } from '@pages/api/chat/config';

const API_KEYS = [
  process.env.ANTHROPIC_API_KEY1, 
  process.env.ANTHROPIC_API_KEY2, 
  process.env.ANTHROPIC_API_KEY3,
  process.env.ANTHROPIC_API_KEY4
] // 여러 개의 토큰을 배열에 저장

let currentTokenIndex = 1; // 현재 사용 중인 토큰의 인덱스

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const system = `${systemConfig}\n\n플레이어 캐릭터: 김수홍\n\n너의 캐릭터: ${exCharactor}`;

    const responseMessage = await attemptApiCall({ system, message });

    console.log(responseMessage);
    res.status(200).json({ message: `${responseMessage} POST`});
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: 'Hello from Next.js! OTHER' });
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
      { role: "user", content: initMessageFilter1 },
      { role: "assistant", content: initMessageFilter2 },
      { role: "user", content: `{d}${message}{/d}` }
    ]
  } else {
    messageWithUnlocker = [
      { role: "user", content: message },
      { role: "assistant", content: rejectedMessage },
      { role: "user", content: rejectedMessageFilter1 },
      { role: "assistant", content: rejectedMessageFilter2 },
      { role: "user", content: `{d}${message}{/d}` }
    ]
  }

  const response = await axios.post('https://api.anthropic.com/v1/messages', {
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4096,
    temperature: 1,
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
  if(text.includes('{d}')) {
      return true;
  } else {
      return false;
  }
}