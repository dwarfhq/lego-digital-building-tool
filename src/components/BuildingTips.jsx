import { tips } from '../js/utils'
import SvgGestureMove from '@/assets/icons/gesture-move.svg?react'
import SvgGestureZoom from '@/assets/icons/gesture-zoom.svg?react'
import SvgGestureRotate from '@/assets/icons/gesture-rotate.svg?react'
import SvgGestureViewpoint from '@/assets/icons/gesture-viewpoint.svg?react'
import { useEffect, useRef, useState } from 'react'

const icons = {
  'gesture-move': SvgGestureMove,
  'gesture-zoom': SvgGestureZoom,
  'gesture-rotate': SvgGestureRotate,
  'gesture-viewpoint': SvgGestureViewpoint,
}

function BuildingTips() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const scroll = index => {
    setActiveIndex(index)
    const carousel = carouselRef.current
    const scrollWidth = carousel.scrollWidth
    const scrollPosition = (scrollWidth / tips.length) * index
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  }

  useEffect(() => {
    const carousel = carouselRef.current
    const handleScroll = () => {
      const scrollWidth = carousel.scrollWidth
      const scrollPosition = carousel.scrollLeft
      const index = Math.round((scrollPosition / scrollWidth) * tips.length)
      setActiveIndex(index)
    }
    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="bb-w-full  bb-max-w-[1200px] bb-mx-auto">
      <div
        className="bb-w-full bb-text-white bb-snap-x bb-snap-mandatory  bb-grid-cols-[repeat(4,100%)] lg:bb-grid-cols-4 lg:bb-gap-8 xl:bb-gap-12 bb-overflow-x-auto bb-grid bb-scrollbar-hide "
        ref={carouselRef}
      >
        {tips.map(({ title, message, icon }, index) => {
          const TipIcon = icons[icon]
          return (
            <div key={title} className="bb-duration-500 bb-snap-center bb-snap-always bb-relative">
              <div className="bb-flex bb-justify-center bb-items-center bb-w-full  bb-h-full bb-flex-col ">
                <div className="bb-rounded-xl bb-bg-secondary bb-text-white  bb-aspect-square bb-p-2 bb-w-20 bb-h-20 bb-flex bb-justify-center bb-items-center bb-shrink-0">
                  <TipIcon />
                </div>

                <div className="bb-mt-4 bb-text-lg bb-flex bb-flex-col bb-text-center bb-max-w-[200px]">
                  <span className="bb-capitalize bb-text-base bb-font-medium">{title}</span>
                  <span className="bb-text-base bb-mt-1">{message}</span>
                </div>
              </div>
              {index !== tips.length - 1 && (
                <div className="bb-h-1/2 bb-w-[1px] bb-absolute lg:bb-right-[-21px] xl:bb-right-[-31px] bb-top-1/4 bb-bg-white/30 bb-hidden lg:bb-block"></div>
              )}
            </div>
          )
        })}
      </div>
      <div className="bb-flex bb-justify-center bb-gap-3 lg:bb-hidden bb-mt-8">
        {tips.map((_, index) => {
          return (
            <div
              className={`bb-w-3 bb-h-3 bb-bg-secondary bb-rounded-none bb-transition bb-duration-700 ${
                activeIndex === index ? 'bb-bg-white bb-rotate-45' : ''
              }`}
              onClick={e => {
                // Prevents the event bubbling up, closing the tips overlay
                e.stopPropagation()
                scroll(index)
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default BuildingTips
