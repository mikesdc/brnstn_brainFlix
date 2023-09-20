import "./Header.scss";
import searchBarIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";

import brainflixLogo from "../../assets/logo/BrainFlix-logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__home-link">
        <img
          className="header__home-link-icon"
          src={brainflixLogo}
          alt="brain flix home icon"
        />
      </div>
      <div className="header__search-bar">
        <img
          src={searchBarIcon}
          alt="search icon"
          className="header__search-icon"
        />

        <input
          type="text"
          className="header__search-field"
          placeholder="Search"
        />
      </div>
      <div className="header__upload-button buttons">
        <button className="buttons">
          <img src={uploadIcon} alt="" />
          UPLOAD
        </button>
      </div>
      
      
      <div className="header__profile-icon"><img src={profilePhoto} alt="" className="header__profile-image" /></div>
    
    
    </header>
  );
};

export default Header;
