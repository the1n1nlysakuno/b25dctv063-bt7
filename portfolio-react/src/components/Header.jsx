import { useEffect, useState } from 'react'

const menuList = [
  { href: '#about', nhan: 'Giới thiệu' },
  { href: '#skills', nhan: 'Kỹ năng' },
  { href: '#projects', nhan: 'Dự án' },
  { href: '#contact', nhan: 'Liên hệ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  // đọc theme đã lưu, nếu chưa có thì theo cài đặt của hệ điều hành
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
    } else if (matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="logo">
          git<span>hub</span>TH1
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {menuList.map((m) => (
            <li key={m.href}>
              <a href={m.href} onClick={() => setMenuOpen(false)}>
                {m.nhan}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            id="themeBtn"
            title="Đổi giao diện"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            id="burger"
            className={menuOpen ? 'open' : ''}
            aria-label="menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
