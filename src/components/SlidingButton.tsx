import { motion, type Transition } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const spring: Transition = {
  type: "spring",
  stiffness: 420, // more bounce
  damping: 18, // less damping = more jiggle
  mass: 0.6,
  duration: 0.25, // slightly faster
};

/* Three-dot icon */
const ThreeDots: React.FC<{ className?: string; fill?: string }> = ({
  className = "w-5 h-5",
  fill = "currentColor",
}) => (
  <svg className={className} viewBox="0 0 254 392" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 57.647C0 25.8095 25.8095 0 57.647 0C89.4846 0 115.294 25.8095 115.294 57.647C115.294 89.4846 89.4846 115.294 57.647 115.294C25.8095 115.294 0 89.4846 0 57.647Z"
      fill={fill}
    />
    <path
      d="M138.353 196C138.353 164.163 164.163 138.353 196 138.353C227.838 138.353 253.647 164.163 253.647 196C253.647 227.838 227.838 253.647 196 253.647C164.163 253.647 138.353 227.838 138.353 196Z"
      fill={fill}
    />
    <path
      d="M0 334.353C0 302.516 25.8095 276.706 57.647 276.706C89.4846 276.706 115.294 302.516 115.294 334.353C115.294 366.191 89.4846 392 57.647 392C25.8095 392 0 366.191 0 334.353Z"
      fill={fill}
    />
  </svg>
);

type SlidingButtonProps = {
  title: string;
};

const SlidingButton: React.FC<SlidingButtonProps> = ({ title }) => {
  const slideDistance = "4.1rem";
  const navigate = useNavigate();

  return (
    <motion.button
      className="relative w-52 h-12 rounded-xl overflow-hidden font-medium text-lg"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={() => navigate("/contact")}
      whileTap={{ scale: 0.97 }}
    >
      {/* Amber base layer (rest) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-amber-400 rounded-xl"
        variants={{
          rest: { backgroundColor: "#fbbf24", x: 0, color: "#171717" },
          hover: { backgroundColor: "#262626", x: slideDistance, color: "#ffffff" },
        }}
        transition={spring}
      >
        <div className="flex items-center gap-3">
          <span>{title}</span>
          <ThreeDots className="w-4 h-4" fill="currentColor" />
        </div>
      </motion.div>

      {/* Left sliding dark panel with dots (hover) */}
      <motion.div
        className="absolute inset-y-0 left-0 w-12 flex items-center justify-center bg-neutral-800 rounded-xl"
        variants={{
          rest: { x: "-100%", opacity: 0 },
          hover: { x: 0, opacity: 1 },
        }}
        transition={spring}
      >
        <ThreeDots className="w-4 h-4 text-white" />
      </motion.div>
    </motion.button>
  );
};

export default SlidingButton;
