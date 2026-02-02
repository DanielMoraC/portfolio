import { Moon, Sun } from "lucide-react";
import "./ThemeSwitch.scss"
import { useEffect, useState } from "react";

export default function ThemeSwitch() {

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

    return (
        <label className="themeSwitch">
            <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
            <span className="slider">
                {dark ? <Moon /> : <Sun />}
            </span>
        </label>
    )
}