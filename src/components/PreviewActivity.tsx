import { useEffect } from 'react'
import useActivityStore from '../store/activity'
import { Application } from '../builder/Application'

function PreviewActivity({ options }) {
  const setActivityOptions = useActivityStore(state => state.setActivityOptions)
  setActivityOptions(options)

  useEffect(() => {
    const canvasDom = document.getElementById('builder')

    new Application({ canvas: canvasDom, cameraAnimation: false })
  }, [])
  return (
    <>
      <canvas className={`w-full h-full noselect`} id="builder"></canvas>
    </>
  )
}

export default PreviewActivity
