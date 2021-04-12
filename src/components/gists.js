import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists } from "../store/gists/actions";

export const GistsList = () => {
  const dispatch = useDispatch();

  const gists = useSelector((state) => state.gists.list);
  const error = useSelector((state) => state.gists.request.error);
  const loading = useSelector((state) => state.gists.request.loading);

  const requestGists = () => {
    dispatch(getGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }

  return gists.map((gist) => <div key={gist.id}>{gist.description}</div>);
};
