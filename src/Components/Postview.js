import React, { useState, useEffect } from "react";
import './styles/Post.css'
import heart from "./images/heart@2x.png";
import share from "./images/share@2x.png";
import more_icon from "./images/more_icon.svg";
import Topnav from "./Topnav";

const Postview = () => {
  const [view, setView] = useState([]);

  useEffect(() => {
    fetch("https://instaclone-utils.onrender.com/post")
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        setView(resp.Message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
     <Topnav/>
    <div>
      {view.map((post) => ( 
        <div key={post.id} className="post">
          <div className="top">
            <div className="left">
              <h3>{post.name}</h3>
              <h3 id="city">{post.location}</h3>
            </div>
            <div className="right">
              <img src={more_icon} alt="" />
            </div>
          </div>
          <div className="middle">
            <img  src={`https://instaclone-utils.onrender.com/${post.PostImage}`} height="auto"alt="Post_pictures" />
          </div>
          <div className="bottom">
            <div className="post-footer">
              <div className="left">
                <div className="bottom-top">
                  <img src={heart} alt="icon" />
                  <img src={share} alt="icon" />
                </div>
                <p>{post.likes} Likes</p>
              </div>
              <div className="right">
                <span>{post.Date}</span>
              </div>
            </div>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Postview;
