import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { socket } from "../socket";

export default function FormChat() {
  const input = useRef(null);
  const [msg, setMsg] = useState("");

  const user = useSelector((state) => state.user.value);
  const msgTo = useSelector((state) => state.msgTo.value);
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();

    if (msg !== "") {
      const time = new Date().getTime();
      const data = { from: user, to: msgTo, msg, date: time };

      socket.emit("send message", data);

      setMsg("");

      input.current.disabled = true;

      setTimeout(() => {
        input.current.disabled = false;
        input.current.focus();
      }, 1000);
    }
  }

  return (
    <form className="row-span-2 w-full flex gap-2 border-t-2 border-gray-700/50 p-4" onSubmit={submit}>
      <input
        ref={input}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
        onChange={(v) => setMsg(v.target.value)}
        value={msg}
      />
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}
