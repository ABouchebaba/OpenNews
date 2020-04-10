import { createSelector } from "reselect";

export const availableCategories = createSelector(
  (state) => state.articles.articles,
  (articles) => {
    let categories = {};
    articles.map((a) => {
      categories[a.category] = true;
    });

    return Object.keys(categories);
  }
);

export const filterArticles = (category) =>
  createSelector(
    (state) => state.articles,
    (data) => ({
      data: data.articles.filter((a) => a.category === category),
      loading: data.loading,
      error: data.error,
    })
  );

export const groupArticles = createSelector(
  (state) => state.articles,
  (data) => {
    let topics = [];
    data.articles.map((article) => {
      if (topics[article.group_nb]) {
        topics[article.group_nb] = [...topics[article.group_nb], article];
      } else {
        topics[article.group_nb] = [article];
      }
    });

    return {
      data: topics.filter((a) => a.length > 1),
      loading: data.loading,
      error: data.error,
    };
  }
);

export const preferedArticles = createSelector(
  (state) => ({
    articles: state.articles,
    preferences: state.preferences,
  }),
  ({ articles, preferences }) => {
    // REFACTORING THIS MIGHT BE A GOOD IDEA!!!
    const data = articles.articles.filter((a) => {
      if (Object.keys(preferences["languages"]).length > 0)
        if (!preferences["languages"][a["lang"]]) return false;
      if (Object.keys(preferences["sources"]).length > 0)
        if (!preferences["sources"][a["source"]]) return false;
      if (Object.keys(preferences["categories"]).length > 0)
        if (!preferences["categories"][a["category"]]) return false;
      return true;
    });

    return {
      data: data,
      loading: articles.loading,
      error: articles.error,
    };
  }
);

export const getBookmarks = createSelector(
  (state) => state.bookmarks,
  (bookmarks) => Object.values(bookmarks)
);
