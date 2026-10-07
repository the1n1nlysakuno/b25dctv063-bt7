import { useState } from 'react'

function hopLeEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function Contact() {
  const [ten, setTen] = useState('')
  const [email, setEmail] = useState('')
  const [noiDung, setNoiDung] = useState('')
  const [loi, setLoi] = useState({})
  const [thongBao, setThongBao] = useState('')

  function guiForm(e) {
    e.preventDefault()
    const loiMoi = {}
    if (ten.trim().length < 2) loiMoi.ten = 'Tên hơi ngắn, nhập đầy đủ giúp mình nhé'
    if (!hopLeEmail(email.trim())) loiMoi.email = 'Email không đúng định dạng'
    if (noiDung.trim().length < 10) loiMoi.noiDung = 'Viết thêm chút nữa (ít nhất 10 ký tự)'

    setLoi(loiMoi)
    if (Object.keys(loiMoi).length > 0) {
      setThongBao('')
      return
    }

    setThongBao('Cảm ơn bạn, mình sẽ phản hồi sớm!')
    setTen('')
    setEmail('')
    setNoiDung('')
  }

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Liên hệ</h2>
        <p className="eyebrow">Hãy gửi cho tôi vài lời nhắn</p>

        <form noValidate onSubmit={guiForm}>
          <div>
            <label htmlFor="name">Tên</label>
            <input id="name" value={ten} onChange={(e) => setTen(e.target.value)} />
            <div className="err">{loi.ten}</div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="err">{loi.email}</div>
          </div>

          <div>
            <label htmlFor="msg">Nội dung</label>
            <textarea
              id="msg"
              rows="4"
              maxLength={300}
              value={noiDung}
              onChange={(e) => setNoiDung(e.target.value)}
            />
            <div className="charcount">
              <span>{noiDung.length}</span>/300
            </div>
            <div className="err">{loi.noiDung}</div>
          </div>

          <button type="submit" className="btn btn-primary">Gửi</button>
          <div id="formMsg" style={{ color: 'var(--accent)' }}>{thongBao}</div>
        </form>
      </div>
    </section>
  )
}
