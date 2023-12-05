import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Application } from '../builder/Application'

import TipsToggle from './TipsToggle'

import useBricksStore from '../store/bricks'
import TipsOverlay from './TipsOverlay'

const steps = ['tips', 'building', 'photo'] as const

type Step = (typeof steps)[number]

function Builder() {
  // const [isShowingTips, setIsShowingTips] = useState(false)
  const [step, setStep] = useState<Step>('building')
  const app = useRef(null)

  useEffect(() => {
    const canvasDom = document.getElementById('builder')

    app.current = new Application({ canvas: canvasDom })
  }, [])

  function closeTips() {
    setStep('building')
  }

  function openTips() {
    setStep('tips')
  }

  async function submit() {
    const bricks = useBricksStore.getState().bricks
    const time = useBricksStore.getState().time
    const moves = useBricksStore.getState().moves

    const data = {
      id: uuidv4(),
      createdAt: Date.now(),
      meta: {
        time,
        moves,
      },
      bricks,
    }
    console.log('APP IN SUBMIT', app)
    console.log('data:', data)
    // Takes a screenshot of the current scene
    app.current.snapBuild = true
    setStep('photo')

    // TODO: Save build somewhere in v2 so we can show results later
  }

  function download() {
    app.current.downloadScene()
  }
  return (
    <div className="bb-w-full bb-h-full bb-overflow-hidden bb-relative bb-bg-purple ">
      <canvas
        className={`bb-w-full bb-h-full bb-transition-all bb-duration-500 bb-noselect ${
          step === 'tips' ? 'bb--translate-y-[20vh] bb-scale-125' : 'bb-translate-y-0 bb-scale-100 '
        }`}
        id="builder"
      ></canvas>
      <div
        className={`bb-absolute bb-left-1/2 bb--translate-x-1/2 bb-bottom-12 bb-z-30 bb-mx-auto bb-flex bb-duration-500 bb-transition-all ${
          step === 'tips'
            ? 'bb-translate-y-24 bb-opacity-0'
            : 'bb-translate-y-0 bb-delay-1000 bb-opacity-100'
        }`}
      >
        <button onClick={submit} className="bb-btn bb-w-64">
          Finish building
        </button>
      </div>
      <div
        className={`bb-absolute bb-right-4 bb-bottom-12 bb-z-30 bb-mx-auto bb-flex bb-duration-500 bb-transition-all bb-flex-col ${
          step !== 'photo'
            ? 'bb-translate-y-24 bb-opacity-0'
            : 'bb-translate-y-0 bb-delay-1000 bb-opacity-100'
        }`}
      >
        <img
          id="preview"
          className="bb-w-64 bb-h-64 bb-bg-red-400 bb-mb-4 bb-border bb-border-white bb-rounded-lg"
        />
        <button onClick={download} className="bb-btn bb-w-64">
          Download build
        </button>
      </div>

      <TipsToggle openTips={openTips} closeTips={closeTips} isShowingTips={step === 'tips'} />
      <TipsOverlay closeTips={closeTips} isShowingTips={step === 'tips'} />
    </div>
  )
}

export default Builder
