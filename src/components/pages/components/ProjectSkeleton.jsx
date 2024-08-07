import React from "react";

const ProjectSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } mb-8 animate-pulse animate-pulse-fast`}
        >
          <div
            className={`hidden md:block absolute top-1/2 ${
              index % 2 === 0
                ? "left-1/2 transform -translate-x-1/2"
                : "right-1/2 transform translate-x-1/2"
            }`}
            style={{ top: "calc(50% - 1.5rem)" }}
          >
            <div
              className="w-12 h-12 rounded-full border-4 border-transparent bg-gray-300 relative"
              style={{ borderWidth: "5px" }}
            >
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gray-200"
                style={{
                  margin: "5px",
                  borderWidth: "5px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2 mb-4 md:mb-0">
            <div className="w-[300px] h-[180px] bg-gray-200" />
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2 pl-0 md:pl-8">
            <div className="text-center relative order-1 md:order-1 md:m-4 md:p-5">
              <div className="w-48 h-6 bg-gray-300 mb-2" />

              <div className="w-32 h-4 bg-gray-300 mb-2" />
              <div className="flex justify-center space-x-4 mt-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
              </div>
              <div className="flex items-center justify-center mx-auto w-44 h-8 bg-gray-300 mt-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
