import Chip from "../Chip/Chip"
import "./Tools.scss"

export default function Tools() {

    return (
        <section className="tools md:w-[85%]">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">Técnologías</h2>
            <div className="container">

                <div className="type flex w-full">
                    <h3 className="md:text-2xl text-xl mb-3">Front-end</h3>
                    <div className="chipContainer">
                        <Chip svg="/src/assets/angular.svg" border="border-red-500" background="to-red-500" text="Angular" />
                        <Chip svg="/src/assets/react.svg" border="border-sky-400" background="to-sky-400" text="React" />
                        <Chip svg="/src/assets/primeng.svg" border="border-red-500" background="to-red-500" text="PrimeNG" />
                        <Chip svg="/src/assets/vite.svg" border="border-violet-500" background="to-violet-500" text="Vite" />
                        <Chip svg="/src/assets/typescript.svg" border="border-blue-500" background="to-blue-500" text="TypeScript" />
                        <Chip svg="/src/assets/js.svg" border="border-yellow-300" background="to-yellow-300" text="JavaScript" />
                        <Chip svg="/src/assets/ionic.svg" border="border-blue-500" background="to-blue-500" text="Ionic" />
                        <Chip svg="/src/assets/html.svg" border="border-orange-500" background="to-orange-500" text="HTML" />
                        <Chip svg="/src/assets/css.svg" border="border-sky-400" background="to-sky-400" text="CSS" />
                        <Chip svg="/src/assets/scss.svg" border="border-red-400" background="to-red-400" text="SCSS" />
                        <Chip svg="/src/assets/tailwind.svg" border="border-sky-300" background="to-sky-300" text="Tailwind" />
                    </div>
                </div>

                <div className="type flex flex-1">
                    <h3 className="md:text-2xl text-xl mb-3">Herramientas</h3>
                    <div className="chipContainer">
                        <Chip svg="/src/assets/vscode.svg" border="border-blue-500" background="to-blue-500" text="VS Code" />
                        <Chip svg="/src/assets/jetbrains.svg" border="border-violet-500" background="to-violet-500" text="JetBrains" />
                        <Chip svg="/src/assets/git.svg" border="border-orange-500" background="to-orange-500" text="Git" />
                        <Chip svg="/src/assets/github.svg" border="border-violet-500" background="to-violet-500" text="GitHub" />
                        <Chip svg="/src/assets/gitlab.svg" border="border-orange-500" background="to-orange-500" text="GitLab" />
                        <Chip svg="/src/assets/svn.svg" border="border-sky-400" background="to-sky-400" text="SVN" />
                        <Chip svg="/src/assets/kanban.svg" border="border-blue-500" background="to-blue-500" text="Kanban" />
                        <Chip svg="/src/assets/notion.svg" border="border-white" background="to-[#ffffff94]" text="Notion" />
                        <Chip svg="/src/assets/linux.svg" border="border-yellow-400" background="to-yellow-400" text="Linux" />
                    </div>
                </div>

                <div className="type flex flex-1">
                    <h3 className="md:text-2xl text-xl mb-3">Conocimientos básicos</h3>
                    <div className="chipContainer">
                        <Chip svg="/src/assets/php.svg" border="border-blue-300" background="to-blue-300" text="PHP" />
                        <Chip svg="/src/assets/symfony.svg" border="border-white" background="to-[#ffffff94]" text="Symfony" />
                        <Chip svg="/src/assets/docker.svg" border="border-blue-500" background="to-blue-500" text="Docker" />
                        <Chip svg="/src/assets/sql.svg" border="border-sky-400" background="to-sky-400" text="SQL" />
                        <Chip svg="/src/assets/mysql.svg" border="border-blue-300" background="to-blue-300" text="MySQL" />
                        <Chip svg="/src/assets/mariadb.svg" border="border-blue-500" background="to-blue-500" text="MariaDB" />
                    </div>
                </div>

            </div>
        </section>
    )
}