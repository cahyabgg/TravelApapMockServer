import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseResponseDTO } from '../interface';
import { mockProfiles } from '../db';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type'); 
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 405, message: "Method Not Allowed", data: null });
  }
  
  const userId = req.body.userId;

  const userRole = mockProfiles[userId].role;

  if (!userRole) {
     return res.status(400).json({
      status: 400,
      message: `Error Id not found: UserId '${userId}' has no profile data.`,
      timestamp: new Date().toISOString(),
      data: null
    });
  }

  // Create Response Object
  const response: BaseResponseDTO<string> = {
    status: 200,
    message: "Success fetching user profile",
    timestamp: new Date().toISOString(),
    data: userRole
  };

  return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123