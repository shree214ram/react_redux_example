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
        (props.articles.recentHealthScores || []).map(article => {
          return (
            //@sunny Hame yaha par hamara <TR> bananah he ag grig ka 
            <div className="article-preview">
              <div className="article-meta">
                <Link to={`/@${article.date}`}>
                  <img src={article.score} alt={article.date} />
                </Link>

                <div className="info">
                  <Link className="author" to={`/@${article.date}`}>
                    {article.date}
                  </Link>
                  <span className="date">
                    {new Date(article.score).toDateString()}
                  </span>
                </div>

                <div className="pull-xs-right">
                  <button  >
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>
              </div>

              <Link to={`/article/${article.score}`} className="preview-link">
                <h1>{article.score}</h1>
                <p>{article.score}</p>
                <span>Read more...</span>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default ArticleList;

