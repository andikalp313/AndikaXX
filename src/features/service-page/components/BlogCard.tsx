"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../../../components/ui/badge";
import { Blog } from "@/types/blog";
import { FC } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

const BlogCard: FC<BlogCardProps> = ({ blog, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <Card
        className={`bg-[#1A1A1A] text-[#E5E5E5] shadow-lg rounded-lg overflow-hidden border border-gray-800 ${className}`}
      >
        {/* Header with Thumbnail Image */}
        <CardHeader className="relative w-full h-[350px] overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt="Blog thumbnail"
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </CardHeader>

        <CardContent className="p-5">
          {/* Category and Date Badges */}
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className="rounded-sm bg-[#00FFFF] text-[#1A1A1A] font-semibold"
            >
              {blog.category}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-sm text-gray-400 border-gray-400"
            >
              {format(new Date(blog.createdAt), "dd MMM yy")}
            </Badge>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-bold text-[#00FFFF] mb-2 line-clamp-1 hover:underline hover:text-cyan-300"
          >
            {blog.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm line-clamp-3"
          >
            {blog.description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
