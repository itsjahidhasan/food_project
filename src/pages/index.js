import { Layout } from "antd";

import Common from "../components/layout/common";
import HomePageSlider from "../components/layout/homePageSlider";
import Search from "../components/layout/searchBoxSection";
import PageContent from "../components/layout/pageContent";

export default function Home() {
  const { Header, Content, Footer } = Layout;
  return (
    <body>
      <div>
        <Common />

        <Content style={{ backgroundColor: "#2E2E2E" }} layout="fill">
          <HomePageSlider />

          <Search />

          <PageContent />
        </Content>
      </div>
    </body>
  );
}
