import React from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = React.useState(0);
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  setScroll(percentage);
};
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        position: 'fixed',
        top:0,
        // bottom: 0,
        right: 0,
        width:'5px',
        height:  `${scroll}%`,
        backgroundColor: 'blue',
        zIndex: 100,
      }}
    />
  );
};

export default ScrollProgressBar;
