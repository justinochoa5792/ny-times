import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="btn">
      <Link to="/articles">
        <button type="button" className="btn btn-primary mr-2">
          Get Articles
        </button>
      </Link>
      <Link to="/search">
        <button type="button" className="btn btn-primary">
          Search Articles
        </button>
      </Link>
    </div>
  );
};

export default Home;
