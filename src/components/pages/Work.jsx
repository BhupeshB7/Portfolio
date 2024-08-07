import React from "react";
import { useNavigate } from "react-router-dom";
import Project from "./components/Project";
const Work = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const scrollToTop = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="m-5">
      <div className="flex justify-center items-center p-4 m-auto">
        <button className="download-cv-button"onClick={() => navigate('/about')}>
          {" "}
          About me
        </button>
      </div>
      <div >
      <button className="work-button p-3 pt-2 pb-2" onClick={scrollToTop}>
          {" "}
          Latest Work ↓
        </button>
      </div>
      <div className="bg-[#020c17]-900 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:31px_30px]">
        <div className="text-white p-4 " ref={containerRef} >
          <Project />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Work;
