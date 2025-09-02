// socket.js
import { io } from "socket.io-client";

let socket;

export const initSocket = (userId) => {
  if (!socket) {
    socket = io("http://localhost:8080", {
      query: { userId },
      transports: ["websocket"],
    });
  }
  return socket;
};

export const getSocket = () => socket;


export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;  // ✅ reset so next login can create a fresh socket
  }
};