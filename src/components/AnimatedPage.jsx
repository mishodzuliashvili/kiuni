import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const pageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export const AnimatedPage = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={pageMotion.initial}
      animate={pageMotion.animate}
      exit={pageMotion.exit}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
