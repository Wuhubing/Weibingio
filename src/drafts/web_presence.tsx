import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import { ZhihuOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
const { Title, Paragraph, Text, Link } = Typography;

const webList = [
  <TimeEntry
    content={
      <a
        href="https://bilibili.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faBilibili} /> Bilibili
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.zhihu.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <ZhihuOutlined /> Zhihu
      </a>
    }
  />,
];

const PrecenseOnWeb = () => {
  return <TimedPubList itemList={webList} displayLength={10} />;
};

export default PrecenseOnWeb;
