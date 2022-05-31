import Image from "next/image";
import Link from "next/link";
import { Row, Col, Divider, Drawer } from "antd";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Navigation, Scrollbar } from "swiper";

export default function content() {
  return (
    <>
      {/* Favorite content */}
      <Divider orientation="left"></Divider>

      <div className="content">
        <Row>
          <Col span={10}>
            <div className="contentHeader">
              <span className="headerStyle">Your Favorite</span>
            </div>
          </Col>
          <Col span={10}></Col>
          <Col span={4}>
            <div className="viewAll">
              <span className="viewAllStyle">
                View All <DownOutlined />
              </span>
            </div>
          </Col>
        </Row>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            420: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Available content */}
      <Divider orientation="left"></Divider>
      <div className="content">
        <Row>
          <Col span={10}>
            <div className="contentHeader">
              <span className="headerStyle">Mostly Available</span>
            </div>
          </Col>
          <Col span={10}></Col>
          <Col span={4}>
            <div className="viewAll">
              <span className="viewAllStyle">
                View All <DownOutlined />
              </span>
            </div>
          </Col>
        </Row>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            420: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* top sell content */}
      <Divider orientation="left"></Divider>
      <div className="content">
        <Row>
          <Col span={10}>
            <div className="contentHeader">
              <span className="headerStyle">Top Sell</span>
            </div>
          </Col>
          <Col span={10}></Col>
          <Col span={4}>
            <div className="viewAll">
              <span className="viewAllStyle">
                View All <DownOutlined />
              </span>
            </div>
          </Col>
        </Row>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            420: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.png"
                        alt="image1"
                        className="contentImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* all restaurants content */}
      <Divider orientation="left"></Divider>
      <div className="content">
        <Row>
          <Col span={11}>
            <div className="contentHeader">
              <span className="headerStyle">All Restaurants</span>
            </div>
          </Col>
          <Col span={9}></Col>
          <Col span={4}>
            <div className="viewAll">
              <span className="viewAllStyle">
                View All <DownOutlined />
              </span>
            </div>
          </Col>
        </Row>
        <div className="all-restaurants">
          <Row>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                        <img
                          src="/food3.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        <img
                          src="/food5.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                        <img
                          src="/food4.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                        <img
                          src="/food3.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        <img
                          src="/food5.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Link href="./foodmenu">
                  <a>
                    <div className="contentItems">
                      <div>
                        {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                        <img
                          src="/food4.png"
                          alt="image1"
                          className="restaurantImage"
                        />
                      </div>
                      <div className="contentItemTxt">
                        <h6 className="txtStyle">Haji Biriyani</h6>
                        <span className="subTextStyle">4 items</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <div className="more-btn">
          <button>
            More <CaretDownOutlined style={{ fontSize: "26px" }} />
          </button>
        </div>
        <div className="restaurants-mobile-view">
          <Row>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food3.png"
                        alt="image1"
                        className="restaurantImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Row>
          <Row>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      <img
                        src="/food5.png"
                        alt="image1"
                        className="restaurantImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Row>
          <Row>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="contentItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food4.png"
                        alt="image1"
                        className="restaurantImage"
                      />
                    </div>
                    <div className="contentItemTxt">
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Row>
        </div>
      </div>
      <footer>
        <Row>
          <Col span={2}>
            <span>About us</span>
          </Col>
          <Col span={3}>
            <span>Privacy Policy</span>
          </Col>
          <Col span={4}>
            <span>Terms &#38; condition</span>
          </Col>
          <Col span={3}>
            <span>Help Center</span>
          </Col>
          <Col span={6}>
            <span></span>
          </Col>
          <Col span={6}>
            <span style={{ float: "right" }}>Copyrights2022@owldhaka.com</span>
          </Col>
        </Row>
      </footer>
    </>
  );
}
