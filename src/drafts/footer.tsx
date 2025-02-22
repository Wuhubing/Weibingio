import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
const { Footer } = Layout;
const { Text, Link } = Typography;

const PageFooter: React.FC = () => {
  return (
    <Footer style={{ 
      textAlign: 'center',
      background: '#ffffff',
      padding: '24px 0',
      marginTop: '40px'
    }}>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        <Col>
          
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ marginTop: '16px' }}>
        <Col>
          <a href="https://info.flagcounter.com/nvIh">
            <img 
              src="https://s01.flagcounter.com/map/nvIh/size_s/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/" 
              alt="Flag Counter" 
              style={{ border: 0, maxWidth: '100%', height: 'auto' }} 
            />
          </a>
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ marginTop: '8px' }}>
        <Col>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>
        </Col>
      </Row>
      <Text style={{ fontSize: '14px' }}>
            © 2025 Weibing Wang. Built with React & Ant Design.
          </Text>
    </Footer>
  );
};

export default PageFooter; 