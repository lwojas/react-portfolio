import Nav from "../components/Nav";
import KnowledgeBlock from "../components/Knowledge";
import TextBlock from "../components/TextBlock";
import CornerGraphic from "../components/CornerGraphic";

const HomePage = () => {
  return (
    <div className="home-block" id="ABOUT">
      <Nav />
      <TextBlock title="Hi, I'm Lech" content="Lorem ipsum" />
      <KnowledgeBlock />
      <CornerGraphic cssClass="corner-top-right" />
      <CornerGraphic cssClass="corner-top-left" />
      <CornerGraphic cssClass="corner-bottom-left" />
      <CornerGraphic cssClass="corner-bottom-right" />
    </div>
  );
};

export default HomePage;
