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

    app.current = new Application(canvasDom, false)
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
    <div className="w-full h-full overflow-hidden relative bg-purple ">
      <canvas
        className={`w-full h-full transition-all duration-500 noselect ${
          step === 'tips' ? '-translate-y-[20vh] scale-125' : 'translate-y-0 scale-100 '
        }`}
        id="builder"
      ></canvas>
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-12 z-30 mx-auto flex duration-500 transition-all ${
          step === 'tips' ? 'translate-y-24 opacity-0' : 'translate-y-0 delay-1000 opacity-100'
        }`}
      >
        <button onClick={submit} className="btn w-64">
          Finish building
        </button>
      </div>
      <div
        className={`absolute right-4 bottom-12 z-30 mx-auto flex duration-500 transition-all flex-col ${
          step !== 'photo' ? 'translate-y-24 opacity-0' : 'translate-y-0 delay-1000 opacity-100'
        }`}
      >
        <img id="preview" className="w-64 h-64 bg-red-400 mb-4 border border-white rounded-lg" />
        <button onClick={download} className="btn w-64">
          Download build
        </button>
      </div>

      <TipsToggle openTips={openTips} closeTips={closeTips} isShowingTips={step === 'tips'} />
      <TipsOverlay closeTips={closeTips} isShowingTips={step === 'tips'} />
    </div>
  )
}

export default Builder
