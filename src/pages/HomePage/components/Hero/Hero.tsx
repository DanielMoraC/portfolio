import { Link } from "react-router";
import "./Hero.scss";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Button from "../../../../components/button/Button";
import foto from "/src/assets/foto.png"
import linkedin from "/src/assets/linkedin.svg"
import downloadDark from "/src/assets/download-dark.svg"
import downloadLight from "/src/assets/download-light.svg"
import copyDark from "/src/assets/copy-dark.svg"
import copyLight from "/src/assets/copy-light.svg"

export default function Hero() {

    const [colorScheme, setColorScheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            setColorScheme(newColorScheme)
        });
    }, [])

    const copyEmail = () => {
        const tooltip = document.querySelector('.tooltip')
        tooltip?.classList.remove('invisible')

        event?.preventDefault()

        navigator.clipboard.writeText('dmora.programador@gmail.com');

        setTimeout(() => {
            tooltip!.classList.add('invisible')
        }, 1000)
    }

    return (
        <div className="hero md:pt-[15%] md:mb-20 mb-10 pt-5">
            <div className="lg:flex hidden image">
                <img src={foto} alt="Foto Daniel Mora Casero" />
            </div>

            <main className="info">
                <div className="intro">
                    <span className="md:text-xl">Hola, soy</span>
                    <h1 className="md:text-6xl text-4xl font-bold text-(--color-h1)">Daniel Mora Casero</h1>
                    <h2 className="md:text-3xl text-xl">Desarrollador Front-End</h2>
                </div>

                <div className="description">
                    <p><span className="text-orange-300">&#43;2</span> años de experiencia con <span className="text-red-500 font-bold">Angular</span> y <span className="text-sky-400 font-bold">React</span>. Técnico de Sistemas y Desarrollo Web. Conocimientos de base de datos y Back-End con PHP y Symfony básicos.</p>
                </div>

                <div className="links">
                    <Link to={"https://es.linkedin.com/in/daniel-mora-casero-6a2007172"} target="_blank">
                        <Button
                            handleClick={undefined}
                            text="LinkedIn"
                            type="tertiary"
                            image={linkedin} />
                    </Link>

                    <Link to={"/CV_Daniel_Mora.pdf"} target="_blank">
                        <Button
                            handleClick={undefined}
                            text="CV"
                            type="tertiary"
                            image={colorScheme == 'dark' ? downloadDark : downloadLight} />
                    </Link>

                    <div data-tooltip-id="copy">
                        <Button
                            handleClick={copyEmail}
                            text="dmora.programador@gmail.com"
                            type="tertiary"
                            image={colorScheme == 'dark' ? copyDark : copyLight} />
                    </div>

                    <Tooltip
                        id="copy"
                        content="Correo copiado"
                        delayHide={100}
                        openOnClick
                        place="bottom"
                        className="tooltip"
                        border="1px solid var(--button-tertiary-color-border-active)" />
                </div>
            </main>
        </div>
    )
}