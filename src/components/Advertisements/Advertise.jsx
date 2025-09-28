import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

export default function Advertise() {
  const [cut, setcut] = useState(true);
  return (
    <>
      {cut ? (
        <div className="bg-zinc-200 w-full flex items-center justify-around shadow py-3">
          <div className="w-5/11 flex items-center justify-end text-2xl text-blue-500 ">
            Buy our new courses
          </div>
          <motion.div className="flex items-center justify-end">
            <button
              onClick={() => setcut(false)}
              className="hover:scale-125"
              title="Close"
            >
              <RxCross1 />
            </button>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
