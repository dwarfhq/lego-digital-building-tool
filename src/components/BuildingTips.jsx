import { tips } from '../js/utils'
import SvgGestureMove from '@/assets/icons/gesture-move.svg?react'
import SvgGestureZoom from '@/assets/icons/gesture-zoom.svg?react'
import SvgGestureRotate from '@/assets/icons/gesture-rotate.svg?react'
import SvgGestureViewpoint from '@/assets/icons/gesture-viewpoint.svg?react'

const icons = {
  'gesture-move': SvgGestureMove,
  'gesture-zoom': SvgGestureZoom,
  'gesture-rotate': SvgGestureRotate,
  'gesture-viewpoint': SvgGestureViewpoint,
}

function BuildingTips() {
  return (
    <div className="bb-w-screen bb-relative bb-flex bb-justify-between bb-max-w-[1200px] bb-mb-8 bb-text-white">
      {tips.map(({ title, message, icon }, idx) => {
        const TipIcon = icons[icon]
        return (
          <div key={title} className="bb-duration-500 bb-flex-1 bb-flex bb-items-center bb-center">
            <div className="bb-flex bb-justify-center bb-items-center bb-box-content bb-h-full bb-w-full bb-flex-col bb-p-2">
              <div className="bb-rounded-xl bb-bg-purple-dark bb-text-white bb-p-1 bb-h-lg:p-[10px] bb-aspect-square bb-w-15 bb-h-15 bb-h-lg:w-19 bb-h-lg:h-19 bb-flex bb-justify-center bb-items-center bb-shrink-0">
                <TipIcon />
              </div>

              <div className="bb-mt-[15px] bb-leading-[19px] bb-text-lg bb-flex bb-flex-col bb-text-center bb-max-w-[200px]">
                <span className="bb-capitalize bb-text-base bb-font-medium">{title}</span>
                <span className="bb-text-base bb-mt-[15px]"> {message} </span>
              </div>
            </div>
            {tips.length - 1 !== idx && <div className="bb-h-2/3 bb-w-[1px] bb-bg-white"></div>}
          </div>
        )
      })}
    </div>
  )
}

export default BuildingTips
