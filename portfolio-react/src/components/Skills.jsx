import SkillCard from './SkillCard'

const kyNang = [
  { ten: 'HTML / CSS', moTa: 'Cơ bản', mucDo: 90 },
  { ten: 'JavaScript', moTa: 'Cơ bản', mucDo: 85 },
  { ten: 'Python', moTa: 'Cơ bản', mucDo: 100 },
  { ten: 'Ielts', moTa: 'Reading 9.0 :)', mucDo: 75 },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Kỹ năng</h2>
        <p className="eyebrow">Những thứ mình dùng hàng ngày</p>
        <div className="skill-grid">
          {kyNang.map((kn) => (
            <SkillCard key={kn.ten} {...kn} />
          ))}
        </div>
      </div>
    </section>
  )
}
