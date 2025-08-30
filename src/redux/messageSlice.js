import { createSlice } from '@reduxjs/toolkit'



export const messageSlice = createSlice({
  name: 'message',
  initialState:{
    messages:null
  },
  reducers: {
    setMessages:(state, action) =>{
        state.messages = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setMessages } = messageSlice.actions

export default messageSlice.reducer