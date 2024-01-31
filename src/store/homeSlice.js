import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigration: (state, action) => {
      state.url = action.payload;
    },
    getApiConfigration: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
