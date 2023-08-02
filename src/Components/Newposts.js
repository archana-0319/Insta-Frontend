import React, { useState, useRef } from "react";
import "./styles/Newpost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Newposts() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [likes, setLikes] = useState("");
  const [description, setDescription] = useState("");
  const [PostImage, setPostImage] = useState("");
  let navigate = useNavigate();
  let inputRef = useRef();
  const inputFunc = (e) => {
    e.preventDefault();
    inputRef.current.click();
    let file = inputRef.current.files[0];
    if (file) {
      setPostImage(file);
      console.log(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !location || !likes || !description || !PostImage) {
      alert("Please Fill all the fields");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("likes", likes);
    formData.append("description", description);
    formData.append("image", PostImage);

    try {
      await axios.post("https://instaclone-utils.onrender.com/new", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // alert("Image Uploaded Successfully");
      navigate("/postview");
    } catch (error) {
      alert("Failed to upload image");
    }
  };

  return (
    <div className="post_form">
      <form onSubmit={handleSubmit}>
        <input
          id="fileInput"
          className="inpfile"
          type="file"
          name="browser"
          onChange={inputFunc}
          ref={inputRef}
          style={{ display: "none" }}
        ></input>
        <input
          type="text"
          id="fileInput"
          placeholder="No file choosen"
          onChange={inputFunc}
          value={PostImage.name}
          readOnly
        style={{width:"70%",marginRight:"10px"}}></input>
        <button className="labelbtn" onClick={inputFunc}>
          <label htmlFor="fileInput">Browse</label>
        </button>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Author"
        />
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <input
          type="text"
          onChange={(e) => setLikes(e.target.value)}
          value={likes}
          placeholder="Likes"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Newposts;
