// export type CameraDevice = {
//   deviceId: string
//   label: string
//   kind: MediaDeviceKind
// }

// export type OpenCameraOptions = {
//   deviceId?: string
//   facingMode?: 'user' | 'environment'
//   width?: number
//   height?: number
//   frameRate?: number
// }

// export class CameraController {
//   private mediaStream: MediaStream | null = null
//   private currentTrack: MediaStreamTrack | null = null

//   async listVideoDevices(): Promise<CameraDevice[]> {
//     const devices = await navigator.mediaDevices.enumerateDevices()
//     return devices
//       .filter((d) => d.kind === 'videoinput')
//       .map((d) => ({ deviceId: d.deviceId, label: d.label, kind: d.kind }))
//   }

//   async open(options: OpenCameraOptions = {}): Promise<MediaStream> {
//     await this.close()

//     const {
//       deviceId,
//       facingMode = 'environment',
//       width = 1280,
//       height = 720,
//       frameRate = 30,
//     } = options

//     const constraints: MediaStreamConstraints = {
//       video: deviceId
//         ? { deviceId: { exact: deviceId }, width, height, frameRate }
//         : { facingMode, width, height, frameRate },
//       audio: false,
//     }

//     this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
//     this.currentTrack = this.mediaStream.getVideoTracks()[0] ?? null
//     return this.mediaStream
//   }

//   attachTo(video: HTMLVideoElement) {
//     if (!this.mediaStream) return
//     video.srcObject = this.mediaStream
//     video.playsInline = true
//   }

//   async play(video: HTMLVideoElement) {
//     if (!video.srcObject) this.attachTo(video)
//     await video.play()
//   }

//   async pause(video: HTMLVideoElement) {
//     try {
//       await video.pause()
//     } catch {
//       // ignore
//     }
//   }

//   async toggleTorch(on: boolean): Promise<boolean> {
//     try {
//       const track = this.currentTrack
//       if (!track) return false
//       const capabilities = (track.getCapabilities?.() || {}) as any
//       if (!('torch' in capabilities)) return false
//       await track.applyConstraints({ advanced: [{ torch: on }] })
//       return true
//     } catch {
//       return false
//     }
//   }

//   async close() {
//     if (this.mediaStream) {
//       this.mediaStream.getTracks().forEach((t) => t.stop())
//     }
//     this.currentTrack = null
//     this.mediaStream = null
//   }
// }

// export async function ensurePermissions(): Promise<boolean> {
//   if (!navigator.permissions?.query) return true
//   try {
//     const res = await navigator.permissions.query({ name: 'camera' as PermissionName })
//     return res.state !== 'denied'
//   } catch {
//     return true
//   }
// }
