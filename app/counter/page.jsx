"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectCount, increment, decriment } from "./counterSlice";

const counter = () => {
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(decriment())}>--</button>&nbsp;
      <button onClick={() => dispatch(increment())}>++</button>
    </>
  );
};

export default counter;
