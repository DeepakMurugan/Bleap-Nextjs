import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const pathname = children?.type?.name || "";
  
  // Get current path from the children or environment
  const authToken = cookieStore.get("auth_token");

  // Allow login page without authentication
  // For other pages, we'll use middleware and client-side checks
  
  return <>{children}</>;
}
