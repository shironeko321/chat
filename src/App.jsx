import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { socket } from "./socket";
import { addMsg } from "./redux/reducer/chat";

import FormChat from "./components/FormChat";
import MainChat from "./components/MainChat";
import UserChat from "./components/UserChat";

export default function App() {
  const scroll = useRef(null);

  const chat = useSelector((state) => state.chat.value);
  const dispatch = useDispatch();

  useEffect(() => {
    scroll.current.lastChild.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    const addChat = (data) => dispatch(addMsg(data));

    socket.connect();

    socket.on("connect", () => console.log("connect"));
    socket.on("disconnect", () => console.log("disconnect"));

    socket.on("get message", addChat);

    return () => {
      socket.off("connect", () => console.log("connect"));
      socket.off("disconnect", () => console.log("disconnect"));

      socket.off("get message", addChat);

      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-screen grid grid-cols-5">
      <div className="list-user col-span-1 flex flex-col border-r-2 border-gray-700/50 overflow-auto">
        <UserChat />
      </div>
      <div className="col-span-4 shadow h-full overflow-hidden grid grid-rows-8">
        <div ref={scroll} className="list-chat overflow-auto row-span-7 flex flex-col p-5">
          <MainChat />
          <span></span>
        </div>
        <FormChat />
      </div>
    </div>
  );
}
