import React, { Children, ReactElement } from "react";
import '../../styles/base.css'
import '../../styles/cabecalho.css'


interface Props {
    children: ReactElement
}

const Layout = (props: Props): ReactElement => {

const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu?.addEventListener('click', () => {
    menu?.classList.toggle('menu-lateral--ativo')
})

  return (
    <div style={{width: '100%'}}>
      <header className="cabecalho">
        <button className="cabecalho__menu" aria-label="Menu">
          <img src="menu.png" alt="Ícone do Menu" />
        </button>
        <img
          src="logo.png"
          alt="Logo do Sandrário"
          className="cabecalho__logo"
        />
        <p className="cabecalho__pag">Página de Início</p>
      </header>
      
      <nav className="menu-lateral">
        <img
          src="logo.png"
          alt="Logo do Sandrário"
          className="menu-lateral__logo"
        />
        <a
          href="#"
          className="menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo"
        >
          Início
        </a>
        <a href="#" className="menu-lateral__link menu-lateral__link--cadastro">
          Cadastro
        </a>
        <a
          href="#"
          className="menu-lateral__link menu-lateral__link--agendamento"
        >
          Agendamento
        </a>
        <a href="#" className="menu-lateral__link menu-lateral__link--equipe">
          Equipe
        </a>
      </nav>
      
      <main className="principal">
        {props.children}
      </main>
          
    </div>
  );
};

export default Layout;
