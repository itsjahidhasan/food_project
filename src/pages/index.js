import { Layout } from "antd";
import Common from "../components/layout/common";
import HomePageSlider from "../components/layout/homePageSlider";
import Search from "../components/layout/searchBoxSection";
import PageContent from "../components/layout/pageContent";


import Login from "../components/layout/login";

export default function Home(props) {
  const { Header, Content, Footer } = Layout;
  return (
    <>
      <div>
        <Common />
        <Content style={{ backgroundColor: "#272727"}} layout="fill">
          <HomePageSlider />
          <Search />
          <PageContent />
        </Content>
      </div>
    </>
  );
}
