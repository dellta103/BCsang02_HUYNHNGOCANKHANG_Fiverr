import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  searchValue: "",
  filteredJobs: null,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    filterJobs: (state, action) => {
      state.filteredJobs = action.payload;
    },
  },
});

const { actions, reducer } = jobSlice;

export const { setSearch, filterJobs } = actions;

export default reducer;
