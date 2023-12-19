import SvgFullScreen from '@/assets/icons/full-screen.svg?react'

function ToggleFullscreenButton({ onClick }) {
  return (
    <button
      className="bb-absolute bb-z-20 bb-left-4 bb-top-4 lg:bb-left-8 lg:bb-top-8 bb-btn-secondary bb-p-2 bb-flex bb-items-center bb-gap-2 bb-h-6 lg:bb-h-8"
      onClick={onClick}
    >
      <SvgFullScreen className="bb-w-3 lg:bb-w-4 bb-h-3 lg:bb-h-4" />{' '}
      <span className="bb-text-sm lg:bb-text-base">Full screen</span>
    </button>
  )
}

export default ToggleFullscreenButton
