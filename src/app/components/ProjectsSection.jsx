"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Machine learning based IDS",
    description: "Built an Intrusion Detection system based on machine learning using KDD99 and CSE-CIC-IDS2018 Datasets",
    image: "/images/projects/IDS.png",
    tag: ["All", "Cyber Security", "Artificial Intelligence"],
    gitUrl: "https://github.com/woodjooe/Intrusion-Detection-System/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Malware Dev #2",
    description: "Built a malware using assembly code and C++",
    image: "/images/projects/MalwareDev1.png",
    tag: ["All", "Cyber Security"],
    gitUrl: "https://github.com/woodjooe/Self_Replicating_assembly_Malw/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CTF WriteUps",
    description: "My writeups for some CTF competitions I've participated in",
    image: "/images/projects/DK.png",
    tag: ["All", "CTF Writeups", "Cyber Security"],
    gitUrl: "https://github.com/woodjooe/CTF-Writeups/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "CyberTek",
    description: "Authored CTF challenges",
    image: "/images/projects/CyberTek.png",
    tag: ["All", "CTFs Authored", "Cyber Security"],
    gitUrl: "https://github.com/woodjooe/CTFs-Authored/tree/main/CyberTEK%20CTF%202024/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Malware Dev #1",
    description: "Employed various Evasion Techniques on meterpreter reverse TCP",
    image: "/images/projects/MalwareDev2.png",
    tag: ["All", "Cyber Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "FullStack Web Project",
    description: "Made using Angular and Springboot",
    image: "/images/projects/Ang-Spring.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/woodjooe/Ang-Spring/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Malware Analysis using DP",
    description: "leveraging the power of deep learning to detect malware",
    image: "/images/projects/MalwareAnalysis.png",
    tag: ["All", "Cyber Security", "Artificial Intelligence"],
    gitUrl: "https://github.com/woodjooe/Malware_Analysis_DP/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Packet Sniffing and Manipulation",
    description: "Python code to intercept packets, modify them, and resend them",
    image: "/images/projects/PacketSniff.png",
    tag: ["All", "Networking"],
    gitUrl: "https://github.com/woodjooe/Packet-Manipulation/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "TekUp Mini CTF",
    description: "Authored CTF challenges",
    image: "/images/projects/DK.png",
    tag: ["All", "CTFs Authored"],
    gitUrl: "https://github.com/woodjooe/CTFs-Authored/tree/main/Tek-Up_MINI_CTF_2024/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "CTF kareem 2025",
    description: "Authored CTF challenges",
    image: "/images/projects/CTFKareem.png",
    tag: ["All", "CTFs Authored"],
    gitUrl: "https://github.com/Securinets-TEKUP/CTF-KAREEM-2025",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "CyberTek V2",
    description: "Authored CTF challenges",
    image: "/images/projects/CyberTekV2.png",
    tag: ["All", "CTFs Authored", "Cyber Security"],
    gitUrl: "https://github.com/Securinets-TEKUP/CyberTEK-2.0",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-10 mb-8 md:mb-12 text-[#008888]">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cyber Security"
          isSelected={tag === "Cyber Security"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CTF Writeups"
          isSelected={tag === "CTF Writeups"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CTFs Authored"
          isSelected={tag === "CTFs Authored"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Networking"
          isSelected={tag === "Networking"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Artificial Intelligence"
          isSelected={tag === "Artificial Intelligence"}
        />
      </div>
      <br/>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
