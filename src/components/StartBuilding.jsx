import { motion } from 'framer-motion'
import Stars from './Stars'
function StartBuilding({ start }) {
  return (
    <div className="bb-w-full bb-h-full bb-flex bb-items-center bb-justify-center bb-relative">
      <Stars />
      <motion.div
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
      >
        <button
          onClick={start}
          className="bb-w-40 lg:bb-w-80 bb-h-40 lg:bb-h-80 bb-rounded-full bb-btn-primary bb-text-lg bb-center bb-flex-col bb-font-black bb-z-30 bb-relative lg:bb-text-xl"
        >
          <span className="bb-block">Start</span>
          <span className="bb-block">building</span>
        </button>
      </motion.div>
    </div>
  )
}

export default StartBuilding
