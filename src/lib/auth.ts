"use server";

import { cookies } from 'next/headers';

const TOKEN_KEY = 'auth_token';
const cookieHandler = cookies();

export const setToken = (token: string) => {

  cookieHandler.set(TOKEN_KEY, token, { secure: true, sameSite: 'strict', httpOnly: true });
};

// Get token
export const getToken = () => {
  return cookieHandler.get(TOKEN_KEY);
};

// Remove token
export const removeToken = () => {
    cookieHandler.delete(TOKEN_KEY);
};
