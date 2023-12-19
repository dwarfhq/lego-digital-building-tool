import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function Stars() {
  const [starsGrid, setStarsGrid] = useState([])
  const starsFullWidthRef = useRef([])
  const starsContainer = useRef(null)

  const colors = ['rgb(var(--bb-color-secondary))', '#FFFFFF']
  const amount = window.innerWidth >= 1024 ? 24 : 16
  const gridCols = window.innerWidth >= 1024 ? 6 : 4
  const gridRows = amount / gridCols

  const fadeInAnimation = {
    opacity: 1,
    duration: 1,
    ease: 'power3.inOut',
    y: 0,
    stagger: 0.025,
  }

  useEffect(() => {
    starsFullWidthRef.current = starsFullWidthRef.current.slice(0, starsGrid.length)
  }, [starsGrid])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (
          entry.target === starsContainer.current &&
          entry.contentRect.width &&
          entry.contentRect.height
        ) {
          let currentRow = 1
          const newStarGrid = [...new Array(amount)].map((_, idx) => {
            if (idx % gridCols == 0) {
              currentRow++
            }

            const containerWidth = starsContainer.current.getBoundingClientRect().width
            const containerHeight = starsContainer.current.getBoundingClientRect().height

            const offset = containerWidth >= 1024 ? 60 : 20
            //align stars in  a grid horizontally and offset them with a random value between -60px and 60px on desktop and between -20px and 20px on mobile
            const x =
              (containerWidth / gridCols) * ((idx % gridCols) + 0.5) +
              Math.floor(Math.random() * offset * 2 - offset)

            //align stars in  a grid vertically and offset them with a random value between -60px and 60px on desktop and between -20px and 20px on mobile
            const y =
              (containerHeight / gridRows) * (currentRow % gridRows) +
              containerHeight / (gridRows * 2) +
              Math.floor(Math.random() * offset * 2 - offset)

            const color = Math.floor(Math.random() * colors.length)

            return {
              x,
              y,
              color,
            }
          })
          setStarsGrid(newStarGrid)
          setTimeout(() => {
            starsFullWidthRef.current.forEach(star => {
              gsap.to(star, fadeInAnimation)
              gsap.to(star, levitationAnimation())
            })
          }, 250)
        }
      }
    })

    if (starsContainer.current) {
      resizeObserver.observe(starsContainer.current)
    }

    return () => {
      if (starsContainer.current) {
        resizeObserver.unobserve(starsContainer.current)
      }
    }
  }, [])

  const levitationAnimation = () => {
    return {
      y: `20px`,
      duration: `${Math.random() * 3 + 2}`,
      ease: 'sine.easeInOut',
      repeat: -1,
      rotation: `${Math.random() * 30}deg`,
      yoyo: true,
      delay: Math.random() * 1 + 1,
    }
  }

  const getStarStyling = (star, side = 'left') => {
    return {
      opacity: 0,
      [side]: `${star.x}px`,
      top: `${star.y}px`,
      backgroundColor: `${colors[star.color]}`,
      transform: `translateY(60px) rotate(${Math.random() * 360}deg)`,
    }
  }
  return (
    <div className="bb-absolute bb-inset-0 bb-w-full bb-h-full">
      <div className="bb-relative bb-w-full bb-h-full" ref={starsContainer}>
        {starsGrid.map((star, index) => {
          return (
            <div
              className="bb-absolute bb-w-3 bb-h-3 bb-lg:w-4 bb-lg:h-4"
              ref={el => (starsFullWidthRef.current[index] = el)}
              key={index}
              style={getStarStyling(star)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Stars
