import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
const { Title, Paragraph, Text, Link } = Typography;

const updatesList = [
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <Text style={{ fontSize: '18px' }}>
        Meeting new friends at{" "}
        <a href="http://github.com/" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
        !
      </Text>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    endTime="August 27, 2023"
    content={
      <Text style={{ fontSize: '18px' }}>
        Meeting new friends at{" "}
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Linkdin
        </a>
        !
      </Text>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <Text style={{ fontSize: '18px' }}>Attending AAAI 2023!</Text>
    }
    annotation={
      <Text style={{ fontSize: '16px' }}>Our group have zero paper accepted at AAAI 2023!</Text>
    }
  />,
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <Text style={{ fontSize: '18px' }}>
        Meeting new friends at{" "}
        <a href="http://github.com/" target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
        !
      </Text>
    }
  />,
];

const NewsDisplayList = () => {
  return <TimedPubList itemList={updatesList} displayLength={2}/>;
};

export default NewsDisplayList;
