import React from "react";
import { motion } from "framer-motion";

interface IrozonLogoProps {
  className?: string; // Prop to allow external Tailwind class control
}

const IrozonLogo: React.FC<IrozonLogoProps> = ({ className = "w-32 h-6" }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 2416.8933 795.58533"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" // Added for gradient support
      whileHover={{ scale: 1.05 }} // Keeps your original hover effect
    >
      <defs>
        {/* Defining the main gradient once as 'logoGradient' */}
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-4738.7285,-726.79889,726.79889,-4738.7285,2888.5271,723.30664)"
          spreadMethod="pad"
        >
          <stop offset="0" stopColor="#9ff21c" />
          <stop offset="1" stopColor="#02c685" />
        </linearGradient>
      </defs>

      {/* Grouping paths and referencing the single gradient definition */}
      <g>
        {/* Note: I'm simplifying by pointing all paths to the same 'logoGradient' to keep the code concise and clean. 
            If the original gradients had slight differences you wanted to preserve, you'd define them all here. */}
        <path
          d="M 80.008,475.732 V 430.51 h 81.286 v 45.222 c 0,22.618 -18.344,40.337 -40.338,40.337 v 0 c -22.617,0 -40.948,-17.719 -40.948,-40.337 m 0.61,-394.23 h 80.675 V 396.279 H 80.618 Z"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
        <path
          d="M 234.017,263.637 V 81.504 81.502 h 80.69 v 182.135 c 0,44.626 34.218,72.142 85.558,62.97 v 0 75.79 c -9.186,1.121 -18.039,1.672 -26.543,1.672 v 0 C 285.387,404.055 234.017,345.039 234.017,263.637"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
        <path
          d="m 425.311,238.592 c 0,-94.135 70.907,-164.431 158.312,-164.431 v 0 c 87.404,0 158.906,70.296 158.906,164.431 v 0 c 0,94.12 -71.502,165.623 -158.906,165.623 v 0 c -87.405,0 -158.312,-71.503 -158.312,-165.623 m 80.675,-0.625 c 0,54.408 34.856,92.303 77.637,92.303 v 0 c 42.778,0 77.636,-37.895 77.636,-92.303 v 0 c 0,-53.173 -34.858,-89.832 -77.636,-89.832 v 0 c -42.781,0 -77.637,36.659 -77.637,89.832"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
        <path
          d="M 780.424,396.278 V 323.54 H 939.943 L 773.695,151.187 V 81.502 h 275.05 v 72.737 H 880.04 l 163.209,169.911 v 72.128 z"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
        <path
          d="m 1080.52,238.592 c 0,-94.135 70.891,-164.431 158.297,-164.431 v 0 c 87.404,0 158.907,70.296 158.907,164.431 v 0 c 0,94.12 -71.503,165.623 -158.907,165.623 v 0 c -87.406,0 -158.297,-71.503 -158.297,-165.623 m 80.675,-0.625 c 0,54.408 34.843,92.303 77.622,92.303 v 0 c 42.779,0 77.622,-37.895 77.622,-92.303 v 0 c 0,-53.173 -34.843,-89.832 -77.622,-89.832 v 0 c -42.779,0 -77.622,36.659 -77.622,89.832"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
        <path
          d="M 1450.272,263.637 V 81.502 h 80.688 v 183.982 c 0,35.438 25.671,59.888 61.11,59.888 v 0 c 53.188,0 59.292,-42.169 59.292,-59.888 v 0 -183.982 h 80.689 v 182.135 c 0,82.521 -51.951,140.578 -139.981,140.578 v 0 c -85.559,0 -141.798,-60.498 -141.798,-140.578"
          transform="matrix(1.3333333,0,0,-1.3333333,0,795.58533)"
          style={{ fill: "url(#logoGradient)", stroke: "none" }}
        />
      </g>
    </motion.svg>
  );
};

export default IrozonLogo;
