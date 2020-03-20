import { useSelector } from "react-redux";

const search = (articles, query) => dispatch => {
  dispatch({ type: "LOADING_RESULTS" });

  const results = articles.filter(a => a.title.includes(query));

  //   console.log(results);
  return dispatch({
    type: "SET_RESULTS",
    data: results,
    query
  });
};

export default search;
