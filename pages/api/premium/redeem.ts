import type { NextApiRequest, NextApiResponse } from "next";

type BonusResponse = {
  success: boolean;
  bonus: number;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<BonusResponse>) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, bonus: 0, message: "Method not allowed" });
  }

  const bonus = 500;
  return res.status(200).json({
    success: true,
    bonus,
    message: "Vulnerable endpoint: no guard, no authorization check.",
  });
}