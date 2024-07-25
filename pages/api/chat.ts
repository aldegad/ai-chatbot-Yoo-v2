import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { exCharactor, filter1Config, filter2Config, systemConfig } from '@pages/api/chat/config';

const API_KEYS = [
  process.env.ANTHROPIC_API_KEY1, 
  process.env.ANTHROPIC_API_KEY2, 
  process.env.ANTHROPIC_API_KEY3,
  process.env.ANTHROPIC_API_KEY4
] // 여러 개의 토큰을 배열에 저장

let currentTokenIndex = 0; // 현재 사용 중인 토큰의 인덱스

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const system = `${systemConfig} 캐릭터: ${exCharactor}`;

    let messageWithUnlocker = [
      { role: "user", content: filter1Config },
      { role: "assistant", content: filter2Config },
      { role: "user", content: `${message}` }
  ]
    // Process a POST request
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
    console.log(response.data);
    res.status(200).json({ message: `${response.data.content[0].text} POST`});
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: 'Hello from Next.js! OTHER' });
  }
}