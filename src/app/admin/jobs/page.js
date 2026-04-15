"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  LogOut,
  X,
  Briefcase,
  FileText,
  PenBoxIcon,
} from "lucide-react";

const EMPTY_FORM = {
  title: "",
  location: "Chennai, Tamilnadu, India",
  type: "Full Time",
  experience: "",
  category: "",
  posted: "Full Time",
  description: "",
};

const CATEGORIES = [
  "Social Media",
  "Marketing",
  "Content",
  "Video",
  "Design",
  "Development",
  "SEO",
  "Sales",
  "Other",
];

export default function AdminJobsPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [allowApplicationsGlobally, setAllowApplicationsGlobally] = useState(true);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Add job modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formError, setFormError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Edit job modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY_FORM);
  const [editError, setEditError] = useState("");
  const [isEditSaving, setIsEditSaving] = useState(false);

  // Confirm delete
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Global toggle saving
  const [isTogglingGlobal, setIsTogglingGlobal] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/applications", { credentials: "include" });
      if (res.status === 401) {
        setAuthenticated(false);
        router.push("/admin/login");
        return;
      }
      setAuthenticated(true);
      fetchJobs();
    } catch {
      setAuthenticated(false);
      router.push("/admin/login");
    }
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(Array.isArray(data.jobs) ? data.jobs : []);
      setAllowApplicationsGlobally(data.settings?.allowApplicationsGlobally ?? true);
    } catch {
      // silently fail on fetch error
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      setIsLoggingOut(false);
    }
  };

  // ── Global toggle ──────────────────────────────────────────────────────────
  const toggleGlobal = async () => {
    setIsTogglingGlobal(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          updateSettings: true,
          allowApplicationsGlobally: !allowApplicationsGlobally,
        }),
      });
      if (res.ok) {
        setAllowApplicationsGlobally((prev) => !prev);
      }
    } finally {
      setIsTogglingGlobal(false);
    }
  };

  // ── Per-job toggle ─────────────────────────────────────────────────────────
  const toggleJobApply = async (job) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: job.id, applyEnabled: !job.applyEnabled }),
      });
      if (res.ok) {
        setJobs((prev) =>
          prev.map((j) => (j.id === job.id ? { ...j, applyEnabled: !j.applyEnabled } : j))
        );
      }
    } catch {
      // silently fail
    }
  };

  // ── Add job ────────────────────────────────────────────────────────────────
  const openAddModal = () => {
    setFormData(EMPTY_FORM);
    setFormError("");
    setShowAddModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    document.body.style.overflow = "auto";
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.title.trim() || !formData.experience.trim() || !formData.category.trim() || !formData.description.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setJobs((prev) => [...prev, data]);
        closeAddModal();
      } else {
        setFormError(data.error || "Failed to add job.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // ── Edit job ───────────────────────────────────────────────────────────────
  const openEditModal = (job) => {
    setEditingJob(job);
    setEditForm({
      title: job.title,
      location: job.location,
      type: job.type,
      experience: job.experience,
      category: job.category,
      posted: job.posted,
      description: job.description,
    });
    setEditError("");
    setShowEditModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingJob(null);
    document.body.style.overflow = "auto";
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditError("");

    if (!editForm.title.trim() || !editForm.experience.trim() || !editForm.category.trim() || !editForm.description.trim()) {
      setEditError("Please fill in all required fields.");
      return;
    }

    setIsEditSaving(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingJob.id, ...editForm }),
      });
      const data = await res.json();
      if (res.ok) {
        setJobs((prev) => prev.map((j) => (j.id === editingJob.id ? data : j)));
        closeEditModal();
      } else {
        setEditError(data.error || "Failed to update job.");
      }
    } catch {
      setEditError("Network error. Please try again.");
    } finally {
      setIsEditSaving(false);
    }
  };

  // ── Delete job ─────────────────────────────────────────────────────────────
  const confirmDelete = (job) => {
    setDeleteTarget(job);
  };

  const cancelDelete = () => {
    setDeleteTarget(null);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/jobs?id=${deleteTarget.id}`, { method: "DELETE" });
      if (res.ok) {
        setJobs((prev) => prev.filter((j) => j.id !== deleteTarget.id));
        setDeleteTarget(null);
      }
    } finally {
      setIsDeleting(false);
    }
  };

  // ── Loading / auth guards ──────────────────────────────────────────────────
  if (loading || authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-[#666]">Checking access...</div>
      </div>
    );
  }

  if (authenticated === false) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-[#666]">Redirecting to login...</div>
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <main className="min-h-screen bg-[#f6f6f6] px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#333]">Job Roles</h1>
              <p className="mt-1 text-sm text-[#666]">
                Manage job listings shown on the careers page.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={openAddModal}
                className="inline-flex items-center gap-2 rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                <Plus className="h-4 w-4" />
                Add Job
              </button>
              <a
                href="/admin/applications"
                className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-5 py-2.5 text-sm font-medium text-[#333] transition hover:bg-[#f9f9f9]"
              >
                <FileText className="h-4 w-4" />
                Applications
              </a>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-5 py-2.5 text-sm font-medium text-[#333] transition hover:bg-[#f9f9f9] disabled:opacity-50"
              >
                <LogOut className="h-4 w-4" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>

          {/* Global Applications Toggle */}
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#e6e6e6] bg-white px-5 py-4 shadow-sm">
            <div>
              <p className="text-sm font-semibold text-[#333]">Global Applications</p>
              <p className="mt-0.5 text-xs text-[#888]">
                When disabled, all &quot;Apply Now&quot; buttons are hidden regardless of per-job settings.
              </p>
            </div>
            <button
              onClick={toggleGlobal}
              disabled={isTogglingGlobal}
              className="flex items-center gap-2 text-sm font-medium disabled:opacity-50"
            >
              {allowApplicationsGlobally ? (
                <>
                  <span className="text-[#f28c28]">Enabled</span>
                </>
              ) : (
                <>
                  <span className="text-[#aaa]">Disabled</span>
                </>
              )}
            </button>
          </div>

          {/* Jobs list */}
          {loading ? (
            <div className="rounded-lg border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
              <p className="text-sm text-[#8b7a6a]">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
              <p className="text-sm text-[#8b7a6a]">No job roles yet. Click &quot;Add Job&quot; to create one.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-[#e6e6e6] bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-[#333]">{job.title}</h3>
                        <span className="rounded-full bg-[#f5f5f5] px-2.5 py-0.5 text-xs text-[#777]">
                          {job.category}
                        </span>
                        <span className="rounded-full bg-[#fff3e8] px-2.5 py-0.5 text-xs text-[#f28c28]">
                          {job.type}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#888]">
                        <span>{job.location}</span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" /> {job.experience}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-5 text-[#555]">{job.description}</p>
                    </div>

                    <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                      {/* Toggle apply button */}
                      <button
                        onClick={() => toggleJobApply(job)}
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        aria-pressed={job.applyEnabled}
                        title={job.applyEnabled ? "Disable applications for this role" : "Enable applications for this role"}
                      >
                        <span
                          className={`relative inline-flex h-5 w-10 items-center rounded-full border px-1 transition-all duration-200 ${
                            job.applyEnabled
                              ? "border-green-600 bg-[#fff3e8]"
                              : "border-[#d9d9d9] bg-[#f4f4f4]"
                          }`}
                        >
                          <span
                            className={`absolute h-3 w-3 rounded-full shadow-sm transition-all duration-200 ${
                              job.applyEnabled
                                ? "translate-x-5 bg-green-600"
                                : "translate-x-0 bg-[#9e9e9e]"
                            }`}
                          />
                        </span>
                        <span className={`text-xs ${job.applyEnabled ? "text-green-600" : "text-[#8b8b8b]"}`}>
                          {job.applyEnabled ? "Enabled" : "Disabled"}
                        </span>
                      </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(job)}
                        className="rounded-lg border border-[#e6e6e6] px-3 py-1.5 text-sm font-medium text-[#555] transition hover:border-[#f28c28] hover:text-[#f28c28] flex items-center gap-1.5"
                      >
                        <PenBoxIcon className="h-3.5 w-3.5"  />
                        Edit
                      </button>

                      <button
                        onClick={() => confirmDelete(job)}
                        className="rounded-lg border border-[#fee] px-3 py-1.5 text-sm font-medium text-red-500 transition hover:bg-red-50 flex items-center gap-1.5"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Delete
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Add Job Modal ───────────────────────────────────────────────────── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={closeAddModal}
              className="absolute right-4 top-4 rounded-full p-2 text-[#777] transition hover:bg-[#f5f5f5]"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-semibold text-[#333]">Add New Job</h2>
            <p className="mt-1 text-sm text-[#888]">Fill in the details for the new role.</p>

            <form className="mt-5 space-y-4" onSubmit={handleAddSubmit}>
              <JobFormFields data={formData} onChange={setFormData} />

              {formError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 border border-red-200">
                  {formError}
                </p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="rounded-full border border-[#dadada] px-5 py-2.5 text-sm font-medium text-[#666] transition hover:bg-[#f8f8f8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Edit Job Modal ──────────────────────────────────────────────────── */}
      {showEditModal && editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={closeEditModal}
              className="absolute right-4 top-4 rounded-full p-2 text-[#777] transition hover:bg-[#f5f5f5]"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-semibold text-[#333]">Edit Job</h2>
            <p className="mt-1 text-sm text-[#888]">Update the details for this role.</p>

            <form className="mt-5 space-y-4" onSubmit={handleEditSubmit}>
              <JobFormFields data={editForm} onChange={setEditForm} />

              {editError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 border border-red-200">
                  {editError}
                </p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="rounded-full border border-[#dadada] px-5 py-2.5 text-sm font-medium text-[#666] transition hover:bg-[#f8f8f8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isEditSaving}
                  className="rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {isEditSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Delete Confirm ──────────────────────────────────────────────────── */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-[#333]">Delete Job?</h3>
            <p className="mt-2 text-sm text-[#666]">
              Are you sure you want to delete <strong>{deleteTarget.title}</strong>? This cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="rounded-full border border-[#dadada] px-5 py-2 text-sm font-medium text-[#666] transition hover:bg-[#f8f8f8]"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-full bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Shared form fields component ─────────────────────────────────────────────
function JobFormFields({ data, onChange }) {
  const set = (key) => (e) => onChange((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-[#555]">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={data.title}
          onChange={set("title")}
          placeholder="e.g. Frontend Developer"
          required
          className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#555]">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          value={data.category}
          onChange={set("category")}
          required
          className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
        >
          <option value="">Select category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#555]">
          Experience <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={data.experience}
          onChange={set("experience")}
          placeholder="e.g. 2-4 Years"
          required
          className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#555]">Type</label>
        <select
          value={data.type}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, type: e.target.value, posted: e.target.value }))
          }
          className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
        >
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#555]">Location</label>
        <input
          type="text"
          value={data.location}
          onChange={set("location")}
          placeholder="e.g. Chennai, Tamilnadu, India"
          className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-[#555]">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={3}
          value={data.description}
          onChange={set("description")}
          placeholder="Describe the role responsibilities..."
          required
          className="w-full rounded-xl border border-[#e6e6e6] px-4 py-2.5 text-sm outline-none transition focus:border-[#f28c28]"
        />
      </div>
    </div>
  );
}
