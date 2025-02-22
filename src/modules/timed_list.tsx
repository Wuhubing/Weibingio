import React, { useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Space, Typography, Button } from "antd";
const { Text } = Typography;

interface TimedListSpec {
  itemList: JSX.Element[];
  displayLength: number;
}

const TimedList: React.FC<TimedListSpec> = (props) => {
  let displayedLength = props.displayLength;
  let expandableTextDisp = "show";
  if (props.itemList.length < displayedLength) {
    expandableTextDisp = "redundant";
    displayedLength = props.itemList.length;
  }

  const [displayedPub, setDisplayedPub] = useState<JSX.Element[]>(
    props.itemList.slice(0, displayedLength)
  );
  const [showState, setShowState] = useState<string>("show");

  const showStateConfig = () => {
    if (showState === "show") {
      setShowState("hide");
      setDisplayedPub(props.itemList);
    } else if (showState === "hide") {
      setShowState("show");
      setDisplayedPub(props.itemList.slice(0, displayedLength));
    }
  };

  const renderIcon = () => {
    if (showState === "show") {
      return <ArrowDownOutlined />;
    } else {
      return <ArrowUpOutlined />;
    }
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        {displayedPub}
        {expandableTextDisp !== "redundant" ? (
          <Button
            type="text"
            onClick={showStateConfig}
            style={{ width: "100%", textAlign: "center" }}
          >
            {renderIcon()}
            {showState}
          </Button>
        ) : null}
      </Space>
    </div>
  );
};

export default TimedList;
