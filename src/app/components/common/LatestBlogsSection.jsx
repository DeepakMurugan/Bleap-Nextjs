"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Images imported from assets (as you asked)
import blog1 from "../../assets/blogs/blog1.png";
import blog2 from "../../assets/blogs/b22.png";
import blog3 from "../../assets/blogs/b33.png";

const BLOGS = [
  {
    id: 1,
    title: "Unlocking the Power of Inbound Marketing: Discover Why Social Media Is a Viral!",
    // subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://bleap.in/blog/unlocking-the-power-of-inbound-marketing-discover-why-social-media-is-a-vital-component/",
    image: blog1,
  },
  {
    id: 2,
    title: "BLeap joins the award winning digital marketing agency list in 2023s",
    // subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://bleap.in/blog/bleap-joins-the-award-winning-digital-marketing/",
    image: blog2,
  },
  {
    id: 3,
    title: "Unlocking the Power of Inbound Marketing: Discover Why Social Media Is a Viral !",
    // subtitle: "Google Ads vs Facebook Ads: Which One Drives More Sales in 2025?",
    href: "https://bleap.in/blog/unlocking-the-power-of-inbound-marketing-discover-why-social-media-is-a-vital-component/",
    image: blog3,
  },
];

export default function 



LatestBlogsSection() {
  return (
    <section className="bg-[#F5F5F7]">
      <div className="mx-auto container px-6 lg:px-10 py-6  " >
        {/* Title */}
      

          <h2 className="text-center text-[25px] md:text-[28px] font-semibold text-neutral-900">
        Explore Our <span className="text-[#ff6a00]">Latest Blogs</span>
        </h2>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="p-5">
                <div className="overflow-hidden rounded-2xl bg-[#f6f6f6]">
                  <Image
                    src={blog.image}
                    alt={blog.subtitle}
                    className="h-[full] w-full object-cover  border-1   border-amber-100"
                    priority={blog.id === 1}
                  />
                </div>

                {/* Text content */}
                <div className="mt-4">
                  <p className="text-[16px] font-semibold text-neutral-800">
                    {blog.title}
                  </p>

                  <p className="mt-2 text-[14px] text-neutral-600 leading-5 line-clamp-2">
                    {blog.subtitle}
                  </p>

                  {/* Read More button */}
                  <div className="mt-4">
                    <Link
                      href={blog.href}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-[#ff6a00] bg-[#f7f7f7] px-6 py-[6px] text-[14px] font-medium text-neutral-700 hover:bg-[#ff6a00] hover:text-white transition-colors"
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
            href="https://bleap.in/blog"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-2 text-[16px] font-medium text-neutral-700 hover:bg-[#ff6a00] hover:text-white transition-colors"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}