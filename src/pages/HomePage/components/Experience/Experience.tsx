import { AppWindow } from "lucide-react"
import "./Experience.scss"
import angular from "/src/assets/angular.svg"
import typescript from "/src/assets/typescript.svg"
import ionic from "/src/assets/ionic.svg"
import primeng from "/src/assets/primeng.svg"
import { useTranslation } from "react-i18next"

export default function Experience() {

    const { t } = useTranslation()

    return (
        <section className="experience md:w-[85%]">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">{t('Experience.title')}</h2>

            <div className="container md:ml-4">
                <article className="card">
                    <div className="left mr-4">
                        <AppWindow className="mb-2 mt-1.5" />
                        <div className="line"></div>
                    </div>
                    <div className="info">
                        <h4 className="md:text-2xl text-xl mb-2">Indra - Minsait</h4>
                        <div className="cardTools mb-2">
                            <img src={angular} alt="Angular" />
                            <img src={typescript} alt="TypeScript" />
                            <img src={ionic} alt="Ionic" />
                            <img src={primeng} alt="PriimeNG" />
                        </div>
                        <p className="text-gray-400">{t('Generic.march')} 2024 - {t('Generic.now')}</p>
                        <p>{t('Experience.INDRA.text1')}<span className="text-red-500 font-bold">Angular</span>&#44; <span className="text-blue-500 font-bold">Ionic</span> {t('Generic.and')} <span className="text-blue-500 font-bold">TypeScript</span>{t('Experience.INDRA.text2')}<span className="text-red-500 font-bold">PrimeNG</span>.</p>
                        <p>{t('Experience.INDRA.text3')}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}