import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer id="footer">
      <div className="footer-logo">Amy Yang</div>
      <div>{t('footer.rights')}</div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">{t('footer.linkedin')}</a>
        <a href="mailto:yating.yy.yang@gmail.com">{t('footer.email')}</a>
      </div>
    </footer>
  )
}
