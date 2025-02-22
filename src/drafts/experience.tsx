import { Typography, Image } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import JDLabLogo from "../assets/jdlab-logo.png"; // 需要添加实验室的logo
import CDISLogo from "../assets/cdis-logo.png"; // 添加 CDIS logo

const experienceList = [
  <TimeEntry
    startTime="May 2024"
    endTime="Present"
    content={
      <>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '24px',
          marginBottom: '12px',
          width: '100%'
        }}>
          <Image
            src={JDLabLogo}
            alt="JD Lab Logo"
            style={{ 
              width: '100px',
              height: 'auto',
              flexShrink: 0,
              marginRight: '16px'
            }}
            preview={false}
          />
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '18px', 
              marginBottom: '8px',
              color: 'rgba(0, 0, 0, 0.85)'
            }}>
              Researcher
            </div>
            <div style={{ 
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '16px'
            }}>
              JINGDONG Logistics X-Lab
              <br />
              Advisor: (<a href="https://people.cs.rutgers.edu/~dz220/" target="_blank" rel="noreferrer">Prof. Desheng Zhang</a>)
              <br />
              • Applied self-supervised learning with Transformer-based models for behavior recognition across heterogeneous devices
              <br />
              • Developed AI-driven algorithms for sensor-based human activity recognition (HAR) in large-scale logistics networks
              <br />
              • Published "In-the-wild Machine Learning for Human Behavior Sensing on 1 Million Devices"
            </div>
          </div>
        </div>
      </>
    }
  />,
  <TimeEntry
    startTime="June 2024"
    endTime="December 2024"
    content={
      <>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '24px',
          marginBottom: '12px',
          width: '100%'
        }}>
          <Image
            src={CDISLogo}
            alt="CDIS Logo"
            style={{ 
              width: '100px',
              height: 'auto',
              flexShrink: 0,
              marginRight: '16px'
            }}
            preview={false}
          />
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '18px', 
              marginBottom: '8px',
              color: 'rgba(0, 0, 0, 0.85)'
            }}>
              Teaching Assistant
            </div>
            <div style={{ 
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '16px'
            }}>
              Department of Computer Sciences, UW-Madison
              <br />
              Course: CS 571 - Building User Interfaces (<a href="https://cs571.org/" target="_blank" rel="noreferrer">Course Website</a>)
              <br />
              • Instructed students in Human-Computer Interaction (HCI) principles and React development
              <br />
              • Led hands-on React coding sessions and provided detailed code reviews for student projects
              <br />
              • Mentored 60+ students in building responsive and accessible web applications
            </div>
          </div>
        </div>
      </>
    }
  />,
];

const ExperienceList = () => {
  return <TimedPubList itemList={experienceList} displayLength={5}/>;
};

export default ExperienceList; 