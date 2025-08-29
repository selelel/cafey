import React, { useEffect, useRef, useState } from 'react'
import { CameraController, ensurePermissions } from '@/lib/camera'

export function QRTabs() {
  const [activeTab, setActiveTab] = useState<'qr' | 'scan'>('qr')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([null, null])

  // Camera state
  const camera = useRef<CameraController | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [torchOn, setTorchOn] = useState(false)
  const [cameraOpen, setCameraOpen] = useState(false)

  const startCamera = async () => {
    try {
      if (!await ensurePermissions()) return
      if (!camera.current) camera.current = new CameraController()
      // const stream = await camera.current.open({ facingMode: 'environment' })
      if (videoRef.current) {
        camera.current.attachTo(videoRef.current)
        await camera.current.play(videoRef.current)
      }
      setCameraOpen(true)
    } catch (e) {
      // noop - in UI you might show a toast
    }
  }

  const stopCamera = async () => {
    try {
      await camera.current?.close()
    } finally {
      setCameraOpen(false)
      setTorchOn(false)
    }
  }

  const toggleTorch = async () => {
    const desired = !torchOn
    const ok = await camera.current?.toggleTorch(desired)
    if (ok) setTorchOn(desired)
  }

  useEffect(() => {
    const index = activeTab === 'qr' ? 0 : 1
    tabRefs.current[index]?.setAttribute('tabindex', '0')
  }, [activeTab])

  // Auto stop camera when leaving scan tab or unmounting
  useEffect(() => {
    if (activeTab !== 'scan' && cameraOpen) {
      stopCamera()
    }
    return () => {
      stopCamera()
    }
  }, [activeTab])

  const onKeyDownTabList: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const currentIndex = activeTab === 'qr' ? 0 : 1
    const total = 2
    let nextIndex = currentIndex

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextIndex = (currentIndex + 1) % total
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      nextIndex = (currentIndex - 1 + total) % total
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIndex = total - 1
    } else {
      return
    }

    const ids = ['qr', 'scan'] as const
    setActiveTab(ids[nextIndex])
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      data-slot="tabs"
      className="flex flex-col gap-2 w-full"
    >
      {/* Tablist */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        aria-label="Payment QR tabs"
        data-slot="tabs-list"
        className="bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2"
        onKeyDown={onKeyDownTabList}
      >
        {/* QR Tab */}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'qr'}
          aria-controls="radix-content-qr"
          data-state={activeTab === 'qr' ? 'active' : 'inactive'}
          id="radix-trigger-qr"
          data-slot="tabs-trigger"
          className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:not([className*='size-'])]:size-4 flex items-center gap-2"
          tabIndex={activeTab === 'qr' ? 0 : -1}
          onClick={() => setActiveTab('qr')}
          ref={(el) => {
            tabRefs.current[0] = el
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-qr-code w-4 h-4"
            aria-hidden="true"
          >
            <rect width="5" height="5" x="3" y="3" rx="1"></rect>
            <rect width="5" height="5" x="16" y="3" rx="1"></rect>
            <rect width="5" height="5" x="3" y="16" rx="1"></rect>
            <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
            <path d="M21 21v.01"></path>
            <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
            <path d="M3 12h.01"></path>
            <path d="M12 3h.01"></path>
            <path d="M12 16v.01"></path>
            <path d="M16 12h1"></path>
            <path d="M21 12v.01"></path>
            <path d="M12 21v-1"></path>
          </svg>
          Show QR
        </button>

        {/* Scan Tab */}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'scan'}
          aria-controls="radix-content-scan"
          data-state={activeTab === 'scan' ? 'active' : 'inactive'}
          id="radix-trigger-scan"
          data-slot="tabs-trigger"
          className="data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 justify-center rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:not([className*='size-'])]:size-4 flex items-center gap-2"
          tabIndex={activeTab === 'scan' ? 0 : -1}
          onClick={() => setActiveTab('scan')}
          ref={(el) => {
            tabRefs.current[1] = el
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-line w-4 h-4"
            aria-hidden="true"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
            <path d="M7 12h10"></path>
          </svg>
          Scan Code
        </button>
      </div>

      {/* QR Content */}
      <div
        data-state={activeTab === 'qr' ? 'active' : 'inactive'}
        role="tabpanel"
        aria-labelledby="radix-trigger-qr"
        id="radix-content-qr"
        tabIndex={0}
        data-slot="tabs-content"
        className="flex-1 outline-none space-y-4"
        hidden={activeTab !== 'qr'}
        style={{ animationDuration: '0s' }}
      >
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
        >
          <div
            data-slot="card-header"
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
          >
            <h4
              data-slot="card-title"
              className="leading-none flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-qr-code w-6 h-6"
                aria-hidden="true"
              >
                <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                <path d="M21 21v.01"></path>
                <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                <path d="M3 12h.01"></path>
                <path d="M12 3h.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 12h1"></path>
                <path d="M21 12v.01"></path>
                <path d="M12 21v-1"></path>
              </svg>
              Your Payment QR Code
            </h4>
          </div>

          <div data-slot="card-content" className="px-6 space-y-4 [&:last-child]:pb-6">
            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-8 gap-1 w-40 h-40">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-sm ${i % 3 === 0 ? 'bg-primary' : 'bg-white'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Show this code to the cashier</p>
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 font-mono text-xs"
              >
                ID: 23456789
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 h-12"
              >
                Share Code
              </button>
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-12"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scan Content */}
      <div
        data-state={activeTab === 'scan' ? 'active' : 'inactive'}
        role="tabpanel"
        aria-labelledby="radix-trigger-scan"
        id="radix-content-scan"
        hidden={activeTab !== 'scan'}
        tabIndex={0}
        data-slot="tabs-content"
        className="flex-1 outline-none space-y-4"
      >
        <div
          data-slot="card"
          className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
        >
          <div
            data-slot="card-header"
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
          >
            <h4
              data-slot="card-title"
              className="leading-none flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scan-line w-6 h-6"
                aria-hidden="true"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <path d="M7 12h10"></path>
              </svg>
              Scan to Pay
            </h4>
          </div>

          <div
            data-slot="card-content"
            className="px-6 [&:last-child]:pb-6 space-y-4"
          >
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              <div className="relative z-10 text-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-scan-line w-16 h-16 mx-auto text-primary animate-pulse"
                  aria-hidden="true"
                >
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                  <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                  <path d="M7 12h10"></path>
                </svg>
                <p className="text-muted-foreground">Point camera at QR code</p>
              </div>

              {/* Scanner Frame */}
              <div className="absolute inset-8 border-2 border-primary rounded-lg">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
              </div>

              {/* Hidden video element to render the camera stream */}
              <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover opacity-0" muted playsInline />
            </div>

            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                Scan merchant QR code or barcode
              </p>
              <p className="text-sm text-muted-foreground">
                Make sure the code is well-lit and centered
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 h-12"
                onClick={cameraOpen ? stopCamera : startCamera}
              >
                {cameraOpen ? 'Close Camera' : 'Open Camera'}
              </button>
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 h-12"
              >
                Gallery
              </button>
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-12"
                onClick={toggleTorch}
                disabled={!cameraOpen}
              >
                {torchOn ? 'Torch Off' : 'Torch On'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
