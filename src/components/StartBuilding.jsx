import { motion } from 'framer-motion'
function StartBuilding({ start }) {
  return (
    <div className="bb-w-full bb-h-full bb-flex bb-items-center bb-justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
      >
        <button
          onClick={start}
          className="bb-w-64 bb-h-64 bb-rounded-full bb-bg-yellow bb-text-lg bb-text-black bb-flex bb-items-center bb-justify-center bb-font-black"
        >
          Start building
        </button>
      </motion.div>
    </div>
  )
}

export default StartBuilding
