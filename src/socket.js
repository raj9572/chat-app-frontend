// socket.js
import { io } from "socket.io-client";

let socket;

export const initSocket = (userId) => {
  if (!socket) {
    socket = io("http://localhost:8080", {
      query: { userId }
    });
  }
  return socket;
};

export const getSocket = () => socket;
