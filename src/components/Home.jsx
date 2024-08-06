import React from "react";
import Header from "./Header";
import Background from "./Background";
import Work from "./pages/Work";
import Footer from "./Footer/Footer";
import ContactForm from "./contact/ContactForm";
import Testimonial from "./pages/Testimonial";

export const Home = () => {
  return (
    <>
      <Header />
      <Background />
      <Work />
      <Testimonial />
      <ContactForm/>
      <Footer />
    </>
  );
};
