import SvgClose from '@/assets/icons/close.svg?react'
import SvgDownload from '@/assets/icons/download.svg?react'

function PhotoModal({ step, onDownloadClick, onCloseClick }) {
  return (
    <>
      <div
        className={`overlay bb-absolute bb-inset-0 bb-bg-purple-darkest/60 bb-transition-all bb-duration-500 bb-z-30 ${
          step !== 'photo'
            ? 'bb-opacity-0 bb-pointer-events-none'
            : 'bb-opacity-100 bb-pointer-events-auto'
        }`}
        onClick={onCloseClick}
      ></div>
      <div
        className={`bb-absolute bb-inset-8 lg:bb-inset-16 bb-pointer-events-none bb-z-30 bb-flex bb-duration-500 bb-transition-all bb-flex-col ${
          step !== 'photo'
            ? 'bb-translate-y-full bb-opacity-0'
            : 'bb-translate-y-0 bb-delay-300 bb-opacity-100'
        }`}
      >
        <img
          id="bb-preview"
          className={`bb-w-full bb-h-full bb-border-8 bb-border-white bb-rounded-lg ${
            step !== 'photo' ? 'bb-pointer-events-none' : 'bb-pointer-events-auto'
          }`}
        />
        <div className="bb-flex bb-gap-2 bb-absolute bb-bottom-8 bb-left-1/2 -bb-translate-x-1/2">
          <button
            onClick={onDownloadClick}
            className="bb-rounded-full bb-center bb-btn-secondary bb-w-12 bb-h-12 bb-pointer-events-auto"
          >
            <SvgDownload className="bb-w-3" />
          </button>
          <button
            onClick={onCloseClick}
            className="bb-rounded-full bb-center bb-bg-purple-dark bb-w-12 bb-h-12 bb-pointer-events-auto"
          >
            <SvgClose className="bb-w-4" />
          </button>
        </div>
      </div>
    </>
  )
}

export default PhotoModal
