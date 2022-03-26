import Layout from "../components/layout/layout";
import Carousel from "../components/ui/carosol";

export default function Home() {
  return (
    <body>
      <div style={{ backgroundColor: "black" }}>
        <Layout />

        <div style={{ marginTop: "6rem" }}>
          <section id="slider">
            <Carousel />
          </section>

          

          
        </div>
      </div>
    </body>
  );
}
