import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfigration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfigration(res));
    });
  };

  return (
    <>
      <div className="App"></div>
    </>
  );
}

export default App;
