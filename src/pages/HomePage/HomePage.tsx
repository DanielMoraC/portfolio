import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Tools from "./components/Tools/Tools"
import "./HomePage.scss"

export default function HomePage() {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Tools />
        </>
    )
}