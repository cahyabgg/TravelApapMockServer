import type { VercelRequest, VercelResponse } from '@vercel/node';
import { mockCoupons, mockPoints, mockPurchasedCoupons } from '../db';
import { BaseResponseDTO, Coupon, DecodedServiceJWT, DTOCoupon, DTODiscount, DTOLoyalty, PurchasedCoupon } from '../interface';
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

    let discount : DTODiscount = {
        discount : 0
    }

    const body: DTOCoupon | undefined = req.body;

    if (!body || body.couponCode === null || body.customerId === null) {
        return res.status(400).json({
            status: 400,
            message: "Client Error : Body is null",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    const customerPurchasedCoupon: PurchasedCoupon | undefined = mockPurchasedCoupons.find(

        (coupon: PurchasedCoupon) => {
            return coupon.code === body.couponCode;
        }

    );

    if (!customerPurchasedCoupon || body.customerId !== customerPurchasedCoupon?.customerId ) {
        const response: BaseResponseDTO<DTODiscount> = {
            status: 200,
            message: "Success getting discounts",
            timestamp: new Date().toISOString(),
            data: discount
        };

        return res.status(200).json(response);
    }

    const customerCoupon: Coupon | undefined = mockCoupons.find(

        (coupon: Coupon) => {
            return coupon.id === customerPurchasedCoupon.couponId;
        }

    );

    if (!customerCoupon) {
        return res.status(500).json({
            status: 500,
            message: "Server Error : Purchased Coupon can't find Coupon",
            timestamp: new Date().toISOString(),
            data: null
        });
    }

    discount = {
        discount : customerCoupon.percentOff
    }

    // 5. Create Response Object
    const response: BaseResponseDTO<DTODiscount> = {
        status: 200,
        message: "Success getting discount",
        timestamp: new Date().toISOString(),
        data: discount
    };

    return res.status(200).json(response);
}
// mySuperSecretKeyForMockServer123