export default function content() {
  return (
    <>
      {/* Favorite content */}
      <div className="favoriteContent">
        <h2 className="headerStyle">Your Favorite</h2>
        <div>
          <div className="favoriteItems">
            <div className="favoriteImage"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Haji Biriyani</h6>
              <span className="subTextStyle">4 items</span>
            </div>
          </div>
          <div className="favoriteItems">
            <div className="favoriteImage"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Hanif Biriyani</h6>
              <span className="subTextStyle">3 items</span>
            </div>
          </div>
        </div>
      </div>
      {/* Available content */}
      <div className="availableContent">
        <h2 className="headerStyle">Mostly Available</h2>
        <div>
          <div className="availableItems">
            <div className="availableImage"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Haji Biriyani</h6>
              <span className="subTextStyle">4 items</span>
            </div>
          </div>
          <div className="availableItems">
            <h1 className="availableImage"></h1>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Hanif Biriyani</h6>
              <span className="subTextStyle">3 items</span>
            </div>
          </div>
        </div>
      </div>

      {/* All restaurants */}
      <div className="allRestaurants">
        <h2 className="headerStyle">All Restaurants</h2>
        <div>
          <div className="allRestaurants-items">
            <div className="allRestaurants-img"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Bismillah Kabab Ghor</h6>
              <span className="subTextStyle">9 items</span>
            </div>

            <div className="allRestaurants-img"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Bhai Bhai Biriyani House</h6>
              <span className="subTextStyle">9 items</span>
            </div>

            <div className="allRestaurants-img"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Badshahi Kabab</h6>
              <span className="subTextStyle">9 items</span>
            </div>

            <div className="allRestaurants-img"></div>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Grand Nawab Restaurant</h6>
              <span className="subTextStyle">9 items</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
