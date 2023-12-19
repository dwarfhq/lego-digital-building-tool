import SvgLightBulb from '@/assets/icons/light-bulb.svg?react'
import SvgClose from '@/assets/icons/close.svg?react'
function TipsToggle({ isShowingTips, openTips, closeTips }) {
  return (
    <div className="bb-col-end-[-1] bb-justify-end bb-flex bb-absolute bb-z-20  bb-right-4 bb-top-4 lg:bb-right-8 lg:bb-top-8">
      <div className="bb-cursor-pointer bb-z-20 bb-btn-secondary bb-text-sm  bb-w-14 lg:bb-w-16 bb-overflow-hidden bb-flex bb-h-6 lg:bb-h-8">
        <button
          onClick={openTips}
          className={`bb-center bb-w-full  bb-gap-1 focus:bb-ring-0 bb-transition-transform bb-duration-700 bb-shrink-0 ${
            isShowingTips ? 'bb--translate-x-12 lg:bb--translate-x-14' : 'bb-translate-x-0'
          }`}
        >
          <SvgLightBulb className="bb-w-4" />
          <span className="bb-text-sm lg:bb-text-base">Tips</span>
        </button>
        <button
          onClick={closeTips}
          className={`bb-center bb-w-full bb-gap-2 focus:bb-ring-0 bb-transition-transform bb-duration-700 bb-shrink-0 ${
            isShowingTips ? 'bb--translate-x-14 lg:bb--translate-x-16' : 'bb-translate-x-0'
          }`}
        >
          <span className="bb-text-sm lg:bb-text-base">Tips</span>
          <SvgClose className="bb-w-2 lg:bb-w-3" />
        </button>
      </div>
    </div>
  )
}

export default TipsToggle
