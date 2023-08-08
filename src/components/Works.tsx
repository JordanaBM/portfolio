import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import github from "../assets/github.png";
import StarWrapper from "../hoc/SectionWrapper";
import { projects, projectsEs } from "../constants";
import { fadeIn } from "../utils/motion";
import { useLanguageContext } from "./LanguageContext";

interface Tag {
  name: string;
  color: string;
}

interface Project {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works: React.FC = () => {
  const { language } = useLanguageContext();

  const projectsLan = language === "es" ? projectsEs : projects;

  return (
    <>
      <motion.div>
        {language === "es" ? (
          <>
            <p className={`${styles.sectionSubText} `}>Mi experiencia</p>
            <h2 className={`${styles.sectionHeadText}`}>Proyectos</h2>
          </>
        ) : (
          <>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </>
        )}
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {language === "es" ? (
            <>
              Los siguientes proyectos exhiben mis habilidades y experiencia a
              través de ejemplos del mundo real de mi trabajo. Cada proyecto se
              describe brevemente e incluye enlaces a repositorios de código, lo
              que refleja mi capacidad para abordar desafíos complejos, trabajar
              con diversas tecnologías y gestionar proyectos de manera efectiva.
            </>
          ) : (
            <>
              The following projects showcase my skills and expertise through
              real-world examples of my work. Each project is briefly described
              with links to code repositories, reflecting my ability to tackle
              complex challenges, work with diverse technologies, and
              effectively manage projects.
            </>
          )}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projectsLan.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Works, "projects");
