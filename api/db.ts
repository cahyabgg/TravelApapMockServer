import { Coupon, DTOCustomer, DTOLoyalty, DTORentalVendor, DTOUserProfile, Gender, PurchasedCoupon, UserRoleType } from "./interface";


const MOCK_DATETIME = new Date(Date.now());

export const mockProfiles: Record<string, DTOUserProfile | DTOCustomer | DTORentalVendor> = {
  "00000000-0000-0000-0000-000000000001": {
    userId: "00000000-0000-0000-0000-000000000001",
    username: "super_admin",
    name: "Admin Alpha",
    email: "admin@corp.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    role: UserRoleType.SUPERADMIN,
  },
  
  "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501": {
    userId: "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "acco_owner",
    name: "Hotel Proprietor",
    email: "owner@hotel.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "a1b2c3d4-e5f6-7890-1234-567890abcdef": {
    userId: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    role: UserRoleType.FLIGHT_AIRLINE,
    username: "airline_rep",
    name: "SkyWings Agent",
    email: "agent@skywings.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1": {
    userId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1",
    role: UserRoleType.CUSTOMER,
    username: "traveler_one",
    name: "Pebbles Traveler",
    email: "travel@email.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    saldo: 0
  },

  "19191919-1919-1919-1919-191919191919": {
    userId: "19191919-1919-1919-1919-191919191919",
    role: UserRoleType.INSURANCE_PROVIDER,
    username: "insure_co",
    name: "Secure Shield",
    email: "contact@secure.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "d0e0f0d0-e0f0-d0e0-f0d0-e0f0d0e0f0d0": {
    userId: "d0e0f0d0-e0f0-d0e0-f0d0-e0f0d0e0f0d0",
    role: UserRoleType.TOUR_PACKAGE_VENDOR,
    username: "tour_vendor",
    name: "Global Tours Inc.",
    email: "info@globaltours.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "b1e1b1e1-b1e1-b1e1-b1e1-b1e1b1e1b1e1": {
    userId: "b1e1b1e1-b1e1-b1e1-b1e1-b1e1b1e1b1e1",
    role: UserRoleType.RENTAL_VENDOR,
    username: "car_rental",
    name: "Wheels On Demand",
    email: "rentals@wheels.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "0000000000",
    listOfLocations: ["aaa","aaa","aaa"]
  },
};

export const allProfiles: (DTOUserProfile | DTOCustomer | DTORentalVendor)[] = Object.values(mockProfiles);

export const mockPoints: Record<string, DTOLoyalty> = {
  "00000000-0000-0000-0000-000000000001": {
    customerId: "00000000-0000-0000-0000-000000000001",
    loyaltyPoints: 100
  },
  
  "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501": {
    customerId: "1a2b3c4d-5e6f-7080-90a0-b1c2d3e4f501",
    loyaltyPoints: 100
  },

  "a1b2c3d4-e5f6-7890-1234-567890abcdef": {
    customerId: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    loyaltyPoints: 100
  },

  "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1": {
    customerId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1",
    loyaltyPoints: 100
  },

  "19191919-1919-1919-1919-191919191919": {
    customerId: "19191919-1919-1919-1919-191919191919",
    loyaltyPoints: 100
  },

  "d0e0f0d0-e0f0-d0e0-f0d0-e0f0d0e0f0d0": {
    customerId: "d0e0f0d0-e0f0-d0e0-f0d0-e0f0d0e0f0d0",
    loyaltyPoints: 100
  },

  "b1e1b1e1-b1e1-b1e1-b1e1-b1e1b1e1b1e1": {
    customerId: "b1e1b1e1-b1e1-b1e1-b1e1-b1e1b1e1b1e1",
    loyaltyPoints: 100
  },
};

export const mockPurchasedCoupons: PurchasedCoupon[] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    code: "GIFT-A1B2C",
    customerId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1",
    couponId: "coup-005-sale",
    purchasedDate: new Date("2025-11-20T10:00:00Z"), 
    usedDate: null, 
  },
  
  {
    id: "f0e9d8c7-b6a5-4321-0fed-cba987654321",
    code: "SAVE-F0E9D",
    customerId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1",
    couponId: "coup-010-off",
    purchasedDate: new Date("2025-05-15T15:30:00Z"),
    usedDate: new Date("2025-06-01T12:00:00Z"), 
  },
  
  {
    id: "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
    code: "FRESH-1A2B3",
    customerId: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1", 
    couponId: "coup-012-holiday",
    purchasedDate: new Date("2025-08-25T08:15:00Z"),
    usedDate: null, 
  },
];

export const mockCoupons: Coupon[] = [
  {
    id: "coup-005-sale",
    name: "New Customer Discount",
    description: "Get 15% off your first purchase! Valid for 30 days.",
    points: 0, 
    percentOff: 15, 
    createdDate: new Date("2025-01-10T09:00:00Z"),
    updatedDate: new Date("2025-01-10T09:00:00Z"),
  },
  
  {
    id: "coup-010-off",
    name: "Bonus Loyalty Points",
    description: "Earn 500 extra loyalty points with this coupon.",
    points: 500, 
    percentOff: 0, 
    createdDate: new Date("2025-03-20T14:30:00Z"),
    updatedDate: new Date("2025-08-01T11:00:00Z"),
  },
  
  {
    id: "coup-012-holiday",
    name: "Holiday Flash Sale",
    description: "25% off all items for a limited time!",
    points: 0, 
    percentOff: 25, 
    createdDate: new Date("2025-10-15T00:00:00Z"),
    updatedDate: new Date("2025-10-15T00:00:00Z"),
  },
];