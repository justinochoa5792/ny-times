import React, { useState } from "react";
import Axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_API}
   `);
    console.log(response.data);
    setArticles(response.data.response.docs);
  };

  const renderArticles = () => {
    return articles.map((eachArticle) => {
      return (
        <ul>
          <li>{eachArticle.headline.main}</li>
          <li>{eachArticle.source}</li>
          <li>{eachArticle.abstract}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h1>Search for an article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for an article..."
          onChange={handleChange}
        />
      </form>
      {renderArticles()}
    </div>
  );
};

export default Search;
