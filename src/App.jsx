import { useNavigate } from 'react-router-dom'
import { useBackground } from './useBackground'
import './App.css'

export default function App() {
  const { canvasRef, phase: bodyClass, setPhase: setBodyClass } = useBackground()
  const navigate = useNavigate()

  // placeholder to satisfy the hook shape — animation is in useBackground
  void (function () {
    const cv = canvasRef.current
    const ctx = cv.getContext('2d')

    const CJK = '永水火山月日木金土天地人心手口目耳力刀弓矢石禾米糸衣言走足車馬魚鳥龍鬼風雨雪雲星光影道路橋門窗壁塔井泉源流波浪花草樹林森竹梅松柳杉桐楓桂藤蘭菊荷蓮芙香茶葉根莖枝芽種子果實穀稻黍豆麥麻葛棉絲帛布線繩索網血骨肉皮脈氣神魂魄命運緣德義仁禮智信忠孝廉恥勇謙遜靜虛空無極陰陽乾坤震巽坎離艮兌倉頡文字書冊卷墨筆硯印篆隸楷行草詩詞賦律平仄韻對'
    const MISC = '※◎●○△▲□■◇◆☆★§•─━│┼〇〓'
    const ALL = CJK + MISC

    function rand(a, b) { return a + Math.random() * (b - a) }
    function pick(s) { return s[Math.floor(Math.random() * s.length)] }

    function drawPaper(w, h) {
      const id = ctx.createImageData(w, h)
      const d = id.data
      for (let i = 0; i < d.length; i += 4) {
        const v = 222 + Math.random() * 18
        d[i] = v; d[i + 1] = Math.round(v * 0.925); d[i + 2] = Math.round(v * 0.76); d[i + 3] = 255
      }
      ctx.putImageData(id, 0, 0)
      ctx.strokeStyle = 'rgba(26,18,8,0.04)'; ctx.lineWidth = 0.5
      for (let i = 1; i < 6; i++) { ctx.beginPath(); ctx.moveTo(w / 6 * i, 0); ctx.lineTo(w / 6 * i, h); ctx.stroke() }
      for (let i = 1; i < 9; i++) { ctx.beginPath(); ctx.moveTo(0, h / 9 * i); ctx.lineTo(w, h / 9 * i); ctx.stroke() }
    }

    let particles = [], animId = null, frame = 0, launched = false

    function buildLayout(w, h) {
      particles = []
      const PAD = 14, GAP = 6, HEADER = 42, SIZES = [10, 12, 15, 19, 24]
      const cols = 6, colW = (w - PAD * 2 - (cols - 1) * GAP) / cols
      for (let col = 0; col < cols; col++) {
        let y = HEADER + rand(2, 10)
        while (y < h - PAD) {
          const sz = pick(SIZES)
          let rowX = PAD + col * (colW + GAP) + sz * 0.5
          while (rowX < PAD + col * (colW + GAP) + colW - sz * 0.3) {
            particles.push({ ch: pick(ALL), sz, alpha: rand(0.03, 0.14), tx: rowX + rand(-sz * 0.05, sz * 0.05), ty: y + rand(-sz * 0.05, sz * 0.05), x: rand(0, w), y: rand(0, h), t: 0, delay: rand(0, 80), speed: rand(0.022, 0.065) })
            rowX += sz * rand(0.9, 1.04)
          }
          y += sz * rand(1.02, 1.16)
        }
      }
      ;[w * 0.18, w * 0.36, w * 0.55, w * 0.72].forEach(dx => {
        let dy = HEADER
        while (dy < h) { particles.push({ ch: '│', sz: 13, alpha: rand(0.04, 0.09), tx: dx, ty: dy, x: rand(0, w), y: rand(0, h), t: 0, delay: rand(0, 30), speed: rand(0.025, 0.06) }); dy += 11 }
      });
      [HEADER - 3, h * 0.45, h * 0.72].forEach(ry => {
        let rx = PAD
        while (rx < w - PAD) { particles.push({ ch: '─', sz: 12, alpha: rand(0.04, 0.1), tx: rx, ty: ry, x: rand(0, w), y: rand(0, h), t: 0, delay: rand(0, 40), speed: rand(0.03, 0.07) }); rx += 10 }
      })
    }

    function ease(t) { return 1 - Math.pow(1 - t, 3) }

    function animate() {
      const w = cv.width, h = cv.height
      drawPaper(w, h); frame++
      let allDone = true
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (frame < p.delay) { allDone = false; continue }
        p.t = Math.min(1, p.t + p.speed); if (p.t < 1) allDone = false
        const e = ease(p.t), px = p.x + (p.tx - p.x) * e, py = p.y + (p.ty - p.y) * e
        ctx.globalAlpha = p.alpha * Math.min(1, e * 2.5)
        ctx.font = p.sz + 'px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillStyle = 'rgb(26,18,8)'; ctx.fillText(p.ch, px, py)
      }
      ctx.globalAlpha = 1
      if (!allDone) { animId = requestAnimationFrame(animate) }
      else { animId = null; if (!launched) { launched = true; setBodyClass('in') } }
    }

    function drawStatic() {
      const w = cv.width, h = cv.height
      drawPaper(w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.globalAlpha = p.alpha
        ctx.font = p.sz + 'px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillStyle = 'rgb(26,18,8)'; ctx.fillText(p.ch, p.tx, p.ty)
      }
      ctx.globalAlpha = 1
    }

    function handleResize() {
      cv.width = window.innerWidth
      cv.height = window.innerHeight
      if (launched) drawStatic()
    }

    function start() {
      cv.width = window.innerWidth; cv.height = window.innerHeight
      buildLayout(cv.width, cv.height); animate()
    }

    window.addEventListener('resize', handleResize)
    start()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  function handleNav(e, href) {
    e.preventDefault()
    setBodyClass('out')
    setTimeout(() => navigate(href), 350)
  }

  return (
    <div className={`portfolio-root ${bodyClass}`}>
      <div id="brick-band" />
      <canvas id="bg" ref={canvasRef} />
      <div id="halftone" />

      <div id="layout">
        <div id="top-rule">
          <span className="top-text top-school">Chien-Ting Tang</span>
          <span className="top-text">PORTFOLIO — Ting</span>
        </div>

        <div id="col-left">
          <div className="col-tags">
            {[1,2,3,4,5,6].map(i => (
              <span key={i} className="tag-pill" />
            ))}
          </div>


        </div>

        <div id="col-center">
          <div className="home-photo">
            <img src={`${import.meta.env.BASE_URL}images/picture.png`} alt="" />
          </div>
          <div className="teal-bar" />
          <p className="eyebrow">個人網站</p>
          <h1 className="main-name">
            <div className="name-box" />
            唐千<span className="ac">婷</span>
          </h1>
          
          <div className="stamp">
            <div className="stamp-in">
              <span>新媒體<br />藝術學系<br />2026</span>
            </div>
          </div>
        </div>

        <div id="col-nav">
          {[
            { num: '01', label: '關於我', en: 'About', href: '/about' },
            { num: '02', label: '作品集', en: 'Works', href: '/works' },
            { num: '03', label: '經歷',   en: 'CV',    href: '/experience' },
            { num: '04', label: '聯絡',   en: 'Contact', href: '/contact' },
          ].map(item => (
            <a key={item.num} className="nav-item" href={item.href} onClick={e => handleNav(e, item.href)}>
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-en">{item.en}</span>
            </a>
          ))}
        </div>

        <div id="bot-rule">
          <span className="bot-text">© 2025</span>
        </div>
      </div>
    </div>
  )
}
