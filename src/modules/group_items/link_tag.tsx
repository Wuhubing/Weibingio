import React from "react";
import { Typography, Tag } from "antd";
const { Text } = Typography;

interface LinkTagProps {
  icon: React.ReactNode;
  link: string;
  text: string;
}

const LinkTag: React.FC<LinkTagProps> = (props: LinkTagProps) => {
  if (!props.link) return null;
  else {
    return (
      <div>
        <Tag.CheckableTag checked={false}>
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            <Text>
              {props.icon} {props.text}
            </Text>
          </a>
        </Tag.CheckableTag>
      </div>
    );
  }
};

export default LinkTag;
