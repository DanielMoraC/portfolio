import Chip from "../Chip/Chip"
import "./Tools.scss"
import angular from "/src/assets/angular.svg"
import react from "/src/assets/react.svg"
import primeng from "/src/assets/primeng.svg"
import vite from "/src/assets/vite.svg"
import typescript from "/src/assets/typescript.svg"
import js from "/src/assets/js.svg"
import ionic from "/src/assets/ionic.svg"
import html from "/src/assets/html.svg"
import css from "/src/assets/css.svg"
import scss from "/src/assets/scss.svg"
import tailwind from "/src/assets/tailwind.svg"
import vscode from "/src/assets/vscode.svg"
import jetbrains from "/src/assets/jetbrains.svg"
import git from "/src/assets/git.svg"
import github from "/src/assets/github.svg"
import gitlab from "/src/assets/gitlab.svg"
import svn from "/src/assets/svn.svg"
import kanban from "/src/assets/kanban.svg"
import notion from "/src/assets/notion.svg"
import linux from "/src/assets/linux.svg"
import php from "/src/assets/php.svg"
import symfony from "/src/assets/symfony.svg"
import docker from "/src/assets/docker.svg"
import sql from "/src/assets/sql.svg"
import mysql from "/src/assets/mysql.svg"
import mariadb from "/src/assets/mariadb.svg"
import { useTranslation } from "react-i18next"

export default function Tools() {

    const { t } = useTranslation()

    return (
        <section className="tools md:w-[85%]">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">{t('Tools.title')}</h2>
            <div className="container">

                <div className="type flex w-full">
                    <h3 className="md:text-2xl text-xl mb-3">{t('Tools.front')}</h3>
                    <div className="chipContainer">
                        <Chip svg={angular} border="border-red-500" background="to-red-500" text="Angular" />
                        <Chip svg={react} border="border-sky-400" background="to-sky-400" text="React" />
                        <Chip svg={primeng} border="border-red-500" background="to-red-500" text="PrimeNG" />
                        <Chip svg={vite} border="border-violet-500" background="to-violet-500" text="Vite" />
                        <Chip svg={typescript} border="border-blue-500" background="to-blue-500" text="TypeScript" />
                        <Chip svg={js} border="border-yellow-300" background="to-yellow-300" text="JavaScript" />
                        <Chip svg={ionic} border="border-blue-500" background="to-blue-500" text="Ionic" />
                        <Chip svg={html} border="border-orange-500" background="to-orange-500" text="HTML" />
                        <Chip svg={css} border="border-sky-400" background="to-sky-400" text="CSS" />
                        <Chip svg={scss} border="border-red-400" background="to-red-400" text="SCSS" />
                        <Chip svg={tailwind} border="border-sky-300" background="to-sky-300" text="Tailwind" />
                    </div>
                </div>

                <div className="type flex flex-1">
                    <h3 className="md:text-2xl text-xl mb-3">{t('Tools.tools')}</h3>
                    <div className="chipContainer">
                        <Chip svg={vscode} border="border-blue-500" background="to-blue-500" text="VS Code" />
                        <Chip svg={jetbrains} border="border-violet-500" background="to-violet-500" text="JetBrains" />
                        <Chip svg={git} border="border-orange-500" background="to-orange-500" text="Git" />
                        <Chip svg={github} border="border-violet-500" background="to-violet-500" text="GitHub" />
                        <Chip svg={gitlab} border="border-orange-500" background="to-orange-500" text="GitLab" />
                        <Chip svg={svn} border="border-sky-400" background="to-sky-400" text="SVN" />
                        <Chip svg={kanban} border="border-blue-500" background="to-blue-500" text="Kanban" />
                        <Chip svg={notion} border="border-white" background="to-[#ffffff94]" text="Notion" />
                        <Chip svg={linux} border="border-yellow-400" background="to-yellow-400" text="Linux" />
                    </div>
                </div>

                <div className="type flex flex-1">
                    <h3 className="md:text-2xl text-xl mb-3">{t('Tools.basic')}</h3>
                    <div className="chipContainer">
                        <Chip svg={php} border="border-blue-300" background="to-blue-300" text="PHP" />
                        <Chip svg={symfony} border="border-white" background="to-[#ffffff94]" text="Symfony" />
                        <Chip svg={docker} border="border-blue-500" background="to-blue-500" text="Docker" />
                        <Chip svg={sql} border="border-sky-400" background="to-sky-400" text="SQL" />
                        <Chip svg={mysql} border="border-blue-300" background="to-blue-300" text="MySQL" />
                        <Chip svg={mariadb} border="border-blue-500" background="to-blue-500" text="MariaDB" />
                    </div>
                </div>

            </div>
        </section>
    )
}