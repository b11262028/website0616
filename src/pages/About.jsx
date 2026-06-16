import PageLayout from '../PageLayout'

export default function About() {
  return (
    <PageLayout titleZh="關於我" titleEn="About">
      <div className="about-body">
        <p>來自台中，習慣通過好奇心認識世界。喜歡閱讀情感細膩的故事，也喜歡從自然科學裡找靈感，將那些難以解釋、卻在我心中存有一份獨有浪漫的現象，轉化為可以感受的互動藝術。</p>
        <p>創作對我來說有點像是跨出去的練習。未知不是我所恐懼的事物，反而是我探索的動力，所以一直積極參與各類公眾事務、讓自己的思緒持續被不同的人和問題所感染。</p>
        <p className="about-daily">日常所喜，莫過於漫畫、小說和感受冬季的暖陽。</p>
      </div>
    </PageLayout>
  )
}
