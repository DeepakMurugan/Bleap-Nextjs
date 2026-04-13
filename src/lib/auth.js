import { cookies } from "next/headers";

export async function isAdminAuthenticated() {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token");
    return !!authToken;
  } catch (error) {
    console.error("Auth check error:", error);
    return false;
  }
}

export async function getAuthStatus() {
  const isAuth = await isAdminAuthenticated();
  return {
    isAuthenticated: isAuth,
  };
}
