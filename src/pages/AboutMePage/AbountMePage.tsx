import { useTranslation } from "react-i18next"
import "./AboutMePage.scss"
import foto from "/src/assets/foto.png"

export default function AboutMePage() {

    const { t } = useTranslation()

    return (
        <div className="aboutMe md:pt-[15%] md:mb-20 mb-10 pt-5">
            <main className="info text-lg">
                <img className="lg:flex hidden image" src={foto} alt="Foto Daniel Mora Casero" />
                <div>
                    <span>{t('AboutMe.hello')}</span> <h1 className="text-xl font-bold text-(--color-h1) inline">Daniel Mora Casero</h1><span>.</span>
                    <br />
                    <br />
                    <h2 className="inline text-xl font-bold">{t('AboutMe.subtitle')}</h2> <span>{t('Generic.with')}<span className="text-orange-300"> &#43;2</span>{t('AboutMe.yearsExperience')}<span className="text-red-500 font-bold">Angular</span>{t('AboutMe.experienceTools')}</span>
                    <br />
                    <br />
                    <p>{t('AboutMe.knowledgeOf1')}<span className="text-sky-400 font-bold">React</span>{t('AboutMe.knowledgeOf2')}</p>
                    <br />
                    <p>{t('AboutMe.working')}</p>
                    <br />
                    <p>{t('AboutMe.residence')}{t('AboutMe.tecnic')}<b>{t('AboutMe.microinformatic')}</b>{t('AboutMe.superior')}<b>{t('AboutMe.webDevelopment')}</b>.</p>
                </div>
            </main>
        </div>
    )
}