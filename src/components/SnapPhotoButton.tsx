import SvgCamera from '@/assets/icons/camera.svg?react'

function SnapPhotoButton({ onClick }) {
  return (
    <button onClick={onClick} className="bb-w-10  bb-center bb-btn-primary">
      <SvgCamera className="bb-w-5 bb-h-5" />
    </button>
  )
}

export default SnapPhotoButton
