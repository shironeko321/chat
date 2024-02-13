import { useRef } from "react";
import { socket } from "../socket";

export default function FormChat({ user = 1 }) {
  const input = useRef(null);
  const [msg, setMsg] = useState("");

  function submit(e) {
    e.preventDefault();

    if (msg !== "") {
      const time = new Date().getTime();
      const data = { from: user, to: 2, msg, date: time };

      socket.emit("send message", data);

      setMsg("");

      input.current.disable = true;

      setTimeout(() => {
        input.current.disable = false;
        input.current.focus = true;
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
