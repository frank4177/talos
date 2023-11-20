import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  userLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action)=>{
        state.currentUser = action.payload;
    },
    setUserLoading: (state, action)=>{
        state.userLoading = action.payload;
    }
  },
})

export const { loginUser, setUserLoading } = userSlice.actions


export default userSlice.reducer