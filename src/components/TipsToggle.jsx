import SvgLightBulb from '@/assets/icons/light-bulb.svg?react'
import SvgClose from '@/assets/icons/close.svg?react'
function TipsToggle({ isShowingTips, openTips, closeTips }) {
  return (
    <div className="bb-col-end-[-1] bb-justify-end bb-flex bb-absolute bb-z-20 bb-top-8 bb-right-8">
      <div className="bb-cursor-pointer bb-z-20 bb-rounded-full bb-text-sm bb-bg-purple-dark bb-text-white bb-py-[7px] bb-px-[10px] bb-w-20 bb-overflow-hidden bb-flex">
        <button
          onClick={openTips}
          className={`bb-flex bb-items-center bb-justify-center bb-w-full bb-h-5 bb-gap-[8px] focus:bb-ring-0 bb-transition-transform bb-duration-700 bb-shrink-0 ${
            isShowingTips ? 'bb--translate-x-20' : 'bb-translate-x-0'
          }`}
        >
          <SvgLightBulb className="bb-w-5" />
          <span>Tips</span>
        </button>
        <button
          onClick={closeTips}
          className={`bb-flex bb-items-center bb-justify-center bb-w-full bb-h-5 bb-gap-2 focus:bb-ring-0 bb-transition-transform bb-duration-700 bb-shrink-0 ${
            isShowingTips ? 'bb--translate-x-16' : 'bb-translate-x-0'
          }`}
        >
          <span>Tips</span>
          <SvgClose className="bb-w-4" />
        </button>
      </div>
    </div>
  )
}

export default TipsToggle
