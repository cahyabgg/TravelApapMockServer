import jwt from 'jsonwebtoken';
import { DecodedServiceJWT, DecodedUserJWT } from '../interface';

const SECRET = "mySuperSecretKeyForMockServer123";

export function decodeJwt (token : string) : DecodedUserJWT | DecodedServiceJWT {
    try {
        return jwt.verify(token,SECRET) as DecodedUserJWT | DecodedServiceJWT;
    } catch (error) {
        throw new Error('JWT payload is missing required custom claims (id or role).');
    }
}