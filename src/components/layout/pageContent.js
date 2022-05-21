import Image from "next/image";
import Link from "next/link";
import { Row, Col, Divider, Drawer } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function content() {
  return (
    <>
      {/* Favorite content */}
      <Divider orientation="left"></Divider>

      <div className="favoriteContent">
        <div className="favoriteContent">
          <h2 className="headerStyle">Your Favorite</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
              <Link href="/">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height="100%" width="100%" src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
      <div className="availableContent">
        <div className="availableContent">
          <h2 className="headerStyle">Mostly Available</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
              <Link href="/">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height="100%" width="100%" src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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

      <Divider orientation="left"></Divider>
      <div className="availableContent">
        <div className="availableContent">
          <h2 className="headerStyle">Top Sell</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
              <Link href="/">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height="100%" width="100%" src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/food2.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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

      {/* All restaurants */}
      <Divider orientation="left"></Divider>
      <div className="allRestaurants">
        <div className="allRestaurants">
          <h2 className="headerStyle">All Restaurants</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link href="./foodmenu">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
              <Link href="/">
                <a>
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height="100%" width="100%" src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
                  <div className="favoriteItems">
                    <div>
                      {/* <Image height={100} width={100} src={"/food2.svg"} /> */}
                      <img
                        src="/Rectangle 5062.svg"
                        alt="image1"
                        className="favoriteImage"
                      />
                    </div>
                    <div className="favoriteItemTxt">
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
    </>
  );
}
