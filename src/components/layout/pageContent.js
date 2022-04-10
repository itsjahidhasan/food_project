import Image from "next/image";
import Link from "next/link";
import { Row, Col, Divider } from "antd";
export default function content() {
  return (
    <>
      {/* Favorite content */}
      <Divider orientation="left"></Divider>
      <div className="favoriteContent">
        <div className="favoriteContent">
          <h2 className="headerStyle">Your Favorite</h2>
        </div>
        <Row gutter={16} justify="center">
          <Col className="gutter-row" span={12}>
            <div>
              <Link href="/foodmenu">
                <a>
                  <div className="favoriteItems">
                    <div className="favoriteImage">
                      <Image height="100%" width="100%" src={"/food1.svg"} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <Link href="/">
                <a>
                  <div className="favoriteItems">
                    <div className="favoriteImage">
                      <Image height="100%" width="100%" src={"/food2.svg"} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Available content */}
      <Divider orientation="left"></Divider>
      <div className="availableContent">
        <div className="availableContent">
          <h2 className="headerStyle">Mostly Available</h2>
        </div>
        <Row gutter={16} justify="center">
          <Col className="gutter-row" span={12}>
            <div>
              <Link href="/foodmenu">
                <a>
                  <div className="availableItems">
                    <div className="availableImage">
                      <Image height="100%" width="100%" src={"/food3.svg"} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Haji Biriyani</h6>
                      <span className="subTextStyle">4 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <Link href="/checkout">
                <a>
                  <div className="availableItems">
                    <div className="availableImage">
                      <Image height="100%" width="100%" src={"/food4.svg"} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Hanif Biriyani</h6>
                      <span className="subTextStyle">3 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* All restaurants */}
      <Divider orientation="left"></Divider>
      <div className="allRestaurants">
        <div className="allRestaurants">
          <h2 className="headerStyle">All Restaurants</h2>
        </div>
        <Row gutter={16} justify="center">
          <Col className="gutter-row" span={24}>
            <div>
              <Link href="/foodmenu">
                <a>
                  <div className="allRestaurants-items">
                    <div className="allRestaurants-img">
                      <Image height="100%" width="100%" src={"/food1.svg"} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className="txtStyle">Bismillah Kabab Ghor</h6>
                      <span className="subTextStyle">9 items</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div>
              <Link href="/">
                <a>
                  <div className="allRestaurants-img">
                    <Image height="100%" width="100%" src={"/food2.svg"} />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className="txtStyle">Bhai Bhai Biriyani House</h6>
                    <span className="subTextStyle">9 items</span>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div>
              <Link href="/">
                <a>
                  <div className="allRestaurants-img">
                    <Image height="100%" width="100%" src={"/food3.svg"} />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className="txtStyle">Bhai Bhai Biriyani House</h6>
                    <span className="subTextStyle">9 items</span>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div>
              <Link href="/login">
                <a>
                  <div className="allRestaurants-img">
                    <Image height="100%" width="100%" src={"/food5.svg"} />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className="txtStyle">Grand Nawab Restaurant</h6>
                    <span className="subTextStyle">9 items</span>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
