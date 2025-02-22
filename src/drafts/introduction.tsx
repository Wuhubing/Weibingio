import { Space, Typography, Image, Divider, Layout } from "antd";

import PersonalInfo from "../modules/info";
import Selfie from "../assets/selfie.jpg";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Weibing Wang"
      affiliation="University of Wisconsin-Madison"
      location="Madison, WI, USA"
      googleScholar="https://scholar.google.com/citations?user=djakdjfkla"
      github="https://github.com/xxx"
      linkedin="https://www.linkedin.com/in/xxx"
      email="mailto:xxy@abc.com"
      orcid="https://orcid.org/0000-0000-0000-0000"
      personalStatement={
        <>
          <Paragraph>
            I am a senior undergraduate student at the University of Wisconsin-Madison. 
            My research interests lie in the intersection of Large Language Models (LLMs), 
            Deep Learning, and Mobile Computing. I am passionate about developing efficient 
            and innovative solutions that bridge the gap between advanced AI models and 
            practical mobile applications.
          </Paragraph>
          <Paragraph>
            Currently, I focus on exploring the optimization and deployment of LLMs 
            in resource-constrained environments, particularly on mobile devices. 
            My work involves investigating techniques for model compression, efficient 
            inference, and the development of mobile-first AI applications that can 
            enhance user experiences while maintaining privacy and performance.
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
