export default function ProjectCard({ ten, moTa, tags }) {
  return (
    <div className="proj-card">
      <h3>{ten}</h3>
      <p>{moTa}</p>
      {tags?.length > 0 && (
        <div className="proj-tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}
