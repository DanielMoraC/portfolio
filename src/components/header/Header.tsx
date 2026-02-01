import { Moon, Sun, Terminal } from "lucide-react";
import "./Header.scss";
import { useEffect, useState } from "react";

export default function Header() {

    const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? true : false;
            setDark(newColorScheme)
        });
    }, [])

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        } else {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [dark])

    return (<>
        <header>
            <div className="nameContainer">
                <Terminal color="var(--color-h1)" />
                <span className="text-3xl font-bold text-(--color-h1) name">Daniel Mora</span>

            </div>

            {/* <nav>
                <Link key={'Inicio'} to={'/'} className="text-xl">
                    <span>Inicio</span>
                </Link>
                <Link to="/about-me" className="text-xl">
                    <span>Sobre mi</span>
                </Link>
            </nav> */}

            <div className="theme">
                <label className="switch">
                    <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
                    <span className="slider">
                        {dark ? <Moon /> : <Sun />}
                    </span>
                </label>
            </div>

            {/* TODO: Añadir botón para el sidebar cuando está en modo móvil */}
        </header>
    </>)
}