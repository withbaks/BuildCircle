/**
 * API endpoint constants - swap mock data for these when backend is ready
 */

export const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    registerPartner: "/auth/register/partner",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
  },
  projects: {
    list: "/projects",
    detail: (id: string) => `/projects/${id}`,
    create: "/projects",
    update: (id: string) => `/projects/${id}`,
    vote: (id: string) => `/projects/${id}/vote`,
  },
  contribute: {
    create: "/contributions",
    byProject: (id: string) => `/contributions?projectId=${id}`,
  },
  partners: {
    list: "/partners",
    detail: (id: string) => `/partners/${id}`,
    projects: (id: string) => `/partners/${id}/projects`,
  },
  transparency: {
    stats: "/transparency/stats",
    activity: "/transparency/activity",
  },
} as const;
