import React, { lazy, Suspense } from "react";
import Header from "./Header";
import Background from "./Background";
// Lazy load the components
const Work = lazy(() => import("./pages/Work"));
const Footer = lazy(() => import("./Footer/Footer"));
const ContactForm = lazy(() => import("./contact/ContactForm"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
export const Home = () => {
  return (
    <>
      <Header />

      <Background />
      <Suspense fallback={<div>Loading...</div>}>
        <Work />
        <Testimonial />
        <ContactForm />
        <Footer />
      </Suspense>
    </>
  );
};
