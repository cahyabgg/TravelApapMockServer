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

export interface DecodedJWT extends JwtPayload {
    id : string;
    role : string;
}