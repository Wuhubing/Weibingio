import { Anchor, Typography } from "antd";
const { Text, Title } = Typography;

interface ContentSpec {
  content: JSX.Element;
}

const FreeCanvas: React.FC<ContentSpec> = (props) => <>{props.content}</>;

export default FreeCanvas;
