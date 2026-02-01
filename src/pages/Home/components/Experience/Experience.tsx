// import { Link } from "react-router"
import { AppWindow } from "lucide-react"
import "./Experience.scss"
// import Button from "../../../../components/button/Button"

export default function Experience() {

    return (
        <section className="experience md:w-[85%]">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">Experiencia profesional</h2>

            <div className="container md:ml-4">
                <article className="card">
                    <div className="left mr-4">
                        <AppWindow className="mb-2 mt-1.5" />
                        <div className="line"></div>
                    </div>
                    <div className="info">
                        <h4 className="md:text-2xl text-xl mb-2">Indra - Minsait</h4>
                        <div className="cardTools mb-2">
                            <img src="/src/assets/angular.svg" alt="Angular" />
                            <img src="/src/assets/typescript.svg" alt="TypeScript" />
                            <img src="/src/assets/ionic.svg" alt="Ionic" />
                            <img src="/src/assets/primeng.svg" alt="PriimeNG" />
                        </div>
                        <p className="text-gray-400">Marzo 2024 - Ahora</p>
                        <p>Programador Front-End tanto en Web como en aplicaciones móvil con <span className="text-red-500 font-bold">Angular</span>&#44; <span className="text-blue-500 font-bold">Ionic</span> y <span className="text-blue-500 font-bold">TypeScript</span> en varias versiones distintas con la libreria <span className="text-red-500 font-bold">PrimeNG</span>.</p>
                        <p>Proyecto de Sermas, Transformación digital de la asistencia sanitaria para la Comunidad de Madrid &#40;España&#41;</p>
                    </div>
                </article>
            </div>
        </section>
    )
}