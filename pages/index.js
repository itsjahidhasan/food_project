import Layout from "../components/layout/layout";
import HomePageSlider from "../components/layout/homePageSlider";
import Search from "../components/layout/searchBoxSection";

export default function Home() {
  return (
    <body  >
      <div>
        <Layout />
        <div style={{ backgroundColor: "#2E2E2E" }} layout="fill">
          <HomePageSlider />

          <Search />
        </div>
      </div>
    </body>
  );
}
