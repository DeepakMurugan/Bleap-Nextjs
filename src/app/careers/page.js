"use client";

import { useMemo, useState } from "react";
import { X, ChevronDown, Search, MapPin, Briefcase, Clock3 } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "UI/UX Designer",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "2-4 Years",
    category: "Design",
    posted: "Full Time",
    description:
      "We are looking for a creative UI/UX Designer with strong visual design sense and experience in web and product interface design.",
  },
  {
    id: 2,
    title: "SEO Analyst",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "1-3 Years",
    category: "SEO",
    posted: "Full Time",
    description:
      "Seeking an SEO Analyst who can handle on-page, off-page, keyword research, competitor tracking, and performance reporting.",
  },
  {
    id: 3,
    title: "SEO Analyst",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "1-3 Years",
    category: "SEO",
    posted: "Full Time",
    description:
      "Looking for a performance-driven SEO professional with good understanding of technical SEO and content optimization.",
  },
  {
    id: 4,
    title: "Social Media Executive",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "1-3 Years",
    category: "Social Media",
    posted: "Full Time",
    description:
      "Handle content scheduling, campaign support, creative coordination, and social media reporting across major platforms.",
  },
  {
    id: 5,
    title: "Performance Marketer",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "2-4 Years",
    category: "Marketing",
    posted: "Full Time",
    description:
      "Run and optimize paid campaigns across Meta and Google while improving lead quality, ROAS, and campaign structure.",
  },
  {
    id: 6,
    title: "UX/UI Designer",
    location: "Teynampet, Chennai Tamilnadu, India",
    type: "Full Time",
    experience: "2-4 Years",
    category: "Design",
    posted: "Full Time",
    description:
      "Design modern interfaces, user journeys, and responsive experiences for digital products and websites.",
  },
];

const FILTERS = ["All Jobs", "Full Time", "Internship"];

export default function CareersPage() {
  const [selectedFilter, setSelectedFilter] = useState("All Jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyFor, setApplyFor] = useState(null);
  
  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchFilter =
        selectedFilter === "All Jobs" ? true : job.type === selectedFilter;

      const matchSearch =
        searchTerm.trim() === ""
          ? true
          : job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchDropdown =
        selectedJob === "" ? true : job.title.toLowerCase() === selectedJob.toLowerCase();

      return matchFilter && matchSearch && matchDropdown;
    });
  }, [selectedFilter, searchTerm, selectedJob]);

  const openApplyModal = (job) => {
    setApplyFor(job);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setApplyFor(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
    setResume(null);
    setSubmitStatus(null);
    document.body.style.overflow = "auto";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("location", location);
      formData.append("message", message);
      formData.append("jobTitle", applyFor?.title);
      if (resume) {
        formData.append("resume", resume);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Application submitted successfully!" });
        // Reset form
        setFullName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setMessage("");
        setResume(null);
        // Close modal after 2 seconds
        setTimeout(() => {
          closeApplyModal();
        }, 2000);
      } else {
        setSubmitStatus({ type: "error", message: data.error || "Failed to submit application" });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#f6f6f6] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
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
              Bleap is all about telescopic horizon and microscopic execution. Founded in 2016, Bleap is a Chennai, India based digital marketing agency made  for the world. We offer responsive website design & development  Search Engine Optimization (SEO), Online Advertising (SEM), Social Media Marketing (SMM), Strategic Marketing and E-Commerce solutions for our  clients.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f28c28] bg-white px-5 py-2 text-sm font-medium text-[#f28c28] transition hover:bg-[#fff6ee]">
View Openings              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f28c28] text-white">
                +
              </span>
            </button>
          </section>

          {/* Content */}
          <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Sidebar */}
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

            {/* Jobs Area */}
            <div className="rounded-2xl border border-[#ececec] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-5 md:p-6">
              {/* Top Filters */}
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
                    {[...new Set(JOBS.map((job) => job.title))].map((jobTitle) => (
                      <option key={jobTitle} value={jobTitle}>
                        {jobTitle}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b0b0b0]" />
                </div>
              </div>

              {/* Job List */}
              <div className="mt-6 space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
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
                          <span className="text-md text-[#000000]">{job.posted}</span>

                          <button
                            onClick={() => openApplyModal(job)}
                            className="inline-flex items-center gap-2 rounded-full border border-[#f28c28] px-4 py-2 text-sm font-medium text-[#f28c28] transition hover:bg-[#fff6ee]"
                          >
                            Apply Now
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f28c28] text-white">
                              +
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#e7d1bb] bg-[#fffaf5] p-10 text-center">
                    <p className="text-sm text-[#8b7a6a]">
                      No openings found for the selected filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Apply Modal */}
      {isModalOpen && (
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
                {applyFor?.title}
              </h3>
              <p className="mt-2 text-sm text-[#777]">
                Fill in your details and upload your resume.
              </p>
            </div>

            <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleFormSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Current Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#e6e6e6] px-4 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Cover Letter / Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write a short message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#e6e6e6] px-4 py-3 text-sm outline-none transition focus:border-[#f28c28]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#555]">
                  Upload Resume
                </label>
                <input
                  type="file"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  className="block w-full rounded-xl border border-[#e6e6e6] px-4 py-3 text-sm text-[#666] file:mr-4 file:rounded-lg file:border-0 file:bg-[#fff3e8] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#f28c28] hover:file:bg-[#ffe7d1]"
                />
              </div>

              {submitStatus && (
                <div className={`md:col-span-2 rounded-lg p-4 text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
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
                  className="rounded-full bg-[#f28c28] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
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