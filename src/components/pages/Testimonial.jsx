import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    image:
      "https://img.freepik.com/free-photo/smiley-man-city-looking-camera_23-2148296615.jpg?t=st=1717611260~exp=1717614860~hmac=15e3b8f5f29a015e105f7e95dac1094e1da6e9dbc50ac4f4c6550ceba2c205e5&w=360",
    testimonial:
      "Working with the MERN stack on our project was a game-changer. The developer's expertise in MongoDB, Express, React, and Node.js brought our application to life with seamless functionality and a great user experience.",
  },
  {
    id: 2,
    name: "Aneha Sharma",
    image:
      "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261878.jpg?size=626&ext=jpg&ga=GA1.2.260354095.1700988836&semt=ais_user",
    testimonial:
      "The web application developed using MERN has transformed our business processes. The responsiveness and efficiency of the application have significantly improved our workflow. Highly recommend this developer for MERN projects.",
  },
  {
    id: 3,
    name: "Amit Singh",
    image:
      "https://img.freepik.com/free-photo/young-indian-man-standing-isolated-grey-wall-approving-doing-positive-gesture-with-hand-thumbs-up-smiling-happy-success_231208-2602.jpg?t=st=1717611286~exp=1717614886~hmac=33623a26d7dc54675d93444ac32ae658eb625dc4e56fa439a60c9912f9e008a8&w=996",
    testimonial:
      "The developer's mastery of the MERN stack was evident in every aspect of the project. The application is not only robust and scalable but also incredibly intuitive for our users. A fantastic job overall!",
  },
  {
    id: 4,
    name: "Neha Gupta",
    image:
      "https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?size=626&ext=jpg&ga=GA1.2.260354095.1700988836&semt=ais_user",
    testimonial:
      "Our MERN-based application exceeded our expectations. The developer's ability to integrate MongoDB, Express, React, and Node.js seamlessly was impressive. We're thrilled with the final product and the positive feedback from our users.",
  },
  {
    id: 5,
    name: "Vikram Mehta",
    image:
      "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg?t=st=1717611374~exp=1717614974~hmac=a18a0a1a19c6198caec7d1e91825292e1c33edafc04eaf11b50595da7c00a83d&w=996",
    testimonial:
      "Choosing this developer for our MERN stack project was the best decision we made. The application's performance and user interface are outstanding, and the developer's attention to detail was exceptional. Highly recommended!",
  },
  {
    id: 6,
    name: "Anish Patel",
    image:
      "https://img.freepik.com/free-photo/young-delivery-man-red-uniform-cap-showing-pointing-up-with-fingers-number-eight-smiling_141793-46417.jpg?t=st=1717611431~exp=1717615031~hmac=aef082ca70c23511b99da35f05b4c64c8316f048fe48cef067a9e8f84fc65857&w=996",
    testimonial:
      "The MERN stack expertise of the developer was evident in every feature and functionality of our web application. The project was delivered on time and exceeded all our expectations. A true professional in the field.",
  },
];

const extendedTestimonials = [...testimonials, ...testimonials];

const scrollVariantsLeft = {
  animate: {
    x: ["0%", "-300%"], 
    transition: {
      duration: 50,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const scrollVariantsRight = {
  animate: {
    x: ["-200%", "0%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const TestimonialItem = ({ testimonial, onMouseEnter, onMouseLeave }) => (
  <div
    className="flex-none w-[500px] border-2 border-gray-800 rounded-lg shadow-lg p-4"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="flex items-start">
      <img
        className="w-20 h-20 rounded-full mr-4"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div>
        <div className="text-gray-300 font-bold text-xl mb-2">
          {testimonial.name}
        </div>
        <p className="text-gray-500 text-base">{testimonial.testimonial}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <h4 className="text-center text-2xl md:text-5xl pt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Testimonial{" "}
      </h4>
      <div>
        <div className="text-center mb-5">
          <span className="inline-block w-2 h-1 rounded-full bg-slate-500 ml-1"></span>
          <span className="inline-block w-6 h-1 rounded-full bg-blue-400 ml-1"></span>
          <span className="inline-block w-32 h-1 rounded-full bg-purple-400 ml-1"></span>
          <span className="inline-block w-6 h-1 rounded-full bg-blue-400 ml-1"></span>
          <span className="inline-block w-2 h-1 rounded-full bg-slate-500 ml-1"></span>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-4"
          variants={scrollVariantsLeft}
          animate={isPaused ? "paused" : "animate"}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialItem
              key={`left-${index}`}
              testimonial={testimonial}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </motion.div>
      </div>
      {/* Right scroll animation */}
      <div className="relative overflow-hidden mt-3">
        <motion.div
          className="flex space-x-4"
          variants={scrollVariantsRight}
          animate={isPaused ? "paused" : "animate"}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialItem
              key={`right-${index}`}
              testimonial={testimonial}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Testimonial;
