import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: null,
}

export const reloadSlice = createSlice({
  name: 'reload',
  initialState,
  reducers: {
    reloadPost: (state, action)=>{
        state.posts = action.payload;
    }
  },
})

export const { reloadPost } = reloadSlice.actions


export default reloadSlice.reducer