import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { cookies } from "next/headers";

const DATA_FILE = path.join(process.cwd(), "data", "jobs.json");

const ensureDataFile = () => {
  const dir = path.dirname(DATA_FILE);
  if (!fsSync.existsSync(dir)) {
    fsSync.mkdirSync(dir, { recursive: true });
  }
  if (!fsSync.existsSync(DATA_FILE)) {
    fsSync.writeFileSync(
      DATA_FILE,
      JSON.stringify({ settings: { allowApplicationsGlobally: true }, jobs: [] }, null, 2)
    );
  }
};

const readData = async () => {
  ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
};

const writeData = async (data) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

const isAuthenticated = async () => {
  const cookieStore = await cookies();
  return !!cookieStore.get("auth_token");
};

export async function GET() {
  try {
    const data = await readData();
    return Response.json(data);
  } catch (error) {
    console.error("GET /api/jobs error:", error);
    return Response.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}

export async function POST(request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, location, type, experience, category, posted, description } = body;

    if (!title || !location || !type || !experience || !category || !description) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await readData();
    const maxId = data.jobs.reduce((max, j) => Math.max(max, j.id), 0);

    const newJob = {
      id: maxId + 1,
      title: String(title).trim(),
      location: String(location).trim(),
      type: String(type).trim(),
      experience: String(experience).trim(),
      category: String(category).trim(),
      posted: String(posted || type).trim(),
      description: String(description).trim(),
      applyEnabled: true,
    };

    data.jobs.push(newJob);
    await writeData(data);

    return Response.json(newJob, { status: 201 });
  } catch (error) {
    console.error("POST /api/jobs error:", error);
    return Response.json({ error: "Failed to create job" }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = await readData();

    if (body.updateSettings) {
      data.settings.allowApplicationsGlobally = Boolean(body.allowApplicationsGlobally);
      await writeData(data);
      return Response.json({ settings: data.settings });
    }

    const { id, ...updates } = body;
    if (!id) {
      return Response.json({ error: "Job ID is required" }, { status: 400 });
    }

    const index = data.jobs.findIndex((j) => j.id === Number(id));
    if (index === -1) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }

    const allowed = ["title", "location", "type", "experience", "category", "posted", "description", "applyEnabled"];
    for (const key of allowed) {
      if (key in updates) {
        data.jobs[index][key] = updates[key];
      }
    }

    await writeData(data);
    return Response.json(data.jobs[index]);
  } catch (error) {
    console.error("PUT /api/jobs error:", error);
    return Response.json({ error: "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    if (!id) {
      return Response.json({ error: "Job ID is required" }, { status: 400 });
    }

    const data = await readData();
    const before = data.jobs.length;
    data.jobs = data.jobs.filter((j) => j.id !== id);

    if (data.jobs.length === before) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }

    await writeData(data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/jobs error:", error);
    return Response.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
