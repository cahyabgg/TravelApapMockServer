import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseResponseDTO, DTOLoginResponse } from '../interface';
import validTokens from './token-mapping.json';


export default function handler(req: VercelRequest, res: VercelResponse) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    if (req.method !== 'POST') {
        return res.status(405).json({ status: 405, message: "Method Not Allowed", data: null });
    }

    const mapping = validTokens as Record<string, string>;

    const userRole = "SUPERADMIN";

    const userToken: DTOLoginResponse = {
        token: Object.keys(mapping).find(key => mapping[key] === userRole) as string
    };

    // Create Response Object
    const response: BaseResponseDTO<DTOLoginResponse> = {
        status: 200,
        message: "Success logging in",
        timestamp: new Date().toISOString(),
        data: userToken
    };

    return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123