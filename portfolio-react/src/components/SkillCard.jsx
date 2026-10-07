export default function SkillCard({ ten, moTa, mucDo }) {
  return (
    <div className="skill-card">
      <h3>{ten}</h3>
      <p>{moTa}</p>
      <div className="lvl">
        <i style={{ width: `${mucDo}%` }}></i>
      </div>
    </div>
  )
}
