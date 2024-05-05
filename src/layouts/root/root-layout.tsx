import { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Content, Footer, Header, Settings, Sidebar, Wrapper } from '@/modules';

export const RootLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Layout>
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      <Wrapper $ml={isSidebarCollapsed ? '80px' : '200px'}>
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebarCollapse={toggleSidebarCollapse}
        />

        <Content>
          <Outlet />
        </Content>

        <Footer />
      </Wrapper>

      <Settings />
    </Layout>
  );
};
