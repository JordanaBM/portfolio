import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState } from "react";
import { useLanguageContext } from "./LanguageContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguageContext();

  const handleAnimationEnd = () => {
    setIsVisible(true);
  };

  return (
    <section
      className={`relative w-full h-screen mx-auto`}
      style={{ backgroundImage: 'url("")' }}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              onAnimationEnd={handleAnimationEnd}
            >
              {language === "es" ? "Hola, soy" : "Hi, I'm"}
              <span className="text-[#915EFF]">
                Jordana <br className="sm:block hidden" /> Betancourt
              </span>
            </motion.h1>

            {/* Reparar texto para que aparezca y desparezca */}
            {isVisible && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                {language === "es" ? "Hola, soy" : "Hi, I'm"}{" "}
                <span className="text-[#915EFF]">
                  {language === "es"
                    ? "Desarrolladora de software"
                    : "Software developer"}
                </span>
              </motion.p>
            )}
          </h1>
          {language === "es" ? (
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Me especializo en el desarrollo de{" "}
              <br className="sm:block hidden" />
              aplicaciones web y móviles, así como en{" "}
              <br className="sm:block hidden" />
              la creación de interfaces de usuario.
            </p>
          ) : (
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I specialize in developing web <br className="sm:block hidden" />
              and mobile applications, as <br className="sm:block hidden" />
              well as creating user interfaces.
            </p>
          )}
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
