
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJsBadge,
    DiReact,
    DiMongodb,
    DiNodejsSmall,
    DiGit,
    DiBootstrap

} from 'react-icons/di'

import { SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si'

import '../../styles/components/tecnologies.sass'

export const Tecnologies = () => {


    type technologiesType = {

        id: string
        name: string
        legend: string
        icon: JSX.Element
    }

    const technologies: technologiesType[] = [

        { id: "html", name: "HTML5", icon: <DiHtml5 />, legend: "Estrutura moderna e eficiente para a web." },

        { id: "css", name: "CSS3", icon: <DiCss3 />, legend: "Estilos avançado e de forma elegante." },

        { id: "js", name: "JavaScript", icon: <DiJsBadge />, legend: "Habilita a Interatividade poderosa com JavaScript." },

        { id: "git", name: "Git & GitHub", icon: <DiGit />, legend: "Controle de versão e colaboração ágil." },

        { id: "ts", name: "TypeScript", icon: <SiTypescript />, legend: "JavaScript com segurança e tipagem." },

        { id: "node", name: "Node.JS", icon: <DiNodejsSmall />, legend: "Runtime built on Chrome's V8 JavaScript engine." },

        { id: "mysql", name: "MySQL", icon: <SiMysql />, legend: "Gerenciamento de banco de dados" },

        { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, legend: "Banco orientado a documentos livre" },
        
        { id: "react", name: "React.JS", icon: <DiReact />, legend: "Construa interfaces dinâmicas e reativas." },

        { id: "tailwind", name: "TailwindCSS", icon: <SiTailwindcss />, legend: "Componentes customizáveis e eficientes." },

        { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, legend: "Desenvolvimento responsivo facilitado." },

        { id: "sass", name: "Sass", icon: <DiSass />, legend: "Estilos com poder e modularidade." },

    ]


    return (
        <section className="technologies">

            <h2>Tecnologias</h2>

            <div className="technologies-grid">

                {technologies.map((tech: technologiesType) => (

                    <div className='technology-card' id={tech.id} key={tech.id}>

                        {tech.icon}

                        <div className='info'>
                            <h3>{tech.name}</h3>
                            <p> {tech.legend} </p>
                        </div>
                    </div>

                ))}

            </div>

        </section>
    );
}
