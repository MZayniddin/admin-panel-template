import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Content, Footer, Header, Sidebar } from '@/modules';

const layoutStyle = {
  minHeight: '100vh',
};

export const RootLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Sidebar />

      <Layout>
        <Header />

        <Content>
          <Outlet />
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};
