import useActivityStore from '../store/activity'
import Builder from './Builder'

function PreviewActivity({ options }) {
  const setActivityOptions = useActivityStore(state => state.setActivityOptions)
  setActivityOptions(options)
  return <Builder />
}

export default PreviewActivity
