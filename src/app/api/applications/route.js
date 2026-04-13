import fs from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

const DATA_FILE = path.join(process.cwd(), "public", "careers-submissions.json");

export async function GET(request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token");

    if (!authToken) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const data = await fs.readFile(DATA_FILE, "utf-8");
    const submissions = JSON.parse(data);
    return Response.json(submissions);
  } catch (error) {
    console.error("Error reading applications:", error);
    return Response.json([], { status: 200 });
  }
}
