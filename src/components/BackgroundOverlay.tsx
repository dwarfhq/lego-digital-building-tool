function BackgroundOverlay({ isVisible, onClose }) {
  return (
    <div
      className={`overlay bb-absolute bb-inset-0 bb-bg-black/50 bb-transition-all bb-duration-500 bb-z-30 ${
        isVisible ? 'bb-opacity-100 bb-pointer-events-auto' : 'bb-opacity-0 bb-pointer-events-none'
      }`}
      onClick={onClose}
    ></div>
  )
}

export default BackgroundOverlay
