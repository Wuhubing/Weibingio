import { Typography } from "antd";
import PubList from "../modules/pub_list";
import PubEntry from "../modules/group_items/pub_entry_spec";

const { Title, Paragraph, Text, Link } = Typography;

const publicationList = [
  <PubEntry
    paperTitle="Lorem ipsum dolor sit amet"
    authors={
      <>
        <b>A B</b>, A C, B D
      </>
    }
    venueType="Conference"
    venueShort="LIDSA 23"
    venueFull="Proceedings of the Lorem ipsum dolor sit amet"
    paperLink="https://arxiv.org/"
    exploreLink="https://google.com/"
    codeLink="https://github.com/"
    abstractContent={
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare:
        <li> A good template;</li>
        <li> An excellent template.</li>
      </>
    }
  />,
  <PubEntry
    paperTitle="Lorem ipsum dolor sit amet"
    authors={
      <>
        <b>A B</b>, A C, B D
      </>
    }
    venueType="Pending"
    venueShort="TXXX"
    venueFull="Under review at Proceedings of the Lorem ipsum dolor sit amet"
    paperLink="https://arxiv.org/"
    exploreLink="https://google.com/"
    codeLink="https://github.com/"
  />,
  <PubEntry
    paperTitle="Lorem ipsum dolor sit amet"
    authors={
      <>
        <b>A B</b>, A C, B D
      </>
    }
    venueType="Conference"
    venueShort="LIDSA 22"
    venueFull="Proceedings of the Lorem ipsum dolor sit amet"
    paperLink="https://arxiv.org/"
    exploreLink="https://google.com/"
    codeLink="https://github.com/"
    awardName="Best Paper (top 1%)"
  />,
  <PubEntry
    paperTitle="Lorem ipsum dolor sit amet"
    authors={
      <>
        <b>A B</b>, A C, B D
      </>
    }
    venueType="arXiv"
    venueShort="arXiv"
    venueFull="arXiv Lorem ipsum dolor sit amet"
    paperLink="https://arxiv.org/"
    exploreLink="https://google.com/"
    codeLink="https://github.com/"
  />,
  <PubEntry
    paperTitle="Lorem ipsum dolor sit amet"
    authors={
      <>
        <b>A B</b>, A C, B D
      </>
    }
    venueType="Journal"
    venueShort="ACM Comm"
    venueFull="Communications of the ACM"
    paperLink="https://arxiv.org/"
    exploreLink="https://google.com/"
    codeLink="https://github.com/"
  />,
];

interface PublicationDisplayListProps {
  selectedTags: string[];
}

const PublicationDisplayList: React.FC<PublicationDisplayListProps> = ({ selectedTags }) => {
  const filteredList = selectedTags.length === 0 
    ? publicationList 
    : publicationList.filter(pub => selectedTags.includes(pub.props.venueType));
    
  return <PubList itemList={filteredList} />;
};

export default PublicationDisplayList;