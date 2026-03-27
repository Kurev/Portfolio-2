import ContactSection from "./Components/ContactSection"
import EducationSection from "./Components/EducationSection"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"
import ProjectsSection from "./Components/ProjectionSection"
import SkillsSection from "./Components/SkillSection"


function App() {
  

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
