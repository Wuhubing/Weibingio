import React, { useState } from "react";
import { Layout, Divider, Space, Typography, Row, Col, Button, Dropdown, Tag } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import PublicationDisplayList from "../drafts/publications";
import NewsDisplayList from "../drafts/updates";
import PersonalIntrouction from "../drafts/introduction";
import EducationList from "../drafts/education";
import ExperienceList from "../drafts/experience";
const { Paragraph, Text, Title } = Typography;
const { Content } = Layout;  // 只导入需要的组件

const Homepage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filterMenu = (
    <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '6px' }}>
      <Text strong style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
        Filter by Type
      </Text>
      <Space size={[0, 8]} wrap>
        {["Conference", "Journal", "Workshop", "arXiv"].map((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => setSelectedTags(
              checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
            )}
          >
            {tag}
          </Tag.CheckableTag>
        ))}
      </Space>
    </div>
  );

  return (
    <Content id="About">
      {/* <HeaderAnchor></HeaderAnchor> */}
      <br />
      <PersonalIntrouction></PersonalIntrouction>
      <Title level={4} id="Education">
        Education
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <EducationList></EducationList>
      
      <Title level={4} id="Experience">
        Experience
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <ExperienceList></ExperienceList>
      
      <Title level={4} id="Updates">
        Updates
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <NewsDisplayList></NewsDisplayList>
      <div id="Publications" style={{ marginBottom: '16px' }}>
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={4} style={{ margin: 0 }}>Publications</Title>
          </Col>
          <Col>
            <Dropdown overlay={filterMenu} trigger={['click']} placement="bottomRight">
              <Button icon={<FilterOutlined />}>
                Filter
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Divider style={{ margin: "12px 0" }} />
        <PublicationDisplayList selectedTags={selectedTags}></PublicationDisplayList>
      </div>
    </Content>
  );
};

export default Homepage;
