import Common from "../components/layout/common";
import HomePageSlider from "../components/layout/homePageSlider";
import Search from "../components/layout/searchBoxSection";
import Content from "../components/layout/pageContent";

export default function Home() {
  return (
    <body >
      <div>
        <Common />
        <div style={{ backgroundColor: "#2E2E2E"}}  layout="fill">
          <HomePageSlider />

          <Search />

          <Content />
        </div>
      </div>
    </body>
  );
}
