import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
