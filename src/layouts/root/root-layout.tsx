import { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Content, Footer, Header, Settings, Sidebar } from '@/modules';

const layoutStyle = {
  minHeight: '100vh',
};

export const RootLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarCollapsed = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Layout style={layoutStyle}>
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      <Layout style={{ marginLeft: 260 }}>
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebarCollapsed={toggleSidebarCollapsed}
        />

        <Content>
          <Outlet />
        </Content>

        <Footer />
      </Layout>

      <Settings />
    </Layout>
  );
};
