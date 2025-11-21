import type { VercelRequest, VercelResponse } from '@vercel/node';
import validTokens from './token-mapping.json';

enum UserRoleType {
  SUPERADMIN = "Superadmin",
  ACCOMMODATION_OWNER = "Accommodation Owner",
  FLIGHT_AIRLINE = "Flight Airline",
  CUSTOMER = "Customer",
  INSURANCE_PROVIDER = "Insurance Provider",
  TOUR_PACKAGE_VENDOR = "Tour Package Vendor",
  RENTAL_VENDOR = "Rental Vendor",
}

interface DTOUserProfile {
  userId: string;
  role: UserRoleType;
}

interface BaseResponseDTO<T> {
  status: number;
  message: string;
  timestamp: string;
  data: T;
}

const mockProfiles: Record<string, DTOUserProfile> = {
  SUPERADMIN: { userId: "00000000-0000-0000-0000-000000000001", role: UserRoleType.SUPERADMIN },
  ACCOMMODATION_OWNER: { userId: "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501", role: UserRoleType.ACCOMMODATION_OWNER },
  FLIGHT_AIRLINE: { userId: "a1b2c3d4-e5f6-7890-1234-567890abcdef", role: UserRoleType.FLIGHT_AIRLINE },
  CUSTOMER: { userId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1", role: UserRoleType.CUSTOMER },
  INSURANCE_PROVIDER: { userId: "i9i9i9i9-i9i9-i9i9-i9i9-i9i9i9i9i9i9", role: UserRoleType.INSURANCE_PROVIDER },
  TOUR_PACKAGE_VENDOR: { userId: "t0p0v0t0-p0v0-t0p0-v0t0-p0v0t0p0v0t0", role: UserRoleType.TOUR_PACKAGE_VENDOR },
  RENTAL_VENDOR: { userId: "r1v1r1v1-r1v1-r1v1-r1v1-r1v1r1v1r1v1", role: UserRoleType.RENTAL_VENDOR },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type'); 
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ status: 405, message: "Method Not Allowed", data: null });
  }
  
  const mapping = validTokens as Record<string, string>;

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
  const userRoleKey = mapping[token];

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