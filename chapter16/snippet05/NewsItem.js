import React from 'react'

const NewsItem = ({ article }) => (
  <article>
    <div className="article-wrapper">
      <h3 className="text-center">{article.title}</h3>
      <img src={article.urlToImage} alt="" />
      <p className="text-center">{article.description}</p>
      <p className="text-center"><a href={article.url} target="_blank noopener norferrer">Read more ...</a></p>
    </div>
  </article>
);

export default NewsItem


