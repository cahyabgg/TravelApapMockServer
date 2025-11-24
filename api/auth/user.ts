import type { VercelRequest, VercelResponse } from '@vercel/node';
import { mockProfiles } from '../db';
import { BaseResponseDTO, DecodedUserJWT, DTOUserProfile } from '../interface';
import { decodeJwt } from './jwt';


export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type'); 
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ status: 405, message: "Method Not Allowed", data: null });
  }
  
  // 1. Get Authorization Header
  const authHeader = req.headers.authorization;

  // 2. Check Logic
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      status: 401,
      message: "Authenticated user not found. (Missing or Invalid Bearer Token)",
      timestamp: new Date().toISOString(),
      data: null
    });
  }

  // 3. Extract Token
  const token = authHeader.split(' ')[1];

  // 4. Map Token to Role
  const decodedJwt : DecodedUserJWT = decodeJwt(token) as DecodedUserJWT;

  const userRoleKey = decodedJwt.id;

  if (!userRoleKey) {
    return res.status(403).json({
      status: 403,
      message: "Invalid Token or User Not Found in Mock DB",
      timestamp: new Date().toISOString(),
      data: null
    });
  }

  const userProfile = mockProfiles[userRoleKey];

  // Safety check: What if token maps to a role not in mockProfiles?
  if (!userProfile) {
     return res.status(500).json({
      status: 500,
      message: `Configuration Error: Role '${userRoleKey}' has no profile data.`,
      timestamp: new Date().toISOString(),
      data: null
    });
  }

  // 5. Create Response Object
  const response: BaseResponseDTO<DTOUserProfile> = {
    status: 200,
    message: "Success fetching user profile",
    timestamp: new Date().toISOString(),
    data: userProfile
  };

  return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123