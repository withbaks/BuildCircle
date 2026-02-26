/**
 * API types - ready for backend integration
 * Replace mock data with API calls using these types
 */

export type ProjectType = "personal" | "community";
export type ProjectStatus = "draft" | "live" | "backed" | "in_progress" | "completed" | "stalled";
export type UrgencyLevel = "low" | "medium" | "high" | "urgent";
export type SupportType = "money" | "skills" | "resources" | "awareness";
export type UserRole = "community_member" | "verified_partner" | "admin";

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  dob?: string;
  role: UserRole;
  verified: boolean;
  createdAt: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  projectsBacked: number;
  rating: number;
  verified: boolean;
  backedProjects?: Project[];
}

export interface Milestone {
  id: string;
  title: string;
  done: boolean;
  verifiedAt?: string;
}

export interface ProjectUpdate {
  id: string;
  date: string;
  text: string;
  verified: boolean;
  attachments?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  location?: string;
  urgency: UrgencyLevel;
  status: ProjectStatus;
  goal: number;
  raised: number;
  votes: number;
  supportNeeded: SupportType[];
  partner?: Partner;
  requesterId: string;
  milestones?: Milestone[];
  updates?: ProjectUpdate[];
  taggedPartners?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Contribution {
  id: string;
  projectId: string;
  userId: string;
  type: SupportType;
  amount?: number;
  anonymous: boolean;
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}
