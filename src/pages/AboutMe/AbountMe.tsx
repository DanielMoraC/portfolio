import "./AboutMe.scss"
import foto from "/src/assets/foto.png"

export default function AboutMe() {

    return (
        <div className="aboutMe md:pt-[15%] md:mb-20 mb-10 pt-5">
            <main className="info text-lg">
                <img className="lg:flex hidden image" src={foto} alt="Foto Daniel Mora Casero" />
                <div>
                    <span>Hola, soy</span> <h1 className="text-xl font-bold text-(--color-h1) inline">Daniel Mora Casero</h1><span>.</span>
                    <br />
                    <br />
                    <h2 className="inline text-xl font-bold">Desarrollador Front-End</h2> <span>con <span className="text-orange-300">&#43;2</span> años de experiencia con <span className="text-red-500 font-bold">Angular</span>, usando Ionic para aplicaciones móvil y PrimeNG.</span>
                    <br />
                    <br />
                    <p>También tengo conocimientos de <span className="text-sky-400 font-bold">React</span> con Vite y conocimientos básicos de back-end con PHP y Symfony y bases de datos.</p>
                    <br />
                    <p>Actualmente estoy trabajando en Indra y creando proyectos personales.</p>
                    <br />
                    <p>Estoy residiendo en Valencia &#40;España&#41;. Soy técnico en <b>sistemas microinformáticos y redes</b> y técnico superior en <b>desarrollo de aplicaciones web</b>.</p>
                </div>
            </main>
        </div>
    )
}