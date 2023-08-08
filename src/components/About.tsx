import React from "react";
import { motion } from "framer-motion";
import StarWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { useLanguageContext } from "./LanguageContext";

interface Service {
  title: string;
  icon: string;
}

const About: React.FC = () => {
  const { language } = useLanguageContext();

  return (
    <>
      <motion.div>
        {language === "es" ? (
          <>
            <p className={styles.sectionSubText}>Introducción</p>
            <h2 className={styles.sectionHeadText}>Resumen.</h2>
          </>
        ) : (
          <>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </>
        )}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {language === "es" ? (
          <>
            Como desarrolladora de software, poseo una sólida experiencia en
            TypeScript y JavaScript, así como en el manejo de frameworks como
            React, React Native y Node.js. Mi capacidad para aprender
            rápidamente y mi enfoque en la colaboración estrecha con los
            clientes me permiten crear soluciones eficientes, escalables y
            amigables que abordan problemas del mundo real. ¡Estoy emocionada
            por trabajar juntos y dar vida a tus ideas!
          </>
        ) : (
          <>
            As a software developer, I have a strong background in TypeScript
            and JavaScript, with experience in frameworks like React, React
            Native, and Node.js. My ability to quickly learn and my focus on
            close collaboration with clients enable me to create efficient,
            scalable, and user-friendly solutions that address real-world
            problems. I am excited to work together and bring your ideas to
            life!
          </>
        )}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default StarWrapper(About, "about");
