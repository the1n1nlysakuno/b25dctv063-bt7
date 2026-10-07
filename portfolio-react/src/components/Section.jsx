export default function Section({ title, children }) {
  return (
    <section>
      <div className="wrap">
        {/* Hiển thị tiêu đề nếu có truyền vào */}
        {title && <h2>{title}</h2>}
        
        {/* Render các component con nằm bên trong thẻ Section */}
        {children}
      </div>
    </section>
  )
}