import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authUser: null,
    otherUsers: [],
    selectedUser: null,
    onlineUsers: {},
    notification: {}
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = { ...state.onlineUsers, ...action.payload }
    },
    setNotification: (state, action) => {
      // console.log(action.payload)
      if (!state.notification) {
        state.notification = {};
      }
      const { senderId } = action.payload
      if (state.notification[senderId]) {
        state.notification[senderId].push(action.payload);
      } else {
        // otherwise create new array
        state.notification[senderId] = [action.payload];
      }

    },
    removeNotification: (state, action) => {
      const {userId}  = action.payload
       if (!state.notification) {
        state.notification = {};
      }
      if (userId && state.notification[userId] ) {
        delete state.notification[userId];
      } else {
        // Clear all
        Object.keys(state?.notification).forEach(key => delete state.notification[key]);
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { setAuthUser, setOtherUsers, setSelectedUser, setOnlineUsers, setNotification,removeNotification } = userSlice.actions

export default userSlice.reducer