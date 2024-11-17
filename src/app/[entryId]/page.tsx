"use client";
import { getEntry } from "@/lib/contentful";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogDetailProps {
  params: { entryId: string };
}

const BlogDetail: FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntry(params.entryId);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      {/* Section 1: Blog Header */}
      <section className="py-12 px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-cyan-500">{blog.title}</h1>
          <p className="text-gray-400 mt-4">
            {format(new Date(blog.createdAt), "dd MMM yyyy")}
          </p>
          <span className="text-gray-500 uppercase text-sm tracking-wider">
            {blog.category}
          </span>
        </motion.div>
      </section>

      <section className="relative flex flex-col items-center gap-8 py-16 px-6">
        {/* Interactive Robot Image */}
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Section 3: Blog Content */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {documentToReactComponents(blog.content)}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          © 2024 Robotic Interactive. All rights reserved.
        </motion.div>
      </footer>
    </main>
  );
};

export default BlogDetail;
