import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("auth_token");

    return Response.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
}
