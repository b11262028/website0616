import PageLayout from '../PageLayout'

const links = [
  { label: 'INSTAGRAM', value: '@shihfeng._', href: 'https://instagram.com/shihfeng._' },
  { label: 'EMAIL', value: 'tangqianting33@gmail.com', href: 'mailto:tangqianting33@gmail.com' },
 
]

export default function Contact() {
  return (
    <PageLayout titleZh="聯絡" titleEn="Contact">
      <div className="contact-body">
        <p className="contact-intro">歡迎透過以下方式聯絡我。</p>
        <div className="contact-list">
          {links.map(item => (
            <a key={item.label} className="contact-item" href={item.href} target="_blank" rel="noreferrer">
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
