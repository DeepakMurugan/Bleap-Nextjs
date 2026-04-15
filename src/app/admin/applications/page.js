"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Eye, X, FileText, Mail, Phone, MapPin, Briefcase, LogOut, BriefcaseBusiness } from "lucide-react";


export default function ApplicationsPage() {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJob, setFilterJob] = useState("All");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    checkAuth();
    fetchApplications();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/applications", {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        setAuthenticated(false);
        console.log("Not authenticated, redirecting to login");
        router.push("/admin/login");
        return;
      }

      setAuthenticated(true);
    } catch (error) {
      console.error("Auth check error:", error);
      setAuthenticated(false);
      router.push("/admin/login");
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications");
      const data = await response.json();
      console.log("Fetched applications:", data);
    
      const appsArray = Array.isArray(data) ? data : [];
      setApplications(appsArray);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (app) => {
    setSelectedApp(app);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApp(null);
    document.body.style.overflow = "auto";
  };

  const downloadResume = (filename) => {
    if (!filename) {
      alert("No resume available for this application");
      return;
    }
    window.location.href = `/api/download-resume?filename=${filename}`;
  };

  const exportToCSV = () => {
    if (filteredApplications.length === 0) {
      alert("No applications to export");
      return;
    }

    const headers = [
      "Full Name",
      "Email",
      "Phone",
      "Location",
      "Job Title",
      "Message",
      "Has Resume",
      "Submitted At",
    ];

    const csv = [
      headers.join(","),
      ...filteredApplications.map((app) =>
        [
          `"${app.fullName}"`,
          `"${app.email}"`,
          `"${app.phone}"`,
          `"${app.location}"`,
          `"${app.jobTitle}"`,
          `"${app.message.replace(/"/g, '""')}"`,
          app.hasResume ? "Yes" : "No",
          new Date(app.submittedAt).toLocaleString(),
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_${new Date().getTime()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const uniqueJobs = ["All", ...new Set((applications || []).map((app) => app.jobTitle))];

  const filteredApplications = applications.filter((app) => {
    const matchSearch =
      searchTerm === ""
        ? true
        : app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.phone.includes(searchTerm);

    const matchJob = filterJob === "All" ? true : app.jobTitle === filterJob;

    return matchSearch && matchJob;
  });

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-[#666]">Loading applications...</div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#f6f6f6] px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#333]">Applications</h1>
              <p className="mt-1 text-sm text-[#666]">
                Total: <span className="font-semibold">{filteredApplications.length}</span> of{" "}
                <span className="font-semibold">{applications.length}</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <FileText className="h-4 w-4" />
                Export to CSV
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-6 py-3 text-sm font-medium text-[#333] transition hover:bg-[#f9f9f9] disabled:opacity-50"
              >
                <LogOut className="h-4 w-4" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
                <a
                  href="/admin/jobs"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-6 py-3 text-sm font-medium text-[#333] transition hover:bg-[#f9f9f9]"
                >
                  <Briefcase className="h-4 w-4" />
                  Manage Jobs
                </a>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-11 w-full rounded-lg border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
              />
            </div>
            <select
              value={filterJob}
              onChange={(e) => setFilterJob(e.target.value)}
              className="h-11 rounded-lg border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
            >
              {uniqueJobs.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>

          {/* Applications Table/Cards */}
          {filteredApplications.length > 0 ? (
            <div className="space-y-4">
              {filteredApplications.map((app, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#e6e6e6] bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#333]">{app.fullName}</h3>
                      <div className="mt-2 space-y-1 text-sm text-[#666]">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#f28c28]" />
                          {app.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#f28c28]" />
                          {app.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#f28c28]" />
                          {app.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-[#f28c28]" />
                          {app.jobTitle}
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-[#999]">
                        Submitted: {new Date(app.submittedAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:flex-col sm:flex-nowrap">
                      <button
                        onClick={() => openModal(app)}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#f28c28] px-4 py-2 text-sm font-medium text-[#f28c28] transition hover:bg-[#fff6ee]"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>

                      {app.hasResume && app.resumeFileName && (
                        <button
                          onClick={() => downloadResume(app.resumeFileName)}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f28c28] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                        >
                          <Download className="h-4 w-4" />
                          Resume
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
              <p className="text-sm text-[#8b7a6a]">No applications found</p>
            </div>
          )}
        </div>
      </main>

      {/* View Modal */}
      {showModal && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl sm:p-8">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-[#999] transition hover:bg-[#f5f5f5]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-10">
              <h2 className="text-2xl font-bold text-[#333]">{selectedApp.fullName}</h2>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Job Applied For
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#f28c28]">
                    {selectedApp.jobTitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-[#333]">{selectedApp.email}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-[#333]">{selectedApp.phone}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-[#333]">{selectedApp.location}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                      Applied On
                    </p>
                    <p className="mt-1 text-sm text-[#333]">
                      {new Date(selectedApp.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Cover Letter / Message
                  </p>
                  <p className="mt-2 whitespace-pre-wrap rounded-lg bg-[#f9f9f9] p-4 text-sm text-[#333]">
                    {selectedApp.message}
                  </p>
                </div>

                {selectedApp.hasResume && selectedApp.resumeFileName && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                      Resume
                    </p>
                    <button
                      onClick={() => downloadResume(selectedApp.resumeFileName)}
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#f28c28] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      <Download className="h-4 w-4" />
                      Download Resume
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="rounded-lg border border-[#e6e6e6] px-6 py-2 text-sm font-medium text-[#333] transition hover:bg-[#f9f9f9]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
