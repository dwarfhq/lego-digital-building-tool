import BuildingTips from './BuildingTips'

function TipsOverlay({ isShowingTips, closeTips }) {
  return (
    <div
      className={`bb-absolute bb-z-10 bb-opacity-0 bb-origin-bottom bb-translate-y-[50%] bb-w-full bb-tips-bg bb-h-full bb-transition-all bb-duration-500 ${
        isShowingTips ? '!bb-translate-y-0 !bb-opacity-100' : 'bb-pointer-events-none'
      }`}
      onClick={closeTips}
    >
      <div className="bb-absolute bb-inset-x-0 bb-flex bb-flex-col bb-items-center bb-mx-auto bb-bottom-12 lg:bb-bottom-16 ">
        <span className="bb-text-[32px] bb-mb-[30px] bb-text-white bb-font-black">Tips</span>
        <BuildingTips />
      </div>
    </div>
  )
}

export default TipsOverlay
