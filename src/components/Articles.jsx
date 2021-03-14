import React from "react";
import "../App.css";

const Articles = (props) => {
  console.log(props);

  const renderArticles = () => {
    return props.article.results.map((art) => {
      return (
        <ul>
          <img src={art.multimedia[0].url} alt={art.title} className="img" />
          <li>{art.title}</li>
          <li>{art.byline}</li>
          <li>{art.abstract}</li>
          <a href={art.url} target="_blank" rel='noreferrer"'>
            See Full Article
          </a>
        </ul>
      );
    });
  };
  return (
    <div>
      <h1>Popular Articles</h1>
      {renderArticles()}
    </div>
  );
};

export default Articles;
