import { createSlice } from "@reduxjs/toolkit";

//create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decriment: (state, action) => {
      state.count--;
    },
  },
});

//selector
export const selectCount = (state) => state.counter;

//action
export const { increment, decriment } = counterSlice.actions;

//reducher
export default counterSlice.reducer;
