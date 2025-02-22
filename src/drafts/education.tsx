import { Typography, Image } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import UWLogo from "../assets/uw-logo.png"; // 请确保添加这个图片到assets文件夹

const educationList = [
  <TimeEntry
    startTime="September 2020"
    endTime="Present"
    content={
      <>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '24px',
          marginBottom: '12px',
          width: '100%'  // 确保内容不会超出
        }}>
          <Image
            src={UWLogo}
            alt="UW-Madison Logo"
            style={{ 
              width: '100px',
              height: 'auto',
              flexShrink: 0,
              marginRight: '16px'
            }}
            preview={false}
          />
          <div style={{ flex: 1 }}>  {/* 让内容区域自适应宽度 */}
            <div style={{ 
              fontSize: '18px', 
              marginBottom: '8px',
              color: 'rgba(0, 0, 0, 0.85)'  // 加深文字颜色
            }}>
              B.S. in Computer Science & Mathematics
            </div>
            <div style={{ 
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '16px'
            }}>
              University of Wisconsin-Madison
              <br />
              GPA: 3.72/4.0
              <br />
              Relevant Coursework: Machine Learning, Deep Learning, Mobile Computing, 
              Artificial Intelligence, Database Systems
            </div>
          </div>
        </div>
      </>
    }
  />,
  // 如果有其他教育经历，可以继续添加
];

const EducationList = () => {
  return <TimedPubList itemList={educationList} displayLength={5}/>;
};

export default EducationList; 