import { useLayoutEffect, useRef } from 'react'

export function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Draw grain and set style before paint to avoid wrong blend/opacity on first frame (matches HTML execution timing)
  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function render(c: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      const w = window.innerWidth
      const h = window.innerHeight
      c.width = w
      c.height = h
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255
        data[i] = val
        data[i + 1] = val
        data[i + 2] = val
        data[i + 3] = Math.random() * 90 + 35
      }
      ctx.putImageData(imageData, 0, 0)
    }

    render(canvas, ctx)
    const onResize = () => render(canvas, ctx)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <canvas ref={canvasRef} className="grain-canvas" aria-hidden />
}
