import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Application } from '../builder/Application'
import SvgFullScreen from '@/assets/icons/full-screen.svg?react'
import TipsToggle from './TipsToggle'
import gsap from 'gsap'
import useBricksStore from '../store/bricks'
import TipsOverlay from './TipsOverlay'
import FinishButton from './FinishButton'
import SnapPhotoButton from './SnapPhotoButton'
import PhotoModal from './PhotoModal'
import useActivityStore from '../store/activity'
import ConfirmationOverlay from './ConfirmationOverlay'
import { checkBrickConnections } from '../js/utils'

const steps = ['initial', 'tips', 'confirmation', 'building', 'photo'] as const

type Step = (typeof steps)[number]

function Builder() {
  // const [isShowingTips, setIsShowingTips] = useState(false)
  const [step, setStep] = useState<Step>('initial')
  const app = useRef(null)
  const fullscreenRef = useRef(null)
  const canvasRef = useRef(null)

  function fullscreenListener() {
    const canvas = canvasRef.current
    if (!document.fullscreenElement) {
      canvas.style.removeProperty('width')
      canvas.style.removeProperty('height')
    } else {
      // Remove transition classes when resizing the canvas to fit the entire fullscreened parent
      canvas.classList.remove('bb-duration-500')
      canvas.classList.remove('bb-transition-all')
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }
    setTimeout(() => {
      app.current.handleResize()
    }, 500)
  }
  useEffect(() => {
    app.current = new Application({ canvas: canvasRef.current })

    const fullscreenElement = fullscreenRef.current
    fullscreenElement.addEventListener('fullscreenchange', fullscreenListener)
    gsap.delayedCall(4, () => {
      setStep('tips')
    })
    return () => {
      fullscreenElement.removeEventListener('fullscreenchange', fullscreenListener)
    }
  }, [])

  function setBuildingState() {
    setStep('building')
  }

  function openTips() {
    setStep('tips')
  }

  async function attemptSubmit() {
    const bricks = useBricksStore.getState().bricks
    const isConnected = checkBrickConnections(bricks)

    if (!isConnected) {
      setStep('confirmation')
    } else {
      await submit()
    }
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

    // TODO: Save build somewhere in v2 so we can show results later
  }

  function toggleFullscreen() {
    // Will trigger the event listener added in useEffect
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      if (fullscreenRef.current.requestFullscreen) {
        fullscreenRef.current.requestFullscreen()
      }
    }
  }

  function snapPhoto() {
    // Takes a screenshot of the current scene
    app.current.snapBuild = true
    setStep('photo')
  }

  function download() {
    const activityName = useActivityStore.getState().name
    const date = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    const fileName = `${activityName} - ${date}`
    app.current.downloadScene(fileName)
  }
  return (
    <div
      className="bb-w-full bb-h-full bb-overflow-hidden bb-relative bb-bg-purple "
      ref={fullscreenRef}
    >
      <canvas
        className={`bb-w-full bb-h-full bb-transition-all bb-duration-500 bb-noselect ${
          step === 'tips' ? 'bb--translate-y-[20vh] bb-scale-125' : 'bb-translate-y-0 bb-scale-100 '
        }`}
        ref={canvasRef}
      ></canvas>
      <button
        className="bb-absolute bb-z-20 bb-left-8 bb-top-8 bb-bg-purple-dark bb-p-2 bb-rounded bb-text-white bb-flex bb-items-center bb-gap-2"
        onClick={toggleFullscreen}
      >
        <SvgFullScreen className="bb-w-4 bb-h-4" /> <span className="">Full screen</span>
      </button>
      <div
        className={`bb-absolute bb-left-1/2 bb--translate-x-1/2 bb-bottom-12 bb-z-30 bb-mx-auto bb-flex bb-gap-2 bb-duration-500 bb-transition-all ${
          step !== 'building'
            ? 'bb-translate-y-24 bb-opacity-0'
            : 'bb-translate-y-0 bb-delay-1000 bb-opacity-100'
        }`}
      >
        <FinishButton onClick={attemptSubmit} />
        <SnapPhotoButton onClick={snapPhoto} />
      </div>
      <PhotoModal step={step} onDownloadClick={download} onCloseClick={() => setStep('building')} />

      <TipsToggle
        openTips={openTips}
        closeTips={setBuildingState}
        isShowingTips={step === 'tips'}
      />
      <TipsOverlay closeTips={setBuildingState} isShowingTips={step === 'tips'} />
      <ConfirmationOverlay
        continueBuilding={setBuildingState}
        closeAndSubmit={submit}
        isShowingConfirmation={step === 'confirmation'}
      />
    </div>
  )
}

export default Builder
