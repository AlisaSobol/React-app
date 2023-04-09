import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./searchSlice";
import robotsReducer from './robotsSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    robots: robotsReducer
  }
})
