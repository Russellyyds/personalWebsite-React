"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { useState,useRef } from 'react'
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/imgs/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/imgs/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/imgs/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/imgs/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/imgs/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/imgs/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
        id: 7,
        title: "Full-stack Roadmap",
        description: "Project 7 description",
        image: "/imgs/projects/7.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 8,
        title: "Full-stack Roadmap",
        description: "Project 8 description",
        image: "/imgs/projects/8.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
      },
  ];
const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const [tag,setTag]=useState("All");
    const handleTagChange=(newTage)=>{
        setTag(newTage)
    };
    const filteredProjects=projectsData.filter((project)=>
        project.tag.includes(tag)
    )
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  return (
    <section id='projects'  ref={ref}>
        <h2 className=' text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name={"All"} isSelected={tag==="All"} />
        <ProjectTag onClick={handleTagChange} name={"Web"} isSelected={tag==="Web"} />
        <ProjectTag onClick={handleTagChange} name={"Mobile"} isSelected={tag==="Mobile"} />

        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12'>
            {filteredProjects.map((project,index)=>
            <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            style={{listStyle:"none"}}
          >
            <ProjectCard key={project.id} gitUrl={project.gitUrl} previewUrl={project.previewUrl} imgUrl={project.image} title={project.title} description={project.description}></ProjectCard>

          </motion.li>
            )}
        </div>
    </section>
  )
}

export default ProjectSection;