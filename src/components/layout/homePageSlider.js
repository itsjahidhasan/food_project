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
           {/* <Image height='100%' width='100%' src={'/vercel.svg'} /> */}
           <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
    </>
  );
}