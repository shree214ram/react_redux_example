import {
  // ARTICLE_FAVORITED,
  // ARTICLE_UNFAVORITED,
  // SET_PAGE,
  // APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  // CHANGE_TAB,
  // PROFILE_PAGE_LOADED,
  // PROFILE_PAGE_UNLOADED,
  // PROFILE_FAVORITES_PAGE_LOADED,
  // PROFILE_FAVORITES_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload[0].articles,
        articlesCount: action.payload[0].articlesCount,
        currentPage: 0,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
