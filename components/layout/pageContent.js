export default function content() {
  return (
    <>
      {/* Favorite content */}
      <div className="favoriteContent">
        <h2 className="headerStyle">Your Favorite</h2>
        <div>
          <div className="favoriteItems">
            <h1 className="favoriteImage"></h1>
            <div style={{ marginLeft: "10px" }}>
              <h6 className="txtStyle">Haji Biriyani</h6>
              <span className="subTextStyle">4 items</span>
            </div>
          </div>
          <div className="favoriteItems">
            <h1 className="favoriteImage"></h1>
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
            <h1 className="availableImage"></h1>
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

      <div>
        <h1>hi</h1>
      </div>
    </>
  );
}
