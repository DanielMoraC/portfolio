import { Terminal } from "lucide-react";
import "./Header.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import Hamburger from "hamburger-react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

export default function Header() {

    const path = useLocation()
    const [toggledHambuerger, setToggledHamburger] = useState(false)

    return (<>
        <header className="md:justify-around justify-between">
            <div className="nameContainer md:ml-0 ml-5">
                <Terminal color="var(--color-h1)" />
                <span className="text-3xl font-bold text-(--color-h1) name">Daniel Mora</span>

            </div>

            <nav className="md:flex hidden">
                <Link key={'Inicio'} to={'/'} className="text-xl">
                    <span className={path.pathname == '/' || path.pathname == '' ? 'aSelected' : ''}>Inicio</span>
                </Link>
                <Link to="/about-me" className="text-xl">
                    <span className={path.pathname == '/about-me' ? 'aSelected' : ''}>Sobre mi</span>
                </Link>
            </nav>

            <div className="md:flex hidden">
                <ThemeSwitch />
            </div>

            <div className='md:hidden flex mr-5 hamburger'>
                <Hamburger rounded toggled={toggledHambuerger} toggle={setToggledHamburger} />
            </div>

            <div className={toggledHambuerger ? 'contents' : 'hidden'}>
                <div className="sidebar">
                    <div>
                        <ThemeSwitch />
                    </div>

                    <nav>
                        <Link key={'Inicio'} to={'/'} className="text-xl" onClick={() => setToggledHamburger(path.pathname == '/' || path.pathname == '')}>
                            <span className={path.pathname == '/' || path.pathname == '' ? 'aSelected' : ''}>Inicio</span>
                        </Link>
                        <Link to="/about-me" className="text-xl" onClick={() => setToggledHamburger(path.pathname == '/about-me')}>
                            <span className={path.pathname == '/about-me' ? 'aSelected' : ''}>Sobre mi</span>
                        </Link>
                    </nav>
                </div>

                <div className='mask md:hidden' onClick={() => setToggledHamburger(false)}></div>
            </div>
        </header>
    </>)
}