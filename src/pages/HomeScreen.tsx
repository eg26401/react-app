import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-container">
      <h1 className="title">Plan your underground journey now</h1>
      <div className="button-group">
        <button className="primary-button">Search Now</button>
        <button className="secondary-button">Find out more</button>
      </div>
      <h4 className="info-title">
        Find the best routes and connections using the London Underground system
        with our user-friendly tools and resources.
      </h4>
    </div>
  );
}

export default HomeScreen;
