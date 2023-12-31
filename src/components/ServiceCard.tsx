import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

export default function ServiceCard({
  index,
  title,
  icon,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="div-inner">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
