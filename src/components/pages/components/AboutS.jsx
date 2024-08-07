import React from "react";

const AboutS = () => {
  
  const mern = ["M", "E", "R", "N"];

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:17px_34px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[90px]" />
      </div>
      <div className="relative h-screen bg-white w-full p-5">
        <div className="about-me">
          <div className="about-icon mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="about-text-skeleton mb-4">
            <div className="flex justify-center mx-auto w-2/6 h-10 bg-gray-200 animate-pulse"></div>
          </div>
          <div className="w-full h-36 bg-gray-200 animate-pulse mb-4"></div>

          <div className="container2 flex flex-wrap">
            <div className="left-col2 w-full md:w-1/2 flex flex-wrap">
              {Array.from({length:14}).map((_, index) => (
                <div
                  key={index}
                  className="w-1/5 h-12 bg-gray-200 animate-pulse rounded-3xl m-1.5"
                ></div>
              ))}
            </div>
            <div className="right-col2 w-full md:w-1/2 flex flex-col items-center">
              <div className="about-text-skeleton mt-5 mb-4 w-2/5 h-12 bg-gray-200 animate-pulse"></div>
              <div className="left-col2 w-full md:w-2/3 flex flex-wrap">
                {mern.map((_, index) => (
                  <div
                    key={index}
                    className="w-1/5 h-12 bg-gray-200 animate-pulse rounded-3xl m-1.5"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutS;
