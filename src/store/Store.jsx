import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './reducers/MovieSlice'
import movieReducer from "./reducers/MovieSlice";
import tvReducer from "./reducers/TvSlice";
import peopleReducer from  "./reducers/PeopleSlice"

export const store = configureStore({
  reducer: {
    movie : movieReducer,
    tv : tvReducer,
    people : peopleReducer,
  },
})

 