import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import SlidingButton from "./SlidingButton";
// import { ArrowRight } from "lucide-react";

interface SpringAnimation {
  element: HTMLElement;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  velocityX: number;
  velocityY: number;
  stiffness: number;
  damping: number;
  mass: number;
  isAnimating: boolean;
}

const HeroSection: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const springsRef = useRef<SpringAnimation[]>([]);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imagesRef.current) return;

    const floatingImages = imagesRef.current.querySelectorAll<HTMLElement>(".floating-image > div");

    // Initialize spring animations
    springsRef.current = Array.from(floatingImages).map((element) => ({
      element,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      velocityX: 0,
      velocityY: 0,
      stiffness: 0.05,
      damping: 0.75,
      mass: 1,
      isAnimating: false,
    }));

    const updateSpring = (spring: SpringAnimation) => {
      const forceX = (spring.targetX - spring.x) * spring.stiffness;
      const forceY = (spring.targetY - spring.y) * spring.stiffness;

      spring.velocityX += forceX / spring.mass;
      spring.velocityY += forceY / spring.mass;
      spring.velocityX *= spring.damping;
      spring.velocityY *= spring.damping;

      spring.x += spring.velocityX;
      spring.y += spring.velocityY;

      // Get the initial rotation from the element's data attribute
      const rotation = spring.element.getAttribute("data-rotation") || "0";
      spring.element.style.transform = `translate(${spring.x}px, ${spring.y}px) rotate(${rotation}deg)`;

      const isMoving =
        Math.abs(spring.velocityX) > 0.01 ||
        Math.abs(spring.velocityY) > 0.01 ||
        Math.abs(spring.targetX - spring.x) > 0.1 ||
        Math.abs(spring.targetY - spring.y) > 0.1;

      if (isMoving) {
        requestAnimationFrame(() => updateSpring(spring));
      } else {
        spring.isAnimating = false;
      }
    };

    const setTarget = (spring: SpringAnimation, x: number, y: number) => {
      spring.targetX = x;
      spring.targetY = y;

      if (!spring.isAnimating) {
        spring.isAnimating = true;
        updateSpring(spring);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      floatingImages.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;

        const deltaX = imgCenterX - mouseX;
        const deltaY = imgCenterY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 300;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * 50;
          const angle = Math.atan2(deltaY, deltaX);
          const moveX = Math.cos(angle) * strength;
          const moveY = Math.sin(angle) * strength;

          setTarget(springsRef.current[index], moveX, moveY);
        } else {
          setTarget(springsRef.current[index], 0, 0);
        }
      });
    };

    const handleMouseLeave = () => {
      springsRef.current.forEach((spring) => {
        setTarget(spring, 0, 0);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const images = [
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Person-with-VR-Headset-m_f.png",
      alt: "Person with VR Headset",
      rotation: -8,
      zIndex: 1,
      top: 0,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Minimalist-Stone-Composition-m_f.png",
      alt: "Minimalist Stone Composition",
      rotation: 5,
      zIndex: 2,
      top: -30,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Whimsical-Character-in-a-Jar-m_f.png",
      alt: "Whimsical Character in a Jar",
      rotation: -3,
      zIndex: 3,
      top: 0,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/02/Three-Scoops-of-Ice-Cream-on-Spoons.webp",
      alt: "Three Scoops of Ice Cream",
      rotation: 6,
      zIndex: 4,
      top: -30,
    },
    {
      src: "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Green-Character-in-Yellow-Hoodie-m_f.png",
      alt: "Green Character in Yellow Hoodie",
      rotation: -5,
      zIndex: 5,
      top: 0,
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        overflow: "hidden",
        gap: isMobile ? "2rem" : "8rem",
        background: "#f5f5f5",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "30px",
            letterSpacing: "-0.02em",
            color: "#262626",
          }}
        >
          Digital Experiences That Define Your Brand
        </h1>
      </motion.div>

      <div
        ref={imagesRef}
        style={{
          position: "relative",
          display: "flex",
          gap: 0,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          zIndex: 1,
          margin: "0 -20px",
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="floating-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              position: "relative",
              willChange: "transform",
              margin: "0 -30px",
              width: isMobile ? "120px" : "240px",
              height: isMobile ? "120px" : "240px",
              zIndex: image.zIndex,
              top: image.top,
            }}
          >
            <motion.div
              data-rotation={image.rotation}
              initial={{ rotate: 0, scale: 0.8 }}
              animate={{ rotate: image.rotation, scale: 1 }}
              transition={{
                delay: index * 0.1,
                rotate: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  mass: 1,
                },
                scale: {
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  mass: 0.8,
                },
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={isMobile ? 120 : 240}
                height={isMobile ? 120 : 240}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow:
                    "inset -1px 20px 20px 14px rgb(0 0 0 / 18%), 0 10px 20px -5px rgba(0, 0, 0, 0.3)",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          marginTop: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            color: "#444343",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          You have a vision. We have the creative and technical expertise to bring it to life. From
          the smallest detail ("Pixel") to the largest system ("Platform"), we build scalable web
          and mobile apps, create powerful brand identities, and deliver stunning graphic design
          that truly cuts through the noise.
        </p>
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <SlidingButton title={`Let's Build It`} navigateTo="/contact" />
          {/* <motion.button
            key="lets-talk-button"
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className={`px-16 py-3 rounded-xl text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-foreground hover:text-background flex items-center justify-center`}
          >
            Lets Talk
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button> */}
          <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
