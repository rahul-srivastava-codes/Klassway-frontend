import { useState, useEffect } from "react";
import images from "./images";
import TypingEffect from "./Typing_effect";

const data = [
  { number: 7.1, content: "Career Transformed" },
  { number: 2.5, content: "Placement Partners" },
  { number: 15, content: "Students Enrolled" },
  { number: 15, content: "Students Enrolled" },
  { number: 15, content: "Students Enrolled" },
];

function Firstpage() {
  const [image_num, setimage_num] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimage_num((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] py-15 bg-zinc-200 flex items-center flex-col justify-center text-6xl font-extrabold border-b-1">
      <div>Enter as Students.</div>
      <div className="text-4xl font-light">
        Exit as Industry-Ready Professionals.
      </div>
      <div className="font-light text-2xl text-red-600">
        <TypingEffect
          text="India's Most Practical Training Platform for B.Tech, BCA, MCA & Diploma Students"
          speed={100}
        />
      </div>
      <div className="flex items-center justify-between gap-5">
        <div>
          <Component />
        </div>
        <div className="shadow rounded-lg w-[15vw] h-[25vh] overflow-hidden flex items-center justify-center bg-white">
          <img
            src={images[image_num]}
            alt="Image Loading"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="flex flex-wrap items-center justify-center text-xl font-medium gap-5 w-2/3">
      {data.map((d, i) => (
        <div
          key={i}
          className="shadow bg-white px-2 py-1 flex items-center flex-col rounded-lg"
        >
          <div className="text-2xl font-bold py-2">{d.number}k+</div>
          <div className="text-sm">{d.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Firstpage;
