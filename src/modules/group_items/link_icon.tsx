import React from "react";
import { Typography, Tag, Divider } from "antd";

interface LinkIconProps {
  icon: React.ReactNode;
  link: string;
  separator?: boolean;
}

const LinkIcon: React.FC<LinkIconProps> = (props: LinkIconProps) => {
  if (!props.link) return null;
  else {
    return (
      <>
        <a href={props.link} target="_blank" rel="noreferrer noopener">
          {props.icon}
        </a>
        {props.separator === false ? null : <Divider type="vertical"></Divider>}
      </>
    );
  }
};

export default LinkIcon;
