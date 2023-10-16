import "./Upload.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function Upload() {
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [videosList, setVideosList] = useState([]);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      });
  }, []);

  function handleSubmit() {
    console.log("Upload");
  }

  return (
    <div className="upload">
      <div className="upload__header">
        <h1>Upload Video</h1>
      </div>
      <div className="upload__body">
        <div className="upload__thumbnail">
          <h2>VIDEO THUMBNAIL</h2>
          <img src={uploadImg} alt="upload image thumbnail" />
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
              <img src={uploadIcon} alt="comment icon" />
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
  );
}

export default Upload;
