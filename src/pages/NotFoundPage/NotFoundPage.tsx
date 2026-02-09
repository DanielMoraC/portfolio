import { MonitorOff } from "lucide-react"
import "./NotFoundPage.scss"
import { Link } from "react-router"
import { useTranslation } from "react-i18next"

export default function NotFoundPage() {

    const { t } = useTranslation()

    return (
        <main className="notFound">
            <MonitorOff className="pt-20 md:pt-[15%] mb-5" />
            <h1 className="text-3xl font-bold text-center">{t('404Title')}</h1>
            <div className="links mt-10">
                <Link to="/">
                    <span className="text-3xl">{t('Header.home')}</span>
                </Link>
                <Link to="/about-me">
                    <span className="text-3xl">{t('Header.about')}</span>
                </Link>
            </div>
        </main>
    )
}