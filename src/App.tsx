import React from "react";
import { ConfigProvider, Layout, Space, Typography } from "antd";
import Routing from "./Routing";
import HeaderMenu from "./modules/header";
const { Content, Header, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#B3E5FC",
        colorBgLayout: "#ffffff",
        borderRadius: 4,
        fontSize: 18,
        fontFamily:
          "'Lora', 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      },
      components: {
        Typography: {
          fontSizeHeading1: 24,
          fontSizeHeading2: 20,
          fontSizeHeading3: 18,
          fontSize: 18,
        },
        Layout: {
          headerBg: "#ffffff",
          headerPadding: 0,
          footerPadding: "50px 0px 50px 0px",
        },
        Menu: {
          itemBorderRadius: 4,
          subMenuItemBorderRadius: 4,
          horizontalItemBorderRadius: 4,
          itemHeight: 48,
          itemMarginInline: 12,
          itemHoverColor: '#E3F2FD',
          itemSelectedColor: '#2196F3',
          itemSelectedBg: '#E3F2FD',
        },
      },
    }}
  >
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout style={{ width: "50%", padding: "1%", margin: "0 auto" }}>
        <Header>
          <HeaderMenu></HeaderMenu>
        </Header>
        <Routing></Routing>
        <Footer style={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>© 2025 Weibing Wang</Text>
          <br />
        </Footer>
      </Layout>
    </Space>
  </ConfigProvider>
);

export default App;
