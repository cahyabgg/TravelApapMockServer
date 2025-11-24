import type { VercelRequest, VercelResponse } from '@vercel/node';
import { mockPoints } from '../db';
import { BaseResponseDTO, DecodedServiceJWT, DTOLoyalty } from '../interface';
import { decodeJwt } from '../auth/jwt';


export default function handler(req: VercelRequest, res: VercelResponse) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    if (req.method !== 'POST') {
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
        const decodedToken: DecodedServiceJWT = decodeJwt(token) as DecodedServiceJWT;
    } catch (error) {
        return res.status(403).json({
            status: 403,
            message: "Invalid Token",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    const body : DTOLoyalty = req.body;

    let customerPoints : DTOLoyalty | null = mockPoints[body.customerId];

    if (!customerPoints) {
        return res.status(404).json({
            status: 404,
            message: "Invalid Customer Id",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    customerPoints.loyaltyPoints = customerPoints.loyaltyPoints + body.loyaltyPoints;

    // 5. Create Response Object
    const response: BaseResponseDTO<DTOLoyalty> = {
        status: 200,
        message: "Success adding user points",
        timestamp: new Date().toISOString(),
        data: customerPoints
    };

    return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123