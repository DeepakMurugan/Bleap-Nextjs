"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Images imported from assets (as you asked)
import blog1 from "../../assets/blogs/blog1.png";
import blog2 from "../../assets/blogs/blog1.png";
import blog3 from "../../assets/blogs/blog1.png";

const BLOGS = [
  {
    id: 1,
    title: "Which one drives more sales?",
    subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://blog.yourdomain.com/post-1",
    image: blog1,
  },
  {
    id: 2,
    title: "Which one drives more sales?",
    subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://blog.yourdomain.com/post-2",
    image: blog2,
  },
  {
    id: 3,
    title: "Which one drives more sales?",
    subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://blog.yourdomain.com/post-3",
    image: blog3,
  },
];

export default function LatestBlogsSection() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-12">
        {/* Title */}
        <h2 className="text-center text-[30px] md:text-[25px] font-semibold text-neutral-900">
          Explore our <span className="text-[#ff6a00]">Latest Blogs</span>
        </h2>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="p-4">
                <div className="overflow-hidden rounded-2xl bg-[#f6f6f6]">
                  <Image
                    src={blog.image}
                    alt={blog.subtitle}
                    className="h-[140px] w-full object-cover"
                    priority={blog.id === 1}
                  />
                </div>

                {/* Text content */}
                <div className="mt-4">
                  <p className="text-[13px] font-semibold text-neutral-800">
                    {blog.title}
                  </p>

                  <p className="mt-2 text-[12px] text-neutral-600 leading-5 line-clamp-2">
                    {blog.subtitle}
                  </p>

                  {/* Read More button */}
                  <div className="mt-4">
                    <Link
                      href={blog.href}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-[#ff6a00] bg-[#f7f7f7] px-6 py-[6px] text-[12px] font-medium text-neutral-700 hover:bg-[#ff6a00] hover:text-white transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom View more button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://blog.yourdomain.com"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}