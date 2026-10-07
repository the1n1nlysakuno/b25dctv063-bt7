import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Section from './components/Section' // Thêm component Section

export default function App() {
  // Tạo mảng dữ liệu (Tiêu chí 2)
  const danhSachKyNang = [
    { ten: "React", mucDo: 80 },
    { ten: "JavaScript", mucDo: 90 }
  ];

  const danhSachDuAn = [
    { ten: "Web CV", moTa: "Trang CV cá nhân" },
    { ten: "Calculator", moTa: "Máy tính ảo" }
  ];

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        
        {/* Sử dụng component Section dùng children (Tiêu chí 3) */}
        <Section title="Về tôi">
          <About />
        </Section>

        <Section title="Kỹ năng">
          {/* Truyền mảng dữ liệu qua props (Tiêu chí 2) */}
          <Skills data={danhSachKyNang} />
        </Section>

        <Section title="Dự án">
          {/* Truyền mảng dữ liệu qua props (Tiêu chí 2) */}
          <Projects data={danhSachDuAn} />
        </Section>

        <Section title="Liên hệ">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  )
}