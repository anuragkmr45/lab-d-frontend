"use server";

import { cookies } from 'next/headers';

const TOKEN_KEY = 'auth_token';

export const setToken = (token: string) => {
  const cookieHandler = cookies();
  cookieHandler.set(TOKEN_KEY, token, { secure: true, sameSite: 'strict', httpOnly: true });
};

// For server-side
export const getServerToken = () => {
  const cookieHandler = cookies();
  const token = cookieHandler.get("auth_token");
  return token?.value || null;
};

// For client-side
export const getClientToken = () => {
  if (typeof window !== "undefined") {
    const match = document.cookie.match(/(^|;)\\s*auth_token=([^;]+)/);
    return match ? match[2] : null;
  }
  return null;
};

// Universal function
export const getToken = () => {
  if (typeof window === "undefined") {
    return getServerToken();
  } else {
    return getClientToken();
  }
};

// Remove token
export const removeToken = () => {
  const cookieHandler = cookies();
  cookieHandler.delete(TOKEN_KEY);
};
