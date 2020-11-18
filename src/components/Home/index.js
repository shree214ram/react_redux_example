import React from 'react';
import agent from '../../agent';
import ArticleList from '../ArticleList';

import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED
} from '../../constants/actionTypes';

const Promise = global.Promise;

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([ articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <ArticleList
              pager={this.props.pager}
              articles={this.props.articles}
              loading={this.props.loading}
              articlesCount={this.props.articlesCount}
              currentPage={this.props.currentPage} />
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  ...state.articleList,
  tags: state.home.tags,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
