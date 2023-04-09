import { createSlice } from "@reduxjs/toolkit";

export const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    robots: []
  },
  reducers: {
    setRobots: (state, action) => {state.robots = action.payload}
  }
})

export const { setRobots } = robotsSlice.actions;
export default robotsSlice.reducer;
