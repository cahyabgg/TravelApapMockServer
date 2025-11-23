import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allProfiles, mockProfiles } from './db';
import { BaseResponseDTO, DecodedJWT, DTOUserProfile } from './interface';
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
    try {
        const decodedToken: DecodedJWT = decodeJwt(token);
    } catch (error) {
        return res.status(403).json({
            status: 403,
            message: "Invalid Token",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    const userId = req.query.id as string;
    const username = req.query.username as string;
    const email = req.query.email as string;

    let userProfile: DTOUserProfile | null = null;

    if (userId) {
        userProfile = mockProfiles[userId]
    } else if (username) {
        userProfile = allProfiles.find(profile =>
            profile.username.toLowerCase() === username.toLowerCase()
        ) as DTOUserProfile | null;
    } else if (email) {
        userProfile = allProfiles.find(profile =>
            profile.email.toLowerCase() === email.toLowerCase()
        ) as DTOUserProfile | null;
    }

    // 5. Create Response Object
    const response: BaseResponseDTO<DTOUserProfile | null> = {
        status: 200,
        message: "Success fetching user profile",
        timestamp: new Date().toISOString(),
        data: userProfile
    };

    return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123