import "./Header.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";
import brainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const reload = () => {
    window.origin.reload();
  };

  return (
    <header className="header">
      <div className="header__home-link">
        <Link to="/" onClick={() => reload()}>
          <img
            className="header__home-link-icon"
            src={brainflixLogo}
            alt="brain flix home icon"
          />
        </Link>
      </div>

      <input type="text" className="header__search-bar" placeholder="Search" />

      <div className="header__upload-button buttons">
        <Link to="upload" style={{ display: "inline-block" }}>
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
