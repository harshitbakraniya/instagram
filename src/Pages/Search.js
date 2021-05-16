import React from "react";
import Img1 from "../assets/images/Search/1.jpg";
import Img2 from "../assets/images/Search/2.jpg";
import Img3 from "../assets/images/Search/4.jpg";
import Img4 from "../assets/images/Search/5.jpg";
import Img6 from "../assets/images/Search/7.jpg";
import Video1 from "../assets/videos/Janmashtami.mp4";
import Video2 from "../assets/videos/Ganesha Chaturthi.mp4";

const Search = () => {
  return (
    <div className="searchSection">
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <div className="wrraper-1">
        <div className="image">
          <img src={Img1} alt="" />
        </div>
        {/* <div className="image">
          <img src={Img2} />
        </div> */}
        <div className="video">
          <video autoPlay muted loop>
            <source src={Video1}></source>
          </video>
        </div>
      </div>
      <div className="wrraper-2">
        <div className="image">
          <img src={Img3} alt="" />
        </div>
        <div className="image">
          <img src={Img4} alt="" />
        </div>
        {/* <div className="image">
          <img src={Img5} />
        </div> */}
      </div>
      <div className="wrraper-2">
        <div className="image">
          <img src={Img6} alt="" />
        </div>
        <div className="image">
          <img src={Img2} alt="" />
        </div>
        {/* <div className="image">
          <img src={Img3} />
        </div> */}
      </div>
      <div className="wrraper-1">
        <div className="image">
          <img src={Img1} alt="" />
        </div>
        {/* <div className="image">
          <img src={Img2} />
        </div> */}
        <div className="video">
          <video autoPlay muted loop>
            <source src={Video2}></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Search;
