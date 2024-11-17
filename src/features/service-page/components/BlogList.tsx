import { Blog } from "@/types/blog";
import BlogCard from "@/features/service-page/components/BlogCard";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <section className="flex flex-col items-center gap-10 w-full px-6 lg:px-20 py-20 text-gray-200">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-cyan-300 font-plusJakartaSans text-4xl md:text-6xl font-bold leading-snug">
          Welcome to Our Product
        </h1>
        <p className="mt-4 text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Pioneering the Future of Robotics and AI Innovation
        </p>
      </motion.div>

      {/* Blog Carousel */}
      <div className="w-full mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }} // Clickable pagination
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3-second delay
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-[1280px] px-4"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.entryId}>
              {" "}
              {/* Use blog.id for the key */}
              <div className="transform transition-all hover:scale-105 flex justify-center hover:bg-opacity-80 shadow-xl rounded-lg">
                <BlogCard
                  blog={blog}
                  className="w-full h-full max-w-[400px] border border-cyan-400 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogList;
