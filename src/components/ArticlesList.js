import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getArticles } from "../store/articles/actions";
import {
  selectArticles,
  selectArticlesRequestStatus,
} from "../store/articles/selectors";
import { REQUEST_STATUS } from "../constants";
import { Article } from "./Article";

export default function ArticlesList() {
  const articles = useSelector(selectArticles);
  const requestStatus = useSelector(selectArticlesRequestStatus);
  const dispatch = useDispatch();

  console.log(articles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  const renderArtcile = useCallback((article) => (
    <Article key={article.id} title={article.title} summary={article.summary} />
  ));

  if (requestStatus === REQUEST_STATUS.LOADING) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {requestStatus === REQUEST_STATUS.FAILURE && <span>Error</span>}
      {articles.map(renderArtcile)}
    </>
  );
}
