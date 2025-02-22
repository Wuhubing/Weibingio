import React from "react";
import { useState } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

import { Row, Col, Space, Typography, Tag, Button, Divider } from "antd";
import LinkTag from "./link_tag";
import colorProjection from "../constanats/constants";
import "../constanats/constants";
const { Text } = Typography;

interface PubEntrySpec {
  paperTitle: string;
  authors: JSX.Element;
  venueType:
    | "Conference"
    | "Journal"
    | "Workshop"
    | "arXiv"
    | "Pending"
    | "Other"
    | "Competition"
    | "Course"
    | "Research";
  venueShort?: string;
  venueFull: string;
  affiliation?: string;
  awardName?: string;
  paperLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
  materialLink?: string;
  abstractContent?: JSX.Element;
}

const PubEntry: React.FC<PubEntrySpec> = (props: PubEntrySpec) => {
  const [abstractContentVisible, setAbstractContentVisible] =
    useState<boolean>(false);

  const handleClick = () => {
    setAbstractContentVisible(!abstractContentVisible);
  };

  const extraContentController = () => {
    if (
      props.paperLink ||
      props.exploreLink ||
      props.codeLink ||
      props.videoLink ||
      props.presentationLink ||
      props.materialLink ||
      props.abstractContent
    )
      return (
        <>
          <Space size={[0, 8]} wrap>
            <LinkTag
              icon={<FilePdfOutlined />}
              link={props.paperLink ? props.paperLink : ""}
              text="Paper"
            ></LinkTag>
            <LinkTag
              icon={<SearchOutlined />}
              link={props.exploreLink ? props.exploreLink : ""}
              text="Explore"
            ></LinkTag>
            <LinkTag
              icon={<GithubOutlined />}
              link={props.codeLink ? props.codeLink : ""}
              text="Code"
            ></LinkTag>
            <LinkTag
              icon={<VideoCameraOutlined />}
              link={props.videoLink ? props.videoLink : ""}
              text="Video"
            ></LinkTag>
            <LinkTag
              icon={<AudioOutlined />}
              link={props.presentationLink ? props.presentationLink : ""}
              text="Presentation"
            ></LinkTag>
            <LinkTag
              icon={<InfoCircleOutlined />}
              link={props.materialLink ? props.materialLink : ""}
              text="Material"
            ></LinkTag>
            {props.abstractContent ? (
              <Button shape="circle" size="small" onClick={handleClick}>
                {abstractContentVisible ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )}
              </Button>
            ) : null}
          </Space>
          {abstractContentVisible ? <div>{props.abstractContent}</div> : null}
        </>
      );
    else return null;
  };

  return (
    <Space>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Text strong={true}>{props.paperTitle}</Text>
          <br />
          {props.affiliation ? (
            <>
              <Text italic={true}>{props.affiliation}</Text>
              <Divider type="vertical" />
            </>
          ) : null}
          <Text>{props.authors}</Text>
          <br />
          <Tag color={colorProjection[props.venueType]}>
            <i>
              <b>{props.venueShort ? props.venueShort : props.venueType}</b>
            </i>
          </Tag>
          <Text italic={true}>{props.venueFull}</Text>
          <br />
          {props.awardName ? (
            <>
              <Text>
                <TrophyOutlined style={{ color: "#B31B1B" }} />{" "}
                {props.awardName}
              </Text>
              <br />
            </>
          ) : null}

          {extraContentController()}
        </Col>
      </Row>
    </Space>
  );
};

export default PubEntry;
