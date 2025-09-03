// socket.js
import { io } from "socket.io-client";

let socket;

export const initSocket = (userId) => {
  if (!socket) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"
    socket = io(backendUrl, {
      query: { userId },
      withCredentials: true,
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