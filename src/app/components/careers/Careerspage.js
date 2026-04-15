"use client";

import { useEffect, useMemo, useState } from "react";
import {
  X,
  ChevronDown,
  Search,
  MapPin,
  Briefcase,
  Clock3,
} from "lucide-react";

const ITEMS_PER_PAGE = 5;

const FILTERS = ["All Jobs", "Full Time", "Internship"];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  message: "",
  resume: null,
};

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [allowApplicationsGlobally, setAllowApplicationsGlobally] = useState(true);
  const [jobsLoading, setJobsLoading] = useState(true);

  const [selectedFilter, setSelectedFilter] = useState("All Jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyFor, setApplyFor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(Array.isArray(data.jobs) ? data.jobs : []);
        setAllowApplicationsGlobally(data.settings?.allowApplicationsGlobally ?? true);
      })
      .catch(() => {})
      .finally(() => setJobsLoading(false));
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchFilter =
        selectedFilter === "All Jobs" ? true : job.type === selectedFilter;

      const lowerSearch = searchTerm.trim().toLowerCase();

      const matchSearch =
        lowerSearch === ""
          ? true
          : job.title.toLowerCase().includes(lowerSearch) ||
            job.category.toLowerCase().includes(lowerSearch) ||
            job.location.toLowerCase().includes(lowerSearch);

      const matchDropdown =
        selectedJob === ""
          ? true
          : job.title.toLowerCase() === selectedJob.toLowerCase();

      return matchFilter && matchSearch && matchDropdown;
    });
  }, [jobs, selectedFilter, searchTerm, selectedJob]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, searchTerm, selectedJob]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredJobs.slice(start, end);
  }, [filteredJobs, currentPage]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        resume: files?.[0] || null,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openApplyModal = (job) => {
    if (!allowApplicationsGlobally || !job.applyEnabled) return;

    setApplyFor(job);
    setIsModalOpen(true);
    setFormData(INITIAL_FORM);
    setSubmitStatus(null);
    document.body.style.overflow = "hidden";
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setApplyFor(null);
    setFormData(INITIAL_FORM);
    setSubmitStatus(null);
    document.body.style.overflow = "auto";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!applyFor) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = new FormData();
      payload.append("jobId", String(applyFor.id)); // fixed hidden field
      payload.append("jobTitle", applyFor.title); // fixed hidden field
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("location", formData.location);
      payload.append("message", formData.message);

      if (formData.resume) {
        payload.append("resume", formData.resume);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully!",
        });

        setFormData(INITIAL_FORM);

        setTimeout(() => {
          closeApplyModal();
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit application",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#f6f6f6] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <section className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium tracking-[0.18em] text-[#8a8a8a] uppercase">
              Join us. We are cool
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#3e3e3e] sm:text-4xl md:text-[44px]">
              We&apos;re more than just a workplace.
              <br />
              <span className="text-[#f28c28]">We&apos;re a family.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#7b7b7b] sm:text-[15px]">
              Bleap is all about telescopic horizon and microscopic execution.
              Founded in 2016, Bleap is a Chennai, India based digital marketing
              agency made for the world. We offer responsive website design &
              development, Search Engine Optimization (SEO), Online Advertising
              (SEM), Social Media Marketing (SMM), Strategic Marketing and
              E-Commerce solutions for our clients.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f28c28] bg-white px-5 py-2 text-sm font-medium text-[#f28c28] transition hover:bg-[#fff6ee]">
              View Openings
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f28c28] text-white">
                +
              </span>
            </button>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-[#ececec] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              <h3 className="text-sm font-semibold text-[#4a4a4a]">Filter</h3>

              <div className="mt-4 space-y-3">
                {FILTERS.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-sm text-[#676767]"
                  >
                    <input
                      type="radio"
                      name="jobType"
                      value={item}
                      checked={selectedFilter === item}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="h-4 w-4 accent-[#f28c28]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </aside>

            <div className="rounded-2xl border border-[#ececec] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-5 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b0b0b0]" />
                  <input
                    type="text"
                    placeholder="Career openings"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-11 w-full rounded-full border border-[#f2c9a0] bg-[#fffdfb] pl-11 pr-4 text-sm text-[#444] outline-none transition placeholder:text-[#b0b0b0] focus:border-[#f28c28]"
                  />
                </div>

                <div className="relative md:w-[240px]">
                  <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="h-11 w-full appearance-none rounded-full border border-[#f2c9a0] bg-[#fffdfb] px-4 pr-10 text-sm text-[#444] outline-none transition focus:border-[#f28c28]"
                  >
                    <option value="">All Jobs</option>
                    {[...new Set(jobs.map((job) => job.title))].map((jobTitle) => (
                      <option key={jobTitle} value={jobTitle}>
                        {jobTitle}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b0b0b0]" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {jobsLoading ? (
                  <div className="rounded-2xl border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
                    <p className="text-sm text-[#8b7a6a]">Loading openings...</p>
                  </div>
                ) : paginatedJobs.length > 0 ? (
                  paginatedJobs.map((job) => {
                    const isApplyDisabled =
                      !allowApplicationsGlobally || !job.applyEnabled;

                    return (
                      <article
                        key={job.id}
                        className="rounded-2xl border border-[#eeeeee] bg-white p-4 transition hover:border-[#f3c79d] hover:shadow-[0_10px_25px_rgba(242,140,40,0.08)] sm:p-5"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0 flex-1">
                            <h2 className="text-lg font-semibold text-[#f28c28]">
                              {job.title}
                            </h2>

                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#000000]">
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#f28c28]" />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-[#f28c28]" />
                                {job.type}
                              </span>
                              <span className="inline-flex items-center gap-2">
                                <Clock3 className="h-4 w-4 text-[#f28c28]" />
                                {job.experience}
                              </span>
                            </div>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#000000]">
                              {job.description}
                            </p>
                          </div>

                          <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                            <span className="text-md text-[#000000]">
                              {job.posted}
                            </span>

                            <button
                              onClick={() => openApplyModal(job)}
                              disabled={isApplyDisabled}
                              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                                isApplyDisabled
                                  ? "cursor-not-allowed border-[#d8d8d8] bg-[#f5f5f5] text-[#9a9a9a]"
                                  : "border-[#f28c28] text-[#f28c28] hover:bg-[#fff6ee]"
                              }`}
                            >
                              {isApplyDisabled ? "Applications Closed" : "Apply Now"}
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-white ${
                                  isApplyDisabled ? "bg-[#c9c9c9]" : "bg-[#f28c28]"
                                }`}
                              >
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
                    <p className="text-sm text-[#8b7a6a]">
                      No openings found for the selected filter.
                    </p>
                  </div>
                )}
              </div>

              {filteredJobs.length > ITEMS_PER_PAGE && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-full border border-[#e3e3e3] px-4 py-2 text-sm text-[#555] transition hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`h-10 min-w-[40px] rounded-full border px-3 text-sm transition ${
                          currentPage === page
                            ? "border-[#f28c28] bg-[#f28c28] text-white"
                            : "border-[#e3e3e3] text-[#555] hover:bg-[#fafafa]"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="rounded-full border border-[#e3e3e3] px-4 py-2 text-sm text-[#555] transition hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      {isModalOpen && applyFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
            <button
              onClick={closeApplyModal}
              className="absolute right-4 top-4 rounded-full p-2 text-[#777] transition hover:bg-[#f5f5f5]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#a3a3a3]">
                Apply Now
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#333]">
                {applyFor.title}
              </h3>
              <p className="mt-2 text-sm text-[#777]">
                Fill in your details and upload your resume.
              </p>
            </div>

            <form
              className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="jobId" value={applyFor.id} readOnly />
              <input type="hidden" name="jobTitle" value={applyFor.title} readOnly />

              <div>
                <label className="mb-1 block text-sm font-medium text-[#555]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#555]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#555]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#555]">
                  Current Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="h-10 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-medium text-[#555]">
                  Cover Letter / Message
                </label>
                <textarea
                  rows={2}
                  name="message"
                  placeholder="Write a short message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-[#e6e6e6] px-4 py-3 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-[#555]">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-[#e6e6e6] px-4 py-3 text-sm text-[#666] file:mr-4 file:rounded-lg file:border-0 file:bg-[#fff3e8] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#f28c28] hover:file:bg-[#ffe7d1]"
                />
              </div>

              {submitStatus && (
                <div
                  className={`md:col-span-2 rounded-lg p-4 text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="mt-2 flex flex-col gap-3 md:col-span-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeApplyModal}
                  disabled={isSubmitting}
                  className="rounded-full border border-[#dadada] px-6 py-3 text-sm font-medium text-[#666] transition hover:bg-[#f8f8f8] disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}