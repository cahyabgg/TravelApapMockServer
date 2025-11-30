import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allProfiles } from '../db';
import { BaseResponseDTO, DecodedUserJWT, DTOCustomer, DTORentalVendor, DTOUserProfile, UserRoleType } from '../interface';
import { decodeJwt } from '../auth/jwt';


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
    try {
        const decodedToken: DecodedUserJWT = decodeJwt(token) as DecodedUserJWT;

        if (decodedToken.role !== UserRoleType.SUPERADMIN) {
            return res.status(401).json({
                status: 401,
                message: "Not Authorized: Only SUPERADMIN can access all profiles",
                timestamp: new Date().toISOString(),
                data: null
            });
        }
    } catch (error) {
        return res.status(403).json({
            status: 403,
            message: "Invalid Token",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    const queryRole = req.query.role;

    let userProfile: DTOUserProfile[] | DTOCustomer[] | DTORentalVendor[] | [] = [];

    if (queryRole) {
        const role = req.query.role as UserRoleType;

        userProfile = allProfiles.filter((profile) => {
            if (profile.role === role) {
                return true;
            }
            return false;
        }) as DTOUserProfile[] | DTOCustomer[] | DTORentalVendor[] | [];
    } else {
        userProfile = allProfiles;
    }


    // 5. Create Response Object
    const response: BaseResponseDTO<DTOUserProfile[] | DTOCustomer[] | DTORentalVendor[] | []> = {
        status: 200,
        message: "Success fetching user profile",
        timestamp: new Date().toISOString(),
        data: userProfile
    };

    return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123