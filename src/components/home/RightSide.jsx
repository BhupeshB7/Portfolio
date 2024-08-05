import React from "react";
import video from "../../assets/Home.mp4";

const RightSide = () => {
  return (
    <div
     className="home-right-side"
    >
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          boxShadow: `
          rgba(0, 0, 0, 0.25) 0px 54px 55px, 
          rgba(0, 0, 0, 0.12) 0px -12px 30px, 
          rgba(0, 0, 0, 0.12) 0px 4px 6px, 
          rgba(0, 0, 0, 0.17) 0px 12px 13px, 
          rgba(0, 0, 0, 0.09) 0px -3px 5px`,
          objectFit: "cover",
          borderRadius:'50%',
        }}
      >
        <source
          src={video}
          type="video/mp4"
          style={{
            boxShadow: `
          rgba(0, 0, 0, 0.25) 0px 54px 55px, 
          rgba(0, 0, 0, 0.12) 0px -12px 30px, 
          rgba(0, 0, 0, 0.12) 0px 4px 6px, 
          rgba(0, 0, 0, 0.17) 0px 12px 13px, 
          rgba(0, 0, 0, 0.09) 0px -3px 5px`,
          }}
        />
      </video>
    </div>
  );
};
   
export default RightSide;
