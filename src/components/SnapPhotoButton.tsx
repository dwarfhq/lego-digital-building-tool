import SvgCamera from '@/assets/icons/camera.svg?react'

function SnapPhotoButton({ onClick }) {
  return (
    <button onClick={onClick} className="bb-h-10 bb-w-10  bb-center bb-rounded bb-btn-secondary">
      <SvgCamera className="bb-w-5 bb-h-5" />
    </button>
  )
}

export default SnapPhotoButton
