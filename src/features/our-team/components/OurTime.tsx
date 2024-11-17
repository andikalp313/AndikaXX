"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface OurTime {
  id: number;
  name: string;
  position: string;
  expertise: string;
  photoUrl: string;
}

export default function OurTeam() {
  const [team, setTeam] = useState<OurTime[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        ); // 6 team members
        const teamMembers = [
          {
            id: 0,
            name: "Andika Luhur Pambudi",
            position: "Chief Executive Officer (CEO)",
            expertise: "Visionary in AI and Robotics Strategy",
            photoUrl: "/images/andika.webp",
          },
          ...response.data.results.map((member: any, index: number) => ({
            id: index + 1,
            name: `${member.name.first} ${member.name.last}`,
            position:
              index === 0
                ? "Lead AI Engineer"
                : index === 1
                ? "Robotics Systems Architect"
                : index === 2
                ? "Human-Robot Interaction Specialist"
                : index === 3
                ? "Machine Learning Scientist"
                : index === 4
                ? "Robotics Software Engineer"
                : "AI Research Scientist",
            expertise:
              index === 0
                ? "Expert in deep learning models and AI-driven systems."
                : index === 1
                ? "Specializes in designing robotics systems and automation frameworks."
                : index === 2
                ? "Focuses on enhancing human-robot communication."
                : index === 3
                ? "Develops machine learning algorithms and predictive analytics."
                : index === 4
                ? "Designs robotics software solutions for efficient automation."
                : "Explores innovative AI models for problem-solving in diverse industries.",
            photoUrl: member.picture.large,
          })),
        ];
        setTeam(teamMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeam();
  }, []);

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center py-10"
      >
        <h1 className="text-cyan-300 font-plusJakartaSans text-4xl md:text-6xl font-bold leading-snug ">
          Welcome to AndikaX Team
        </h1>
        <p className="mt-4 text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Pioneering the Future of Robotics and AI Innovation
        </p>
      </motion.div>

      {/* CEO Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full max-w-4xl mb-20 p-12 bg-gray-800 rounded-lg shadow-xl border border-cyan-600 text-center transform transition duration-500 hover:scale-105"
      >
        <img
          src={team[0]?.photoUrl}
          alt={team[0]?.name}
          className="w-48 h-48 mx-auto rounded-full border-4 border-cyan-500 shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-white">{team[0]?.name}</h2>
        <p className="text-cyan-400 text-xl mb-2">{team[0]?.position}</p>
        <p className="text-gray-300 mb-4 max-w-xl mx-auto">
          {team[0]?.expertise}
        </p>
        <p className="text-gray-400 max-w-xl mx-auto">
          Known for pioneering AI and robotic strategies that drive company
          innovation, Andika ensures our team is always pushing the boundaries
          of technology.
        </p>
      </motion.div>

      {/* Team Members Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-12">
        {team.slice(1).map((member) => (
          <motion.div
            key={member.id}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105 text-center"
          >
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-500 mb-4 shadow-lg"
            />
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="text-cyan-300 text-lg mb-2">{member.position}</p>
            <p className="text-gray-300 mb-2">{member.expertise}</p>
            <p className="text-gray-400 text-sm">
              With years of experience, {member.name.split(" ")[0]} brings
              unique expertise to drive innovation in{" "}
              {member.position.toLowerCase()}, focusing on creating advanced
              solutions for robotics and AI.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
