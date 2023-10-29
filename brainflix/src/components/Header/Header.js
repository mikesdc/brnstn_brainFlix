import "./Header.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";
import brainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Header = ({ setRandomKey }) => {
  
    // setRandomKey is used here to assist with setting default video when the logo is clicked while on root page
  function generateKey() {
    let key = uuid();
    if (setRandomKey) {
      setRandomKey(key);
    }
  }

  return (
    <header className="header">
      <div className="header__home-link">
        <Link to="/" onClick={generateKey}>
          <img
            className="header__home-link-icon"
            src={brainflixLogo}
            alt="brain flix home icon"
          />
        </Link>
      </div>

      <input type="text" className="header__search-bar" placeholder="Search" />

      <div className="header__upload-button buttons">
        <Link to="/upload" style={{ display: "inline-block" }}>
          <button className="buttons">
            <img src={uploadIcon} alt="" />
            UPLOAD
          </button>
        </Link>
      </div>

      <div className="header__profile-icon">
        <img src={profilePhoto} alt="" className="header__profile-image" />
      </div>
    </header>
  );
};

export default Header;
