import Layout from "../components/layout/layout";
import HomePageSlider from "../components/layout/homePageSlider";
import Search from "../components/layout/searchBoxSection";
import Content from "../components/layout/pageContent";

export default function Home() {
  return (
    <body >
      <div>
        <Layout />
        <div style={{ backgroundColor: "#2E2E2E",marginTop:"10px" }}  layout="fill">
          <HomePageSlider />

          <Search />

          <Content />
        </div>
      </div>
    </body>
  );
}
