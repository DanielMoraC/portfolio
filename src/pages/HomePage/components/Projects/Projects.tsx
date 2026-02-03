import { Link } from "react-router"
import "./Projects.scss"
import react from "/src/assets/react.svg"
import typescript from "/src/assets/typescript.svg"
import vite from "/src/assets/vite.svg"

export default function Projects() {

    return (
        <section className="projects md:w-[85%]">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">Proyectos</h2>

            <div className="container md:ml-4">

                <article className="card">
                    <div className="info">
                        <div className="flex">
                            <Link to={"https://lola-folie.netlify.app"} target="_blank">
                                <h4 className="md:text-3xl text-2xl mb-2">Lola Folie</h4>
                            </Link>
                        </div>
                        <div className="cardTools mb-2">
                            <img src={react} alt="React" />
                            <img src={typescript} alt="TypeScript" />
                            <img src={vite} alt="Vite" />
                        </div>
                        <p>Programador Front-End con <span className="text-sky-400 font-bold">React</span>&#44; <span className="text-violet-500 font-bold">Vite</span> y <span className="text-blue-500 font-bold">TypeScript</span>.</p>
                        <p>En este proyecto se creó una página web simple para que la autora Lola Folie pueda presentar sus libros publicados.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}