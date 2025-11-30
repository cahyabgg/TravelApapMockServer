import { Coupon, DTOCustomer, DTOLoyalty, DTORentalVendor, DTOUserProfile, Gender, PurchasedCoupon, UserRoleType } from "./interface";


const MOCK_DATETIME = new Date(Date.now());

export const mockProfiles: Record<string, DTOUserProfile | DTOCustomer | DTORentalVendor> = {
  "00000000-0000-0000-0000-000000000001": {
    userId: "00000000-0000-0000-0000-000000000001",
    username: "superadmin",
    password: "superadmin123",
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
    username: "accomodation",
    password: "accomodation123",
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
    username: "airline",
    password: "airline123",
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
    username: "customer",
    password: "customer123",
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
    username: "insurance",
    password: "insurance123",
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
    username: "tour",
    password: "tour123",
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
    username: "rental",
    password: "rental123",
    name: "Wheels On Demand",
    email: "rentals@wheels.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "0000000000",
    listOfLocations: [
      "Kabupaten Administrasi Kepulauan Seribu",
      "Kota Administrasi Jakarta Barat",
      "Kota Administrasi Jakarta Pusat",
      "Kota Administrasi Jakarta Selatan",
      "Kota Administrasi Jakarta Timur",
      "Kota Administrasi Jakarta Utara"
    ]
  },
};


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


export const fiveNewMockRentalVendors: Record<string, DTORentalVendor> = {

  // Vendor 1 - CORRECTED UUID
  "e5f6a7b8-c9d0-e1f2-a3b4-c5d6e7f8a9b0": {
    userId: "e5f6a7b8-c9d0-e1f2-a3b4-c5d6e7f8a9b0",
    role: UserRoleType.RENTAL_VENDOR,
    username: "trucklease",
    password: "truckpass",
    name: "Heavy Duty Haulers",
    email: "trucks@haul.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "3333333333",
    listOfLocations: [
      "Kota Administrasi Jakarta Timur",
      "Kota Administrasi Jakarta Utara",
    ],
  },

  // Vendor 2 - CORRECTED UUID
  "f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1a2b3c4": {
    userId: "f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1a2b3c4",
    role: UserRoleType.RENTAL_VENDOR,
    username: "mopedz",
    password: "mopedpass",
    name: "Two Wheels Today",
    email: "bikes@twowheels.net",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "4444444444",
    listOfLocations: [
      "Kota Administrasi Jakarta Barat",
      "Kota Administrasi Jakarta Pusat",
    ],
  },

  // Vendor 3 - CORRECTED UUID
  "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6": {
    userId: "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
    role: UserRoleType.RENTAL_VENDOR,
    username: "boatrent",
    password: "boatpass",
    name: "Aqua Adventures Rentals",
    email: "water@adventures.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "5555555555",
    listOfLocations: [
      "Kota Administrasi Jakarta Selatan",
      "Kabupaten Administrasi Kepulauan Seribu",
      "Kota Administrasi Jakarta Pusat",
    ],
  },

  // Vendor 4 - CORRECTED UUID
  "b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0": {
    userId: "b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0",
    role: UserRoleType.RENTAL_VENDOR,
    username: "minibus",
    password: "buspass",
    name: "Group Transport Co.",
    email: "groups@transport.org",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "6666666666",
    listOfLocations: [
      "Kota Administrasi Jakarta Pusat",
      "Kota Administrasi Jakarta Timur",
      "Kota Administrasi Jakarta Selatan",
    ],
  },

  // Vendor 5 - CORRECTED UUID
  "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4": {
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    role: UserRoleType.RENTAL_VENDOR,
    username: "electricrent",
    password: "evpass",
    name: "Eco Drive Rentals",
    email: "hello@ecodrive.id",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
    phone: "7777777777",
    listOfLocations: [
      "Kabupaten Administrasi Kepulauan Seribu",
      "Kota Administrasi Jakarta Barat",
      "Kota Administrasi Jakarta Utara",
      "Kota Administrasi Jakarta Selatan",
      "Kota Administrasi Jakarta Timur",
    ],
  },
};


export const fiveNewMockAccommodationOwners: Record<string, DTOUserProfile> = {
  // Owner 1: Bed & Breakfast Manager
  "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d7": {
    userId: "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d7",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "bbandbreezy",
    password: "bbreasy123",
    name: "Elara House Manager",
    email: "manager@elarahouse.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  // Owner 2: Resort Chain VP
  "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3": {
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "resortboss",
    password: "resortking123",
    name: "Marcus Resort VP",
    email: "marcus@grandresort.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  // Owner 3: Boutique Hotel Owner
  "c4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9": {
    userId: "c4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "boutiquehotel",
    password: "boutique123",
    name: "Sophia Boutique Owner",
    email: "sophia@theboutique.net",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  // Owner 4: Hostel/Guesthouse Operator
  "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5": {
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "guesthouseop",
    password: "hostelpass",
    name: "Raju Guesthouse Manager",
    email: "raju@chillhostel.co",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  // Owner 5: Apartment Rental Manager
  "e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1": {
    userId: "e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1",
    role: UserRoleType.ACCOMMODATION_OWNER,
    username: "apartmentmgr",
    password: "aptsafe123",
    name: "Alex Apartment Rentals",
    email: "alex@rentals.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },
};

export const completeMockProfiles = {
  ...mockProfiles,
  ...fiveNewMockRentalVendors,
  ...fiveNewMockAccommodationOwners,

};

export const allProfiles: (DTOUserProfile | DTOCustomer | DTORentalVendor)[] = Object.values(completeMockProfiles);
