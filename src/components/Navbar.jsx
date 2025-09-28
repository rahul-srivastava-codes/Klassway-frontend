import { useState } from "react";
import { motion } from "motion/react";
import Login from "./Authentication/Login";
function Navbar() {
  const [login, setlogin] = useState(false);

  const menus = [
    {
      title: "For Working Professionals",
      content: ["Full Stack", "Data Science", "Robotics Trainer"],
    },
    {
      title: "For Students",
      content: ["Web Development", "AI/ML", "Cyber Security"],
    },
  ];

  return (
    <div className="flex items-center justify-between  py-2  px-3">
      <div className="navbar px-2 py-1">About Us</div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="navbar px-2 py-1"
        onHoverEnd={(event) => console.log(event)}
      >
        Explore Programs
      </motion.div>
      <div className="navbar px-2 py-1">Book Free Demo Class</div>
      <div className="navbar px-2 py-1">Download Brochure</div>
      <div className="navbar px-2 py-1">Training</div>
      <div className="navbar px-2 py-1">Placement</div>
      <div className="navbar px-2 py-1">College Training</div>
      <div className="navbar px-2 py-1">Corporate Training</div>
      <div className="navbar px-2 py-1">Employees Enquiry</div>
      <div className="navbar px-2 py-1">Testimonials</div>
      <buttonnavbar
        onClick={() => setlogin(!login)}
        className="px-4 py-1 rounded-lg shadow-amber-300 bg-orange-400  text-white text-sm cursor-pointer font-bold"
      >
        Login
      </buttonnavbar>
      {login ? (
        <div className="absolute w-[30vw] flex items-center justify-center  bg-zinc-200 mt-[70vh] border-1 border-dotted shadow-amber-600 shadow-2xl  rounded-4xl ml-[25vw]">
          <Login setlogin={setlogin}></Login>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
