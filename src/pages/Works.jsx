import { useState } from 'react'
import PageLayout from '../PageLayout'

const BASE = import.meta.env.BASE_URL

const works = [
  {
    id: 1,
    title: '《薛丁格Schrödinger》',
    desc: '年代｜2024\n媒材｜木作、投影、光敏電阻、手電筒',
    body: `互動方式是觀者透過使用手電筒探照，逐漸將黑暗的空間拼湊出全貌，在探索過程中，被某些找到的物品喚起碎片般短暫的記憶片段，在這之中拼湊出關於創作者的童年、愛的回憶。\n\n取名薛丁格的意義與影像內容有關，回憶的影片內容在家人很愛我與「但是他們不願意平等的愛我」中矛盾拉扯，所以我選擇以一種物理設想的疊加態去形容複雜的情感。\n\n製作這件作品最大的挑戰，莫過於重新剖開一份苦甜半摻的記憶，細細挖掘可用的素材，不斷與過去曾經悲傷、又不斷重複「這樣已經很好了」的自己共感，再重新解構。\n\n回憶都是屬於我的視角，並非要批判這些記憶事件之對錯，是為了讓互動結束後，有留下來空檔讓觀者思考，下出屬於觀者自己的結論。`,
    imgH: 220,
    color: 'teal',
    images: [
      `${BASE}images/Schrödinger-1.jpg`,
      `${BASE}images/Schrödinger-2.jpg`,
      `${BASE}images/Schrödinger-3.jpg`,
    ],
    youtube: 'https://youtu.be/587jGJGeNcw',
  },
  { id: 2, title: '《潮息Tidebreath》',
    desc: '年代｜2025\n媒材｜木作、投影、Processing', 
    body: '這個作品透過粒子系統與物理方程式模擬海的型態投影出來。採用海的意象只是因為難過的時候我會想看海，在海浪聲中可以感受到情緒平靜下來。\n\n《潮息》是獻給悲傷瞬間的可視呼吸，在只有光影和海浪聲的展場中陪同觀者一同起落。', 
    imgH: 250, 
    color: 'brick',
     images: [
      `${BASE}images/Tidebreath-2.jpeg`,
      `${BASE}images/Tidebreath-1.jpeg`,
      `${BASE}images/Tidebreath-3.jpeg`,
      ], 
     youtube: 'https://youtu.be/R0NPCDFDfXw' },
  { id: 3, 
    title: '《Power Node Unit》', 
    desc: '年代｜2025\n媒材｜木作、投影、Processing、按鈕、旋鈕', 
    body: '這件作品是《路徑之間Between Paths》的再發想。前作以捷運圖為概念，探索平面路線與三維現實之間的落差；這次，節點與線段不再是站點與軌道，而是換成了另一套我們習以為常卻鮮少細看的系統：電路。\n\n我重新審視了互動藝術製作現場幾乎無所不在的材料，不同顏色的電線、接地線、電力節點，在我眼中，它們的秩序已然能承載作品本身的語言。外觀做成一個附有可開鐵門的電箱，箱門打開，裡面是按鈕與旋鈕的排列，試圖模仿真實電箱的樣子，但操作它的方式其實是遊戲的遊玩方式。', 
    imgH: 180, 
    color: 'brick', 
    images: [
      `${BASE}images/Power Node Unit-0.JPG`,
      `${BASE}images/Power Node Unit-1.png`,
      `${BASE}images/Power Node Unit-2.png`,
      `${BASE}images/Power Node Unit-3.JPG`,], 
    youtube: 'https://youtu.be/1Sp7u65lkFM' },
  { id: 4,
    title: '《WWW》',
    desc: '年代｜2025\n媒材｜木作、電磁閥、彈簧', 
    body: '作品名稱的唸法是triple w，這件作品的概念來自一篇關於植物的文章。植物在受傷之後會釋放綠葉揮發物（GLVs），成分是多種醛類與醇類，混合起來就是我們所熟知的割草味。它的作用除了促進傷口癒合、抵抗細菌之外，也是一種求救信號，揮發物散進空氣後，鄰近植物接收到訊息，會立刻將養分轉往根部降低傷害，提前防禦。\n\n植物在尖叫，只是我們聽不見。\n\n用這個概念，我做了一群會彈跳、向外散開的彈簧草，模擬植物傳遞訊號時的擴散狀態。\n\n選擇彈簧而非真實草類，是因為草是有機的，彈簧是完全人造、無機的，我想透過這個材質差異本身，去模仿人造世界裡的尖叫情緒，將植物的語言，轉化為我們也能夠聽見的、看見的感官刺激。', 
    imgH: 260, 
    color: 'brick', 
    images: [
      `${BASE}images/www-3.png`,
      `${BASE}images/www-2.png`,
      `${BASE}images/www-1.png`,
      ], 
    youtube: '' },
  { id: 5, 
    title: '《路徑之間 Between Paths》', 
    desc: '年代｜2025\n媒材｜木作、投影、Processing、按鈕、旋鈕', 
    body: '以超連結作為發想，我覺得它就像是網路世界的任意門。滑鼠一點，便從這裡抵達另一個地方，中間的距離被摺疊，過程被省略，讓我聯想到通勤。\n\n《搭乘捷運的時候，我總想跳過窗外流動的風景，跳過那些被消耗掉的時間，像超連結一樣，直接穿梭到目的地。捷運圖是平面的，站與站之間是平面的點，看起來整齊、清晰、可以掌握。但我實際穿行其中的，是一個有高低起伏、迴轉交錯的三維空間——地下、地面、高架，路徑在現實裡從來不是扁平的。\n\n《這件作品以捷運圖作為概念延伸。平台上有一個觀者可以手持的方塊，翻轉之後，原本看似平面的路線圖會展開成立體的迷宮結構，模仿現實中的高低差與路徑的複雜性，而不是捷運平面圖給人的那種秩序感與扁平。透過旋鈕與按鈕，可以選擇穿梭其中，並讓路線轉彎或自主前行。', 
    imgH: 230, 
    color: 'teal',  
    images: [
      `${BASE}images/Between Paths-1.png`,
      `${BASE}images/Between Paths-2.png`,
      `${BASE}images/Between Paths-3.png`], 
    youtube: 'https://youtu.be/x7RCbJNTatk' },
  { id: 6, 
    title: '《殘餘扭矩 Residual Torque》',
    desc: '年代｜2026\n媒材｜木作、壓克力、直流推桿、布料', 
    body: '這件裝置的外觀是一對翅膀，實際運作時只有單側會緩緩張開。我希望做出的效果，是一側翅膀努力升至頂點，在即將抵達的前一刻卻開始掙扎，無法靠近卻無限想靠近的景象。\n\n翅膀的意象容易讓人聯想到希臘神話中的伊卡洛斯追求飛翔卻失敗的悲劇，但這對翅膀於我而言也許更接近夸父追日，明知太陽永遠在前方無法觸及，卻仍然奔跑、仍然追逐。\n\n單側的翅膀飛不起來，是由形式本身決定的事實，可它依然張開、依然掙扎，依然選擇奮力一搏。做一件事的重點並非結果，而是過程；就像翅膀張開飛翔，雖然沒有到達頂點卻依舊努力過。\n\n沒有成功就算沒做過了嗎？\n\n我的答案是否。', 
    imgH: 210, 
    color: 'teal',  
    images: [
      `${BASE}images/Residual_Torque-3.JPG`,
      `${BASE}images/Residual_Torque-2.JPG`,
      `${BASE}images/Residual_Torque-1.JPG`,
      ],
    youtube: 'https://youtu.be/lN6clVskMwE' },
]

function getYoutubeId(url) {
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/)
  return m ? m[1] : null
}

function Carousel({ work }) {
  const id = `carousel-${work.id}`
  const slides = [
    ...work.images.map(src => ({ type: 'image', src })),
    ...(work.youtube ? [{ type: 'youtube', id: getYoutubeId(work.youtube) }] : []),
  ]

  if (slides.length === 0) {
    return <div className="wm-placeholder"><span>+</span></div>
  }

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      {slides.length > 1 && (
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === 0 ? 'true' : undefined}
            />
          ))}
        </div>
      )}

      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
            <div className="wm-slide-wrap">
              {s.type === 'image' ? (
                <img src={s.src} className="wm-img" alt={`slide ${i + 1}`} />
              ) : (
                <div className="wm-yt">
                  <iframe
                    src={`https://www.youtube.com/embed/${s.id}`}
                    title="YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState(null)

  function open(w) { setActive(w) }
  function close() { setActive(null) }

  return (
    <PageLayout titleZh="作品集" titleEn="Works">
      <div className="works-body">
        <p className="works-note">作品陸續更新中。</p>
        <div className="works-masonry">
          {works.map(w => (
            <div
              key={w.id}
              className={`work-card work-card--${w.color}`}
              onClick={() => open(w)}
            >
              <div className="work-img-placeholder" style={{ height: w.imgH }}>
                {w.images.length > 0
                  ? <img
                      src={w.images[0]}
                      alt={w.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  : <span>+</span>
                }
              </div>
              <div className="work-info">
                <span className="work-title">{w.title}</span>
                <span className="work-desc">{w.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="wm-overlay" onClick={close}>
          <div
            className={`wm-box wm-box--${active.color}`}
            onClick={e => e.stopPropagation()}
          >
            <button className="wm-close" onClick={close}>✕</button>
            <Carousel work={active} />
            <div className="wm-info">
              <span className="wm-title">{active.title}</span>
              <p className="wm-desc">{active.desc}</p>
              {active.body && <p className="wm-body">{active.body}</p>}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
