import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseResponseDTO, UserRoleType } from './interface';


const mockProfiles: Record<string, UserRoleType> = {
  "00000000-0000-0000-0000-000000000001" : UserRoleType.SUPERADMIN ,
  "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501" : UserRoleType.ACCOMMODATION_OWNER,
  "a1b2c3d4-e5f6-7890-1234-567890abcdef": UserRoleType.FLIGHT_AIRLINE,
  "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1" : UserRoleType.CUSTOMER,
  "i9i9i9i9-i9i9-i9i9-i9i9-i9i9i9i9i9i9": UserRoleType.INSURANCE_PROVIDER,
  "t0p0v0t0-p0v0-t0p0-v0t0-p0v0t0p0v0t0" : UserRoleType.TOUR_PACKAGE_VENDOR,
  "r1v1r1v1-r1v1-r1v1-r1v1-r1v1r1v1r1v1" : UserRoleType.RENTAL_VENDOR 
};

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

  const userRole = mockProfiles[userId];

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