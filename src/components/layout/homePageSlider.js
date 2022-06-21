import Image from "next/image";
import { Carousel } from "antd";

export default function HomePageSlider() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img src="/food4.png" alt="image1" className="content-style" />
        </div>
        <div>
          <img src="/o.png" alt="image1" className="content-style" />
        </div>
        <div>
          <img src="/food3.png" alt="image1" className="content-style" />
        </div>
      </Carousel>
    </>
  );
}
