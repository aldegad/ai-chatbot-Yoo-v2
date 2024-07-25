import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ message: `${req.body.message} POST`});
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: 'Hello from Next.js! OTHER' });
  }
}