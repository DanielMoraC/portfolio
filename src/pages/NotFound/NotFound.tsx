import { MonitorOff } from "lucide-react"
import "./NotFound.scss"
import { Link } from "react-router"

export default function NotFound() {
    return (
        <main className="notFound">
            <MonitorOff className="pt-20 md:pt-[15%] mb-5" />
            <h1 className="text-3xl font-bold text-center">404 No se ha encontrado la página</h1>
            <div className="links">
                <Link to="/">
                    <span className="text-3xl">Inicio</span>
                </Link>
                {/* <Link to="/about-me">
                            <span className="text-3xl">Sobre mi</span>
                        </Link> */}
            </div>
        </main>
    )
}