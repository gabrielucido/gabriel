import React from "react"

import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";

import '../styles/app.scss';

import ieducar_desktop from "../assets/ieducar_desktop.png"
import mamd_mobile from "../assets/mamd_mobile.png"
import pcd_mobile from "../assets/pcd_mobile.png"
import startup_life from "../assets/startup_life.svg"

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <main id="main" className="color-gray-400 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-xl-6 flex flex-col justify-center">
              <h1 className="color-white col-12 col-xl-12">Olá Mundo!</h1>
              <p className="color-gray-200 col-12 col-xl-12">Me chamo <strong className="fw-bold">Gabriel Rodrigues</strong>, seja bem-vindo! Aqui vou te mostrar um poquinho da minha historia como Desenvolvedor. <a className="fw-bold" href="#contact">Informações de Contato</a> a disposição abaixo, sinta-se a vontade!</p>
            </div>
            <div className="col-6 col-xl-6">
              <img className="img-fluid p-5" src={startup_life} alt="Homem andando" />
            </div>
          </div>
        </div>
      </main>
      <section id="projects" className="bg-gray-200 color-gray-500 py-5">
        <div className="container">
          <h2 className="color-gray-900 fw-bold mb-1">Projetos</h2>
          <p>Estes são alguns projetos que realizei integralmente ou tive grande participação no desenvolvimento. Em cada um está descrito de forma superficial qual a minha contribuição para o projeto. Entre em contato para <a className="color-blue-gradient" target="_blank" rel="noreferrer" href="mailto:gabriel.rodrigues.0501@gmail.com">saber mais</a> sobre cada projeto e minha participação <span className="color-gray-700 fw-bold">=)</span></p>

          <p className="my-2">Estes são apenas os projetos públicos portante não incluem projetos desenvolvidos na  <a className="color-blue-gradient fw-bold" target="_blank" rel="noreferrer" href="https://ssys.com.br">SSYS</a> onde trabalho atualmente desde Junho de 2019 como Desenvolvedor Web front-end tendo participado de múltiplos projetos e estando atualmente no time de <span className="fw-bold">Developer Experience</span> desde abril de 2021.</p>
        </div>
        <ProjectItem image={ieducar_desktop}
                     label="i-Educar"
                     text={`Durante minha formação, participei do projeto "Ações de apoio à inclusão digital e desenvolvimento de soluções interativas". Minha atuação, juntamente a outros dois participantes, durante os dois anos foi no Website do Software Livre de gestão escolar i-Educar, que contem a documentação e expõe informações relevantes como funcionalidades, forum, blog, entre outras. Foram utilizados principalmente React, Docusaurus e Markdown no projeto. Periodicamente recebiamos os designs em Zeplin e utilizamos esse material para desenvolver as telas e esse era majoritáriamente o fluxo de trabalho atividades relizadas).`}
                     external_url="https://ieducar.org" />
        <ProjectItem image={pcd_mobile}
                     label="Paz Church Dourados Website"
                     text="Paz Church Dourados  Website foi um projeto desenvolvido integralmente por mim incluindo, front-end, back-end, esteiras CI/CD. No projeto foi utilizado Docker, Django, Nginx + Gunicorn em produção, Bootstrap, Integração com Google Maps e também foi implementado esteiras de CI/CD utilizando Runners do Gitlab."
                     external_url="https://pazchurchddos.com.br"
                     inverted={true} />
        <ProjectItem image={mamd_mobile}
                     label="Mais Amor Menos Dor(Em Breve)"
                     text="Mais Amor Menos Dor é um Blog ainda em desenvolvimento para uma empreendedora local. O projeto atualmente está com um modulo administrativo(Dashboard) em desenvolvimento. A definição de Cores, criação da logo e programação está sendo feita desde o início por mim. O projeto utiliza Docker, Django + Django REST, NGINX + Gunicorn em produção, Bootstrap como framework css, e também foram implementadas rotinas de backup automáticos do Postgres, esteiras de CI/CD com Gitlab Runners um ambiente adicional de Stag."
                     external_url="https://maisamormenosdor.com.br" />
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
