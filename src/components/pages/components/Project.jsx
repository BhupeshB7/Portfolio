import React, { useEffect, useState } from "react";
import { getProjects } from "../../../util/http";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaEye, FaCode } from "react-icons/fa";
import { ImageComponent } from "./ImageComponent";
import ProjectDetail from "./ProjectDetail";
import ProjectSkeleton from "./ProjectSkeleton";
const Project = () => {
  const {
    data: projects,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    onError: (error) => {
      console.error("Query Error:", error);
    },
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min(100, (scrollY / maxScroll) * 120); // Clamp to 100%

  let content;
  if (isLoading) {
    content = <ProjectSkeleton/>;
  } else if (isError) {
    content = (
      <div className="bg-red-800 text-red-100 p-3 w-[300px]">
        Error: {error.message || "Something went wrong"}
      </div>
    );
  } else if (Array.isArray(projects)) {
    content = (
      <>
        {/* {console.log(projects)}
      {console.log("Error", error , isError)} */}

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } mb-8`}
          >
            <div
              className={`hidden md:block absolute top-1/2 ${
                index % 2 === 0
                  ? "left-1/2 transform -translate-x-1/2"
                  : "right-1/2 transform translate-x-1/2"
              }`}
              style={{ top: "calc(50% - 1.5rem)" }}
            >
              {/* Outer Circle with Border */}
              <div
                className="w-12 h-12 rounded-full border-4 border-transparent bg-[#020c17] relative"
                style={{ borderWidth: "5px" }}
              >
                {/* Inner Gradient Circle */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{
                    margin: "5px", // Adjust to create a gap
                    borderWidth: "5px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* Image */}
            {/* <div className="flex justify-center items-center w-full md:w-1/2 mb-4 md:mb-0">
              <motion.img
                initial={{ opacity: 0,y:-30,scale:1.4 }}
                animate={{ opacity: 1,y:0,scale:1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
                whileInView={{scale: 1}}
                src={project.img}
                alt={project.title}
                className="w-[300px] h-auto project-image"
              />
            </div> */}
            <ImageComponent
              src={project.img}
              alt={project.title}
              width={"300px"}
              height={"auto"}
              widthImg="1/2"
              className="project-image"
            />
            {/* Text */}
            <div className="flex justify-center items-center w-full md:w-1/2 pl-0 md:pl-8 md:m-5">
              <div className="text-center relative order-1 md:order-1 md:m-4 md:p-5">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.technology}</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <Link to={project.link}>
                    <FaEye
                      className="text-gray-200 hover:text-gray-50 bg-gray-700 hover:bg-gray-800 rounded-full p-2 w-8 h-8"
                      size={24}
                    />
                  </Link>
                  {project.code.backend && (
                    <Link to={project.code.backend}>
                      <FaCode
                        className="text-gray-200 hover:text-gray-50 bg-gray-700 hover:bg-gray-800 rounded-full p-2 w-8 h-8"
                        size={24}
                      />
                    </Link>
                  )}
                  <Link to={project.code.frontend}>
                    <FaCode
                      className="text-gray-200 hover:text-gray-50 bg-gray-700 hover:bg-gray-800 rounded-full p-2 w-8 h-8"
                      size={24}
                    />
                  </Link>
                </div>
                {/* <h3 className="text-xl font-bold mb-2">{project.description}</h3> */}
                <br />
                <ProjectDetail project={project} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="relative py-8">
      <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
        <div
          className="border-l-2 border-gray-400"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>
      {content}
    </div>
  );
};

export default Project;
