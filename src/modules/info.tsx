import React, { useState, useEffect } from "react";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WeiboOutlined,
  TwitterOutlined,
  FilePdfOutlined
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";
import { Space, Typography, Image, Divider, Layout } from "antd";
import LinkIcon from "./group_items/link_icon";

const { Text, Paragraph, Title } = Typography;

interface InfoSpec {
  portrait: string;
  name: string;
  affiliation: string;
  personalStatement: JSX.Element;
  googleScholar?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  weibo?: string;
  orcid?: string;
  location?: string;
  cv?: string;
}

const PersonalInfo: React.FC<InfoSpec> = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let picWidthSpec = "20%";
  if (screenWidth < 780) picWidthSpec = "40%";
  else picWidthSpec = "25%";

  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        {/* <p>Screen Width: {screenWidth}px</p> */}
        <div style={{ textAlign: "center" }}>
          <Image
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            src={props.portrait}
            width={picWidthSpec}
            preview={false}
          ></Image>
        </div>
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "28px" }} strong={true}>
            {props.name}
          </Text>
          <br />
          <Text style={{ fontSize: "18px" }}>{props.affiliation}</Text>
          <br />
          <Text>
            {props.location ? (
              <>
                <FontAwesomeIcon icon={faLocationDot} /> {props.location}
              </>
            ) : null}
          </Text>
        </div>
        <div style={{ fontSize: "20px", textAlign: "center" }}>
          <Divider type="vertical"></Divider>
          <LinkIcon
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            link={props.googleScholar ? props.googleScholar : ""}
          />
          <LinkIcon
            icon={<FontAwesomeIcon icon={faOrcid} />}
            link={props.orcid ? props.orcid : ""}
          />
          <LinkIcon
            icon={<GithubOutlined />}
            link={props.github ? props.github : ""}
          />
          <LinkIcon
            icon={<LinkedinOutlined />}
            link={props.linkedin ? props.linkedin : ""}
          />
          <LinkIcon
            icon={<MailOutlined />}
            link={props.email ? props.email : ""}
          />
          <LinkIcon
            icon={<TwitterOutlined />}
            link={props.twitter ? props.twitter : ""}
          />
          <LinkIcon
            icon={<WeiboOutlined />}
            link={props.weibo ? props.weibo : ""}
          />
          <LinkIcon
            icon={<FilePdfOutlined />}
            link={props.cv ? props.cv : ""}
          />
        </div>

        <div style={{ width: "60%", margin: "0 auto" }}>
          <Divider></Divider>
        </div>

        {props.personalStatement}
      </Space>
    </div>
  );
};

export default PersonalInfo;
