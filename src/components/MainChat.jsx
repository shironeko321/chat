import { useSelector } from "react-redux";

export default function MainChat({ user = 1 }) {
  const chat = useSelector((state) => state.chat.value);
  const msgTo = useSelector((state) => state.msgTo.value);

  return chat
    .filter((value) => value.form === msgTo || value.to === msgTo)
    .map(({ from, to, msg, date }, index) => {
      const time = new Date(date);

      return (
        <div key={`chat-${index}`} className={`chat ${from === user ? "chat-end" : "chat-start"}`}>
          <div className="chat-header">
            <time className="text-xs opacity-50">
              {time.getHours()} : {time.getMinutes()}
            </time>
          </div>
          <div className="chat-bubble">{msg}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      );
    });
}
