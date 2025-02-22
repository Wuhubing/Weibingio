import React, { useState } from "react";
import { Space, Typography, Tag, Button, Dropdown } from "antd";
import { FilterOutlined } from "@ant-design/icons";
const { Text } = Typography;

interface PubListSpec {
  itemList: JSX.Element[]
}

const PubList: React.FC<PubListSpec> = (props) => {
  const tagsData: string[] = [];
  props.itemList.forEach((pub) => {
    if (!tagsData.includes(pub.props.venueType)) {
      tagsData.push(pub.props.venueType);
    }
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedPub, setDisplayedPub] = useState<JSX.Element[]>(props.itemList);
    
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
    if (nextSelectedTags.length === 0) {
      setDisplayedPub(props.itemList);
    } else {
      let filteredPub: JSX.Element[] = []
      props.itemList.forEach((pub) => {
        if (nextSelectedTags.includes(pub.props.venueType)) {
          filteredPub.push(pub);
        }
      })
      setDisplayedPub(filteredPub);
    }
  };

  const filterMenu = (
    <div style={{ padding: '8px', backgroundColor: 'white', borderRadius: '6px' }}>
      <Text strong style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
        Filter by Type
      </Text>
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            <Text>{tag}</Text>
          </Tag.CheckableTag>
        ))}
      </Space>
    </div>
  );

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        {displayedPub}
      </Space>
    </div>
  );
};

export default PubList;
