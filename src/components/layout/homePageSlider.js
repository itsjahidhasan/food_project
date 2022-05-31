import Image from "next/image";
import { Carousel } from "antd";

export default function HomePageSlider() {
  const contentStyle = {
    height: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "right center",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <img src="/food4.png" alt="image1" style={contentStyle} />
        </div>
        <div>
          <img src="/o.png" alt="image1" style={contentStyle} />
        </div>
        <div>
          <img src="/food3.png" alt="image1" style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
}
