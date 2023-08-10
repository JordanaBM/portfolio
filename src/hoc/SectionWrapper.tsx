
import { motion } from "framer-motion";
import { styles } from "../styles";

// interface StarWrapperProps {
//   Component: React.FC;
//   idName: string;
// }

const StarWrapper = (Component: any, idName: string) => {
  const HOC = () => {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;

