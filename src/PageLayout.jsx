import { useNavigate } from 'react-router-dom'
import { useBackground } from './useBackground'
import './App.css'
import './page.css'

export default function PageLayout({ titleZh, titleEn, children }) {
  const { canvasRef, phase, setPhase } = useBackground()
  const navigate = useNavigate()

  function handleBack(e) {
    e.preventDefault()
    setPhase('out')
    setTimeout(() => navigate('/'), 350)
  }

  return (
    <div className={`portfolio-root ${phase}`}>
      <div id="brick-band" />
      <canvas id="bg" ref={canvasRef} />
      <div id="halftone" />

      <div id="page-wrap">
        <div id="page-top">
          <a href="/" className="back-btn" onClick={handleBack}>← 返回</a>
          <span className="top-text">PORTFOLIO — A · T</span>
        </div>

        <div id="page-body">
          <div id="page-head">
            <span className="page-en">{titleEn}</span>
            <h1 className="page-title">{titleZh}</h1>
          </div>
          <div id="page-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
