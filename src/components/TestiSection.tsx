"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type User = {
  name: { first: string; last: string };
  picture: { large: string };
};

export default function TestiSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch 3 random users from the API
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-20 px-6 lg:px-10 bg-gray-900 text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg">
          Hear What Our <span className="text-cyan-400">Partners</span> Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Discover how AndikaX innovations have transformed workflows and set
          new standards in robotic intelligence.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 lg:grid-cols-3 max-w-7xl mx-auto">
        {loading ? (
          <div className="col-span-full text-center text-gray-500 text-lg">
            Loading testimonials...
          </div>
        ) : (
          users.map((user, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 border border-gray-700 rounded-xl shadow-lg hover:shadow-cyan-500/30 transform transition-transform duration-300 ease-out"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 255, 255, 0.2)",
              }}
            >
              <p className="text-cyan-200 italic mb-6 text-lg leading-relaxed">
                {index === 0 &&
                  `"AndikaX revolutionized our logistics. Their AI-driven precision transformed our efficiency by leaps and bounds."`}
                {index === 1 &&
                  `"Innovation at its peak. The AndikaX robotic integration has brought unmatched control and automation to our workflow."`}
                {index === 2 &&
                  `"Our partnership with AndikaX has redefined possibilities in automation. Their intelligent systems are truly groundbreaking."`}
              </p>
              <div className="flex items-center">
                <motion.img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400 transition-transform duration-300 ease-out transform hover:rotate-3"
                />
                <div>
                  <h4 className="font-semibold text-blue-400 text-lg">
                    {user.name.first} {user.name.last}
                  </h4>
                  <p className="text-gray-400 text-base">
                    {index === 0 ? "Logistics Partner" : "Automation Partner"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
