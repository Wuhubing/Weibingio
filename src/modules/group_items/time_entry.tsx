import React from "react";
import { Row, Col, Typography } from "antd";
import "../constanats/constants";
const { Text } = Typography;

interface TimeEntrySpec {
  startTime?: string;
  endTime?: string;
  content: JSX.Element;
  annotation?: JSX.Element;
}

const TimeEntry: React.FC<TimeEntrySpec> = (props: TimeEntrySpec) => {
  const conditionalRender = () => {
    if (props.startTime && props.endTime) {
      return {
        fc: 16,
        lc: 8,
      }
    }
    else if (props.startTime) {
      return {
        fc: 20,
        lc: 4,
      }
    }
    else {
      return {
        fc: 24,
        lc: 0,
      }
    }
  }

  let columnWidthSetting = conditionalRender();

  return (
    <div>
      <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 16 }}>
        <Col span={columnWidthSetting.fc}>
          <Text>{props.content}</Text>
        </Col>
        <Col span={columnWidthSetting.lc} style={{ textAlign: "right" }}>
          <Text>
            {props.startTime ? props.startTime : null}{" "}
            {props.endTime ? <>- {props.endTime}</> : null}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ paddingLeft: "2.5%" }}>
          {props.annotation ? props.annotation : null}
        </Col>
      </Row>
    </div>
  );
};

export default TimeEntry;
