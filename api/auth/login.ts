import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseResponseDTO, DTOLoginResponse, DTOUserProfile } from '../interface';
import validTokens from './token-mapping.json';
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

    const body = req.body

    if (!body) {
        return res.status(400).json(
            {
                status: 400,
                message: "Body yang anda berikan kosong",
                data: null
            }
        );
    }

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.status(400).json(
            {
                status: 400,
                message: "Body yang anda berikan tidak mememiliki username atau password",
                data: null
            }
        );
    }

    const user = Object.values(mockProfiles).find((profile) => profile.username === username) as DTOUserProfile;

    if (!user || user.password !== password) {
        return res.status(401).json(
            {
                status: 401,
                message: "username atau password anda salah",
                data: null
            }
        );
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