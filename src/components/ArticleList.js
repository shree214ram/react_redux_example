import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            //@sunny Hame yaha par hamara <TR> bananah he ag grig ka 
            <div className="article-preview">
              <div className="article-meta">
                <Link to={`/@${article.author.username}`}>
                  <img src={article.author.image} alt={article.author.username} />
                </Link>

                <div className="info">
                  <Link className="author" to={`/@${article.author.username}`}>
                    {article.author.username}
                  </Link>
                  <span className="date">
                    {new Date(article.createdAt).toDateString()}
                  </span>
                </div>

                <div className="pull-xs-right">
                  <button  >
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>
              </div>

              <Link to={`/article/${article.slug}`} className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  {
                    article.tagList.map(tag => {
                      return (
                        <li className="tag-default tag-pill tag-outline" key={tag}>
                          {tag}
                        </li>
                      )
                    })
                  }
                </ul>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default ArticleList;

