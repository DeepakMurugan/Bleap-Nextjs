import fs from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

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

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");

    if (!filename) {
      return Response.json(
        { error: "Filename is required" },
        { status: 400 }
      );
    }

    // Prevent directory traversal
    if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
      return Response.json(
        { error: "Invalid filename" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "public/uploads", filename);
    const file = await fs.readFile(filePath);

    return new Response(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    return Response.json(
      { error: "File not found or error reading file" },
      { status: 404 }
    );
  }
}
