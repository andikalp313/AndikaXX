"use client";
import TestiSection from "@/components/TestiSection";
import BlogList from "@/features/service-page/components/BlogList";
import { getEntries } from "@/lib/contentful";
export default async function Product() {
  const blogs = await getEntries(Number() || 1);
  if (!blogs) {
    return;
  }
  return (
    <div>
      <div>
        <BlogList blogs={blogs.data} />
        <div>
          <TestiSection />
        </div>
      </div>
    </div>
  );
}
