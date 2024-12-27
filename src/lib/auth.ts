"use server";

import { cookies } from 'next/headers';

const TOKEN_KEY = 'auth_token';

export const setToken = async (token: string) => {
  const cookieHandler = await cookies();
  cookieHandler.set(TOKEN_KEY, token, { secure: true, sameSite: 'strict' });
};

// For server-side
export const getServerToken = async (): Promise<string | null> => {
  const cookieHandler = await cookies();
  const token = cookieHandler.get(TOKEN_KEY);
  return token?.value || null;
};

// For client-side
// export const getClientToken = (): Promise<string | null> => {
//   if(document !== undefined) {
//     const match = document?.cookie.match(/(^|;)\\s*auth_token=([^;]+)/);
//     return Promise.resolve(match ? match[2] : null);
//   }
//   return Promise.resolve(null);
// };

// Universal function
export const getToken = (): Promise<string | null> => {
  // if (typeof window === 'undefined') {
  //   return getServerToken();
  // } 
  return getServerToken();
  // else {
  //   return getClientToken();
  // }
};

// Remove token
export const removeToken = () => {
  const cookieHandler = cookies();
  cookieHandler.delete(TOKEN_KEY);
};
