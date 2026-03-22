import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="homePage">
      {/* Decorative Background Elements */}
      <div className="bg-decor blob1"></div>
      <div className="bg-decor blob2"></div>

      <div className="textContainer">
        <div className="wrapper">
          <div className="hero-content">
            <h1 className="title">Journey To Your Perfect <br/>Dream Home</h1>
            <p>
              Embark on a journey to find a home that reflects your dreams and
              lifestyle. Explore curated listings designed to meet your unique
              needs, bringing you one step closer to the perfect place to call
              home.
            </p>
          </div>
          
          <div className="searchBarContainer">
            <SearchBar />
          </div>

          <div className="boxes">
            <div className="box">
              <div className="stat-content">
                <h1>16+</h1>
                <h2>Years Experience</h2>
              </div>
            </div>
            <div className="box">
              <div className="stat-content">
                <h1>200</h1>
                <h2>Awards Gained</h2>
              </div>
            </div>
            <div className="box">
              <div className="stat-content">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>

      <div className="imgContainer">
        <div className="floating-badge top-right">
          <div className="badge-icon">🏠</div>
          <div className="badge-text">
            <strong>2.5k+</strong>
            <span>Active Listings</span>
          </div>
        </div>
        <div className="floating-badge bottom-left">
          <div className="badge-icon">⭐</div>
          <div className="badge-text">
            <strong>4.9/5</strong>
            <span>User Rating</span>
          </div>
        </div>
        <img src="/images/bg.png" alt="Modern Home" />
      </div>
    </div>
  );
};

export default Home;
