import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HeroBanner.scss";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="Wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movie, TV shows and People to discover. Explore now.
          </span>
          <div className="seachInput">
            <input
              onKeyUp={searchQueryHandler}
              onChange={(e) => setquery(e.target.value)}
              type="text"
              placeholder="Seach for a movie or TV show...."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
