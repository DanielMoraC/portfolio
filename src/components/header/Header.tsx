import { Languages, Terminal } from "lucide-react";
import "./Header.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Hamburger from "hamburger-react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Header() {

    const { t } = useTranslation()
    const path = useLocation()
    const [toggledHambuerger, setToggledHamburger] = useState(false)
    const [toggledLang, setToggledLang] = useState(false)
    const [langSelected, setLangSelected] = useState(i18n.language)
    const [asideHeigth, setAsideHeigth] = useState(0)

    const setLang = (lang: string) => {
        setLangSelected(lang)
        i18n.changeLanguage(lang)
        setToggledLang(false)
    }

    const checkAsideHeight = () => {
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height
        setAsideHeigth(window.innerHeight - headerHeight! + 3)
    }

    useEffect(() => {
        setTimeout(() => {
            checkAsideHeight()
        }, 50);

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setToggledHamburger(false)
            } else if (window.innerWidth < 768) {
                setToggledLang(false)
            }

            checkAsideHeight()
        };


        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="md:justify-around justify-between">
            <div className="nameContainer md:ml-0 ml-5">
                <Terminal color="var(--color-h1)" />
                <span className="text-3xl font-bold text-(--color-h1) name">Daniel Mora</span>
            </div>

            <nav className="md:flex hidden">
                <Link key={'Inicio'} to={'/'} className="text-xl">
                    <span className={path.pathname == '/' || path.pathname == '' ? 'aSelected' : ''}>{t('Header.home')}</span>
                </Link>
                <Link to="/about-me" className="text-xl">
                    <span className={path.pathname == '/about-me' ? 'aSelected' : ''}>{t('Header.about')}</span>
                </Link>
            </nav>

            <div className="md:flex hidden gap-4 items-center flex-wrap">
                <ThemeSwitch />

                <div className="langButton">
                    <button className="tertiary" onClick={() => { setToggledLang(!toggledLang) }}>
                        <Languages />
                    </button>
                    <div className={toggledLang ? 'dropdown' : 'hidden'}>
                        <div className={langSelected == 'es' ? 'selected' : ''} onClick={() => setLang('es')}>Español</div>
                        <div className={langSelected == 'en' ? 'selected' : ''} onClick={() => setLang('en')}>English</div>
                    </div>
                    <div className={toggledLang ? 'maskLang' : 'hidden'} onClick={() => { setToggledLang(!toggledLang) }}></div>
                </div>
            </div>

            <div className='md:hidden flex mr-5 hamburger' onClick={() => setToggledHamburger(!toggledHambuerger)}>
                <Hamburger rounded toggled={toggledHambuerger} />
            </div>

            <div className={toggledHambuerger ? 'contents' : 'hidden'}>
                <div className="sidebar" style={{ height: asideHeigth + 'px' }}>
                    <div>
                        <ThemeSwitch />
                    </div>

                    <nav>
                        <Link key={'Inicio'} to={'/'} className="text-xl" onClick={() => setToggledHamburger(path.pathname == '/' || path.pathname == '')}>
                            <span className={path.pathname == '/' || path.pathname == '' ? 'aSelected' : ''}>{t('Header.home')}</span>
                        </Link>
                        <Link to="/about-me" className="text-xl" onClick={() => setToggledHamburger(path.pathname == '/about-me')}>
                            <span className={path.pathname == '/about-me' ? 'aSelected' : ''}>{t('Header.about')}</span>
                        </Link>
                    </nav>

                    <div className="langButton aside">
                        <button className="tertiary" onClick={() => { setToggledLang(!toggledLang) }}>
                            <Languages />
                        </button>
                        <div className={toggledLang ? 'dropdown' : 'hidden'}>
                            <div className={langSelected == 'es' ? 'selected' : ''} onClick={() => setLang('es')}>Español</div>
                            <div className={langSelected == 'en' ? 'selected' : ''} onClick={() => setLang('en')}>English</div>
                        </div>
                        <div className={toggledLang ? 'maskLang' : 'hidden'} onClick={() => { setToggledLang(!toggledLang) }}></div>
                    </div>
                </div>

                <div className='mask md:hidden' onClick={() => setToggledHamburger(false)}></div>
            </div>
        </header>
    )
}