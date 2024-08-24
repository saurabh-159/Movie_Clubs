import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 info: null,
}


export const PeopleSlice = createSlice({
    name: 'People',
    initialState,
    reducers: {
      loadpeople: (state, action) =>{
        state.info = action.payload
      },
      removepeople: (state, action) =>{
        state.info =  null
      },
    },
  })
  
   
  export const { loadpeople, removepeople  } = PeopleSlice.actions
  
  export default PeopleSlice.reducer