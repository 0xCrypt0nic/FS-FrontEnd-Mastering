import React from "react";

const Article = ({ article }) => {
  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="article">
      <div className="card-hearder">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)}</em>
      </div>
      <p>{article.content}</p>
      <div className="btn-container">
        <button>Editer</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default Article;
