import React from "react";
import { Layout, Divider, Typography } from "antd";
import PrecenseOnWeb from "../drafts/web_presence";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Misc: React.FC = () => (
  <Content id="Misc">
    <Title level={4}>Presence on the web</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PrecenseOnWeb></PrecenseOnWeb>
  </Content>
);

const MiscInDom = (
  <div>
    <Misc />
  </div>
);

export default Misc;
