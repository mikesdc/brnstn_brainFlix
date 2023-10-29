import "./Upload.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function Upload() {
  
  function handleSubmit() {
    alert("Video has been uploaded!");
  }

  return (
    <>
      <Header />
      <div className="upload">
        <div className="upload__header">
          <h1>Upload Video</h1>
        </div>
        <div className="upload__body">
          <div className="upload__thumbnail">
            <h2>VIDEO THUMBNAIL</h2>
            <img src={uploadImg} alt="upload thumbnail" />
          </div>

          <div className="upload__forms">
            <div className="upload__forms-title">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Add a title to your video"
                className="title"
              />
            </div>
            <div className="upload__forms-description">
              <label htmlFor="desc">ADD A VIDEO DESCRIPTION</label>
              <textarea
                placeholder="Add a description to your video"
                id="desc"
                name="desc"
              />
            </div>
          </div>
        </div>

        <div className="upload__buttons">
          <div className="upload__buttons-publish">
            <Link
              to="/"
              onClick={() => {
                handleSubmit();
              }}
              className="upload__button-link"
            >
              <button>
                <img src={publishIcon} alt="comment icon" />
                PUBLISH
              </button>{" "}
            </Link>
          </div>
          <div className="upload__cancel-button">
            <Link to="/" className="upload__cancel-link">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
