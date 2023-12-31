import { motion } from 'framer-motion'
import { useState } from 'react'
import Builder from './components/Builder'
import StartBuilding from './components/StartBuilding'
import useActivityStore from './store/activity'
import { Activity } from './types/types'

const steps = ['start-building', 'building'] as const

export type Step = (typeof steps)[number]

function BrickBuilder({ options }: { options: Activity }) {
  const setActivityOptions = useActivityStore(state => state.setActivityOptions)
  setActivityOptions(options)

  const [step, setStep] = useState<Step>('start-building')
  return (
    <div className="bb-w-full bb-h-full bb-bg-background bb-overflow-hidden bb-font-sans">
      {step === 'start-building' && <StartBuilding start={() => setStep('building')} />}
      {step === 'building' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bb-w-full bb-h-full"
        >
          <Builder />
        </motion.div>
      )}
    </div>
  )
}

export default BrickBuilder
