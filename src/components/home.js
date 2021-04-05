import React from "react";
import { useParams } from "react-router-dom";

export const Home = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h3>Home</h3>
      <h4>{params.myParam}</h4>
    </>
  );
};
