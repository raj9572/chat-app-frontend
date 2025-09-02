import { createSlice } from '@reduxjs/toolkit'



export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: []
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    }
  },

})

// Action creators are generated for each case reducer function
export const { setMessages, addMessage } = messageSlice.actions

export default messageSlice.reducer