import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Tools from "./components/Tools/Tools"
import "./Home.scss"

export default function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Tools />
        </>
    )
}