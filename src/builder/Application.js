import gsap from 'gsap'
import { WebGLRenderer, PCFSoftShadowMap, AxesHelper } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CameraFactory } from './CameraFactory'
import { BuilderScene } from './BuilderScene'
import { Pointer } from './Pointer'
const MAX_PIXEL_RATIO = 1.5
export class Application {
  constructor({ canvas, cameraAnimation = true }) {
    this.canvas = canvas
    this.cameraAnimation = cameraAnimation
    this.makeCamera()
    this.makeRenderer()
    this.makePointer()
    this.makeOrbitControls()
    this.makeScene()
    this.initialize()

    this.snapBuild = false
  }
  initialize() {
    this.render = this.render.bind(this)
    this.$ticker.add(this.render)
    // window.addEventListener('resize', this.handleResize.bind(this))
  }
  handleResize() {
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    this.renderer.setPixelRatio(Math.max(window.devicePixelRatio, MAX_PIXEL_RATIO))
  }
  makeRenderer() {
    this.renderer = new WebGLRenderer({ canvas: this.canvas })
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    this.renderer.setPixelRatio(Math.max(window.devicePixelRatio, MAX_PIXEL_RATIO))
    this.canvas.parentElement?.appendChild(this.renderer.domElement)
  }
  makeScene() {
    this.scene = new BuilderScene({
      $application: this,
      $ticker: this.$ticker,
      $pointer: this.$pointer,
      $camera: this.$camera,
      $orbitControls: this.orbitControls,
      $renderer: this.renderer,
      $cameraAnimation: this.cameraAnimation,
    })
  }
  makeCamera() {
    const aspectRatio = this.canvas.clientWidth / this.canvas.clientHeight

    if (this.isTutorial) {
      this.camera = CameraFactory.makePerspectiveCamera({
        aspectRatio,
        x: 1,
        y: 8,
        z: 0,
      })
    } else {
      this.camera = CameraFactory.makePerspectiveCamera({ aspectRatio })
    }
  }
  makeAxesHelper() {
    this.axesHelper = new AxesHelper(5)
    this.scene.add(this.axesHelper)
  }
  makeOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

    // Restrict zoom and panning options
    this.orbitControls.maxPolarAngle = Math.PI / 2 - 0.1
    // this.orbitControls.screenSpacePanning = false
    this.orbitControls.minDistance = 10
    this.orbitControls.maxDistance = 40
    this.orbitControls.enablePan = false
    this.orbitControls.enableZoom = false
    this.orbitControls.enableRotate = false
  }
  makePointer() {
    this.pointer = new Pointer(this.renderer.domElement)
  }
  captureScene() {
    // Create an image of the current canvas and show it in the preview
    const dataURL = this.canvas.toDataURL('image/png')
    const img = document.querySelector('#bb-preview')
    img.src = dataURL
  }
  downloadScene(fileName) {
    const img = document.querySelector('#bb-preview')
    const link = document.createElement('a')
    link.download = `${fileName}.png`
    link.href = img.src
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  render() {
    this.renderer.render(this.scene, this.camera)
    if (this.snapBuild) {
      this.captureScene()
      this.snapBuild = false
    }
  }
  get $ticker() {
    return gsap.ticker
  }
  get $pointer() {
    return this.pointer
  }
  get $scene() {
    return this.scene
  }
  get $camera() {
    return this.camera
  }
  get $renderer() {
    return this.renderer
  }
}
