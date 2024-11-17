"use client";
import Product from "@/features/service-page/Product";
import { getEntries } from "@/lib/contentful";
export default async function Home() {
  const blogs = await getEntries(Number() || 1);
  if (!blogs) {
    return;
  }
  return (
    <div>
      <div>
        <Product />
      </div>
    </div>
  );
}
