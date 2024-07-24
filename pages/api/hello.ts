// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter, expressWrapper } from 'next-connect';
import cors from 'cors';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(expressWrapper(cors()));

// GET 요청 처리
router.get((req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// 에러 핸들러 설정
export const config = {
  api: {
    bodyParser: false,
  },
};

export default router.handler({
  onError(err:any, req, res) {
    res.status(500).end(`Something went wrong! ${err.message}`);
  },
  onNoMatch(req, res) {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
});
