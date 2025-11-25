import { JwtPayload } from "jsonwebtoken";

export enum UserRoleType {
  SUPERADMIN = "Superadmin",
  ACCOMMODATION_OWNER = "Accommodation Owner",
  FLIGHT_AIRLINE = "Flight Airline",
  CUSTOMER = "Customer",
  INSURANCE_PROVIDER = "Insurance Provider",
  TOUR_PACKAGE_VENDOR = "Tour Package Vendor",
  RENTAL_VENDOR = "Rental Vendor",
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female"
}

export interface DTOUserProfile {
  userId: string;
  username: string
  name: string;
  email: string;
  gender: Gender;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  role: UserRoleType;
}

export interface DTOCustomer extends DTOUserProfile {
    saldo: number;
}

export interface DTORentalVendor extends DTOUserProfile {
    phone: string;
    listOfLocations: string[];
}

export interface BaseResponseDTO<T> {
  status: number;
  message: string;
  timestamp: string;
  data: T;
}

export interface DecodedUserJWT extends JwtPayload {
    id : string;
    role : string;
}

export interface DecodedServiceJWT extends JwtPayload {
    iss : string;
    aud : string;
}

export interface DTOLoyalty {
  customerId : string;
  loyaltyPoints: number;
}

export interface DTODiscount {
  discount : number;
}

export interface DTOCoupon {
  couponCode : string;
  customerId : string;
}

export interface PurchasedCoupon {
  id: string; 
  code: string; 
  customerId: string;
  couponId: string; 
  purchasedDate: Date;
  usedDate: Date | null; 
}

export interface Coupon {
  /**
   * Primary key/unique identifier for the coupon definition.
   */
  id: string; // Corresponds to UUID
  
  /**
   * Display name of the coupon (e.g., "Summer Sale 2026").
   */
  name: string; // Corresponds to String
  
  /**
   * Detailed explanation of the coupon's benefits and terms.
   */
  description: string; // Corresponds to String
  
  /**
   * The number of reward points associated with this coupon.
   */
  points: number; // Corresponds to int
  
  /**
   * The percentage discount this coupon provides (e.g., 10 for 10%).
   */
  percentOff: number; // Corresponds to int
  
  /**
   * The date and time the coupon definition was created.
   */
  createdDate: Date; // Corresponds to LocalDateTime
  
  /**
   * The date and time the coupon definition was last modified.
   */
  updatedDate: Date; // Corresponds to LocalDateTime
}

export interface DTOLoginResponse {
  token : string;
}