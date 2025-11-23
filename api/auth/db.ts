import { DTOUserProfile, Gender, UserRoleType } from "./interface";


const MOCK_DATETIME = new Date(Date.now());

export const mockProfiles: Record<string, DTOUserProfile> = {
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
  },

  "i9i9i9i9-i9i9-i9i9-i9i9-i9i9i9i9i9i9": {
    userId: "i9i9i9i9-i9i9-i9i9-i9i9-i9i9i9i9i9i9",
    role: UserRoleType.INSURANCE_PROVIDER,
    username: "insure_co",
    name: "Secure Shield",
    email: "contact@secure.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "t0p0v0t0-p0v0-t0p0-v0t0-p0v0t0p0v0t0": {
    userId: "t0p0v0t0-p0v0-t0p0-v0t0-p0v0t0p0v0t0",
    role: UserRoleType.TOUR_PACKAGE_VENDOR,
    username: "tour_vendor",
    name: "Global Tours Inc.",
    email: "info@globaltours.com",
    gender: Gender.FEMALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },

  "r1v1r1v1-r1v1-r1v1-r1v1-r1v1r1v1r1v1": {
    userId: "r1v1r1v1-r1v1-r1v1-r1v1-r1v1r1v1r1v1",
    role: UserRoleType.RENTAL_VENDOR,
    username: "car_rental",
    name: "Wheels On Demand",
    email: "rentals@wheels.com",
    gender: Gender.MALE,
    createdAt: MOCK_DATETIME,
    updatedAt: MOCK_DATETIME,
    isDeleted: false,
  },
};

export const allProfiles : DTOUserProfile[] = Object.values(mockProfiles);