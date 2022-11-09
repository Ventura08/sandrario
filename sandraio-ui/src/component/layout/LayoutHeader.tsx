// import React, { Children, ReactElement } from "react";
import '../../styles/base.css'
import Logo from '../../assets/logo.png'
import Inicio from '../../assets/inicio.png'
import Agendamento from '../../assets/agendamento.png'
import Cadastro from '../../assets/cadastro.png'
import Equipe from '../../assets/equipe.png'
import MenuIcon from '../../assets/menu.png'
import CloseIcon from '../../assets/close.png'

import {
  MenuOutlined,
  CloseOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const { Header, Sider, Content } = Layout;

type ChildrenProps = {
  children?: ReactElement | React.ReactNode;
};


const LayoutHeader = (props: ChildrenProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState<number>();
  const [sideNavStyle, setSideNavStyle] = useState<CSSProperties>();

  const isNormalScreen = useMediaQuery({ minWidth: 1100 });
  const isSmallScreen = useMediaQuery({ minWidth: 691 });
  const isMobile = useMediaQuery({ minWidth: 690 });

  const customNavStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "10",
    height: "100vh",
  };

  const handleCollaps = () => {
    if (!isNormalScreen) {
      return isSmallScreen
        ? (setCollapsedWidth(80), setCollapsed(true), setSideNavStyle({}))
        : isMobile &&
            (setCollapsedWidth(0),
            setCollapsed(true),
            setSideNavStyle(customNavStyle));
    } else {
      setCollapsed(false);
      setSideNavStyle({});
    }
  };

  useEffect(() => {
    handleCollaps();
  }, [isNormalScreen, isSmallScreen, isMobile]);

  return (
    <Layout className='h-full' >
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="logo">
          <img src={Logo} />
        </div>
        <Menu
          mode="inline"
          className='h-full'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: (
                <Link to="/">
                  <div className="icon-style">
                    <img src={Inicio} />
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
                    <img src={Cadastro} />
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
                    <img src={Agendamento} />
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
                    <img src={Equipe} />
                  </div>
                </Link>
              ),
              label: 'Equipe',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: "#ffff" }}>
          {React.createElement(collapsed ? CloseOutlined : MenuOutlined, {
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
          <div className='w-full h-auto flex justify-center'>
          {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutHeader;

