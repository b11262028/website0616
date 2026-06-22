import PageLayout from '../PageLayout'

const sections = [
  {
    label: 'CLUB',
    entries: [
      {
        period: '2023–2026',
        org: '北藝大思辨研究社',
        roles: [
          '112-2 學期幹部 — 副社長、活動策劃',
          '113 學年幹部 — 副社長、活動策劃',
          '114 學年幹部 — 活動策劃',
        ],
      },
    ],
  },
  {
    label: 'ASSOCIATION',
    entries: [
      {
        period: '2025',
        org: '北藝大新媒體藝術 112 級系學會',
        roles: ['幹部 — 網管組長'],
      },
    ],
  },
  {
    label: 'EVENT',
    entries: [
      {
        period: '2024',
        org: '第九屆關渡光藝術節《燒聲》',
        roles: ['網頁組組長', '宣傳組組員'],
      },
      {
        period: '2026',
        org: '第三屆北藝新媒卓越獎《未竟之黑》',
        roles: ['工作坊／講座活動組長'],
      },
    ],
  },
]

export default function Experience() {
  return (
    <PageLayout titleZh="經歷" titleEn="CV">
      <div className="cv-body">
        {sections.map(sec => (
          <section key={sec.label} className="cv-section">
            <h2 className="cv-section-label">{sec.label}</h2>
            <div className="cv-entries">
              {sec.entries.map(entry => (
                <div key={entry.org} className="cv-entry">
                  <span className="cv-period">{entry.period}</span>
                  <div className="cv-detail">
                    <span className="cv-org">{entry.org}</span>
                    <ul className="cv-roles">
                      {entry.roles.map(r => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  )
}
