import SvgDrawingArrow from '@/assets/icons/drawing-arrow.svg?react'

function ConfirmationOverlay({ isShowingConfirmation, continueBuilding, closeAndSubmit }) {
  return (
    <div
      className={`bb-absolute bb-z-10 bb-opacity-0 bb-origin-bottom bb-translate-y-[50%] bb-w-full bb-tips-bg bb-h-full bb-transition-all bb-duration-500 ${
        isShowingConfirmation ? '!bb-translate-y-0 !bb-opacity-100' : 'bb-pointer-events-none'
      }`}
    >
      <div className="bb-absolute bb-inset-x-0 bb-flex bb-flex-col bb-items-center bb-px-4 bb-mx-auto bb-bottom-5 md:bb-bottom-12">
        <SvgDrawingArrow className="bb-mb-7 md:bb-mb-9" />

        <span className="bb-mb-2 bb-text-lg bb-font-black bb-text-white">Are you done?</span>
        <span className="bb-mb-6 bb-text-base bb-text-center bb-text-white">
          Looks like some bricks are not connected!
        </span>
        <div className="bb-flex bb-flex-col bb-gap-2">
          <button className=" bb-w-64 bb-btn-secondary" onClick={continueBuilding}>
            No, I wanna continue building
          </button>

          <button className="bb-btn-primary bb-w-64" onClick={closeAndSubmit}>
            Yes, that’s enough building
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationOverlay
