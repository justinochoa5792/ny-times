import React, { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <h1>Search for an article</h1>
    </div>
  );
};

export default Search;
