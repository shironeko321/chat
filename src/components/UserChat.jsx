export default function UserChat() {
  return (
    <>
      {/* active */}
      <div className="avatar px-5 py-3 gap-3 shadow items-center bg-slate-800 hover:bg-slate-900 cursor-pointer">
        <div className="w-8 h-8 rounded-full">
          <div className="w-full h-full bg-slate-400"></div>
        </div>
        <span className="text-xl">Name</span>
      </div>

      {/* not active */}
      <div className="avatar px-5 py-3 gap-3 shadow items-center hover:bg-slate-900 cursor-pointer">
        <div className="w-8 h-8 rounded-full">
          <div className="w-full h-full bg-slate-400"></div>
        </div>
        <span className="text-xl">Name</span>
      </div>
    </>
  );
}
