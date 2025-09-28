import { motion, useScroll } from "motion/react";
import Advertise from "./Advertisements/Advertise";
import Firstpage from "./Advertisements/Firstpage";
import Second_page from "./Advertisements/Second_page";
import Navbar from "./Navbar";
import Courses from "./Courses/Courses";
import Alumni from "./Advertisements/Alumni";
import Footer from "./Advertisements/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  document.title = "Klassway";
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "red",
        }}
      />
      <Advertise />

      <Navbar></Navbar>
      <div className="overflow-scroll">
        <Firstpage />
        <Courses />
        <Second_page />
        <Alumni />
        <Footer />
      </div>
    </>
  );
}
