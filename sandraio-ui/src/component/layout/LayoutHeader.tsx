// import React, { Children, ReactElement } from "react";
import '../../styles/base.css'
import '../../styles/cabecalho.css'
import Logo from '../../assets/logo.png'

// interface Props {
//     children: ReactElement
// }

// const Layout = (props: Props): ReactElement => {

// const botaoMenu = document.querySelector('.cabecalho__menu')
// const menu = document.querySelector('.menu-lateral')

// botaoMenu?.addEventListener('click', () => {
//     menu?.classList.toggle('menu-lateral--ativo')
// })

//   return (
//     <div style={{width: '100%'}}>
//       <header className="cabecalho">
//         <button className="cabecalho__menu" aria-label="Menu">
//           <img src="menu.png" alt="Ícone do Menu" />
//         </button>
//         <img
//           src="logo.png"
//           alt="Logo do Sandrário"
//           className="cabecalho__logo"
//         />
//         <p className="cabecalho__pag">Página de Início</p>
//       </header>
      
//       <nav className="menu-lateral">
//         <img
//           src="logo.png"
//           alt="Logo do Sandrário"
//           className="menu-lateral__logo"
//         />
//         <a
//           href="#"
//           className="menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo"
//         >
//           Início
//         </a>
//         <a href="#" className="menu-lateral__link menu-lateral__link--cadastro">
//           Cadastro
//         </a>
//         <a
//           href="#"
//           className="menu-lateral__link menu-lateral__link--agendamento"
//         >
//           Agendamento
//         </a>
//         <a href="#" className="menu-lateral__link menu-lateral__link--equipe">
//           Equipe
//         </a>
//       </nav>
      
//       <main className="principal">
//         {props.children}
//       </main>
          
//     </div>
//   );
// };

// export default Layout;

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

type ChildrenProps = {
  children?: ReactElement | React.ReactNode;
};

const LayoutHeader = (props: ChildrenProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={Logo} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: (
                <Link to="/">
                  <div className="icon-style">
                    <UserOutlined />
                  </div>
                </Link>
              ),
              label: 'Home',
            },
            {
              key: '2',
              icon: (
                <Link to="/cadastro">
                  <div className="icon-style">
                    <UserOutlined />
                  </div>
                </Link>
              ),
              label: 'Cadastro',
            },
            {
              key: '3',
              icon: (
                <Link to="/agendamento">
                  <div className="icon-style">
                    <UserOutlined />
                  </div>
                </Link>
              ),
              label: 'Agendamento',
            },
            {
              key: '4',
              icon: (
                <Link to="/equipe">
                  <div className="icon-style">
                    <UserOutlined />
                  </div>
                </Link>
              ),
              label: 'Equipe',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{display:'flex', justifyContent: 'space-between', alignItems:'center', color: "#ffff"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "0px",
            padding: 0,
            height: "auto",
          }}
        >
           {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutHeader;