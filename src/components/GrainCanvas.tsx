import { useLayoutEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  // 在 paint 前畫 grain + 設 style，避免第一幀用錯 blend/opacity（與 HTML 同步執行時序）
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
