import "./Upload.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  function handleSubmit(e) {
    alert("Video has been uploaded!");
    console.log(title, desc);
    axios.post(API_URL + "/videos", {
      title: title,
      desc: desc
    });
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
                onChange={handleTitleChange}
                value={title}
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
                onChange={handleDescChange}
                value={desc}
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
              </button>
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
