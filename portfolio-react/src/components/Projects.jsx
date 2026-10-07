import { useState } from 'react'
import ProjectCard from './ProjectCard'

const duAn = [
  { ten: 'Eyesight - Camera thông minh', moTa: 'Camera bảo mật bằng AI cao cấp.', tags: ['python', 'AIoT'] },
  { ten: 'To-do kéo thả', moTa: 'Danh sách công việc drag & drop, chia cột theo trạng thái.', tags: ['js', 'css'] },
  { ten: 'Trang web portfolio', moTa: 'Bạn đang ở đây :).', tags: ['HTML', 'js'] },
  { ten: 'Game rắn', moTa: 'Game rắn điều khiển bằng tay và Camera', tags: ['python'] },
  { ten: 'Coming soon...', moTa: 'Những dự án tương lai sẽ được thêm vào đây', tags: [] },
]

const nhomTag = ['all', 'python', 'js', 'css', 'AIoT']

export default function Projects() {
  const [tagDangChon, setTagDangChon] = useState('all')
  const [tuKhoa, setTuKhoa] = useState('')

  const dsHienThi = duAn.filter((da) => {
    const tags = da.tags.join(' ').toLowerCase()
    const hopTag = tagDangChon === 'all' || tags.includes(tagDangChon.toLowerCase())
    const q = tuKhoa.trim().toLowerCase()
    const hopTim = !q || da.ten.toLowerCase().includes(q) || tags.includes(q)
    return hopTag && hopTim
  })

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Dự án</h2>
        <p className="eyebrow">Vài project mình đã làm</p>

        <input
          type="text"
          id="searchProj"
          placeholder="tìm theo tên hoặc tag..."
          value={tuKhoa}
          onChange={(e) => setTuKhoa(e.target.value)}
        />

        <div className="filter-bar">
          {nhomTag.map((tag) => (
            <button
              key={tag}
              className={tagDangChon === tag ? 'active' : ''}
              onClick={() => setTagDangChon(tag)}
            >
              {tag === 'all' ? 'Tất cả' : tag}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {dsHienThi.map((da) => (
            <ProjectCard key={da.ten} {...da} />
          ))}
        </div>
      </div>
    </section>
  )
}
