import Image from "next/image";
import { Carousel } from "antd";

export default function HomePageSlider() {
  const contentStyle = {
    height: "80",
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
          <img src="/VALENTINE POST-01.svg" alt="image1" style={contentStyle} />
        </div>
        <div>
          <img src="/VALENTINE POST-01.svg" alt="image1" style={contentStyle} />
        </div>
        <div>
          <img src="/VALENTINE POST-01.svg" alt="image1" style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
}
