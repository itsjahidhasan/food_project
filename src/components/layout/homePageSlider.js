import Image from "next/image";
import { Carousel } from "antd";

export default function HomePageSlider() {
  const contentStyle = {
    height: "330px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <Image height="100%" width="100%" src={"/food1.svg"} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image height="100%" width="100%" src={"/food2.svg"} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image height="100%" width="100%" src={"/food3.svg"} />
          </h3>
        </div>
      </Carousel>
    </>
  );
}
