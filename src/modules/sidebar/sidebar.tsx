import { Layout } from 'antd';

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  zIndex: 2,
  left: 0,
  top: 0,
  bottom: 0,
};

type TSidebarProps = {
  isSidebarCollapsed: boolean;
};

export const Sidebar = ({ isSidebarCollapsed }: TSidebarProps) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={isSidebarCollapsed} style={siderStyle}>
      Sidebar
    </Layout.Sider>
  );
};
