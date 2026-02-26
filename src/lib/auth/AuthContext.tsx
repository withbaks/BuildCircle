"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { User } from "@/lib/api/types";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string, role?: User["role"]) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setUser = useCallback((u: User | null) => {
    setUserState(u);
  }, []);

  const login = useCallback(async (email: string, password: string, role?: User["role"]) => {
    // Placeholder - replace with actual API call
    // const res = await api.post(ENDPOINTS.auth.login, { email, password });
    // localStorage.setItem("accessToken", res.accessToken);
    // setUserState(res.user);
    const userRole = role ?? "community_member";
    setUserState({
      id: "1",
      email,
      fullName: userRole === "verified_partner" ? "Lily's Charity Foundation" : "User",
      role: userRole,
      verified: userRole === "verified_partner",
      createdAt: new Date().toISOString(),
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUserState(null);
  }, []);

  useEffect(() => {
    // Check for existing session on mount
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (!token) {
      setIsLoading(false);
      return;
    }
    // TODO: Validate token and fetch user
    setIsLoading(false);
  }, []);

  const value: AuthContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
