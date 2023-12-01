import { motion } from "framer-motion";
function StartBuilding({ start }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
      >
        <button
          onClick={start}
          className="w-64 h-64 rounded-full bg-yellow text-lg text-black flex items-center justify-center font-black"
        >
          Start building
        </button>
      </motion.div>
    </div>
  );
}

export default StartBuilding;
