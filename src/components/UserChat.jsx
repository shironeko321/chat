import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { to } from "../redux/reducer/msgto";

export default function UserChat() {
  const [msgto, setMsgto] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  const chat = useSelector((state) => state.chat.value);
  const toUser = useSelector((state) => state.msgTo.value);

  const getMsgFrom = (id) => dispatch(to(id));
  const msgTo = useCallback(() => {
    const array = chat.map((value) => [value.from, value.to]).flatMap((e) => [...e]);
    const fillterDuplicate = array.filter((item, index) => array.indexOf(item) === index);
    const getUser = fillterDuplicate.filter((e) => e !== user);

    return getUser;
  }, [chat]);

  useEffect(() => setMsgto(() => msgTo()), [chat]);

  return msgto.map((value, index) => {
    return (
      <div
        key={`to-${index}`}
        onClick={() => getMsgFrom(value)}
        className={`avatar px-5 py-3 gap-3 shadow items-center cursor-pointer ${
          value !== toUser ? "hover:bg-slate-900" : "bg-slate-900"
        }`}
      >
        <div className="w-8 h-8 rounded-full">
          <div className="w-full h-full bg-slate-400"></div>
        </div>
        <span className="text-xl">{value}</span>
      </div>
    );
  });
}
