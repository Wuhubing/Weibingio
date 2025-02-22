import type { MenuProps } from "antd";
import { 
  BookOutlined, 
  HomeOutlined, 
  CodeOutlined,  // 或者用 FunctionOutlined
  EllipsisOutlined 
} from "@ant-design/icons";

const baseServerAddress = process.env.PUBLIC_URL;

const items: MenuProps["items"] = [
  {
    label: (
      <a href={baseServerAddress + "/"} style={{ fontSize: '18px' }}>
        <HomeOutlined /> Home
      </a>
    ),
    key: "Home",
    children: [
      {
        key: "About",
        label: <a href={baseServerAddress + "/#About"} style={{ fontSize: '16px' }}>About</a>,
      },
      {
        key: "Education",
        label: <a href={baseServerAddress + "/#Education"} style={{ fontSize: '16px' }}>Education</a>,
      },
      {
        key: "Updates",
        label: <a href={baseServerAddress + "/#Updates"} style={{ fontSize: '16px' }}>Updates</a>,
      },
      {
        key: "Publications",
        label: (
          <a href={baseServerAddress + "/#Publications"} style={{ fontSize: '16px' }}>
            <BookOutlined /> Publications
          </a>
        ),
      },
    ],
  },
  {
    label: (
      <a href={baseServerAddress + "/test"} style={{ fontSize: '18px' }}>
        <CodeOutlined /> Research
      </a>
    ),
    key: "Test",
  },
  {
    label: (
      <a href={baseServerAddress + "/misc"} style={{ fontSize: '18px' }}>
        <EllipsisOutlined /> More
      </a>
    ),
    key: "Misc",
  },
];

export default items;