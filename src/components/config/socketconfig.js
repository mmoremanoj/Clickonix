import { io, openSocket } from "socket.io-client";
export const socket = io("ws://localhost:9248");
socket.on("connnection", () => {
    console.log("connected to server");
  });