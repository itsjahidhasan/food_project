import Layout from "../components/layout/layout";
import HomePageSlider from "../components/layout/homePageSlider";

export default function Home() {
  return (
    <body>
      <div style={{ backgroundColor: "black" }}>
        <Layout />

        <div style={{ marginTop: "6rem" }}>
          <section id="slider">
            <HomePageSlider />
          </section>
        </div>
      </div>
    </body>
  );
}
