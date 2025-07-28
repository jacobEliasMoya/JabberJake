import { FaChevronDown } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center sticky top-0">
      <div className="font-semibold w-max px-2 py-1 hover:bg-zinc-800 rounded-lg cursor-pointer">
        <h1 className="flex flex-row justify-between items-center gap-2 font-bold">
          JabberJake
          <span className="text-zinc-600 tracking-tight font-black text-sm flex flex-row justify-between items-center gap-1">
            V.1 <FaChevronDown className="text-xs text-zinc-500" />
          </span>
        </h1>
      </div>
      <div className="text-sm font-semibold flex flex-row gap-1 items-center justify-center">
        <div className="font-semibold w-max p-1 hover:bg-zinc-800 rounded-lg cursor-pointer">
          <h2 className="flex flex-row justify-between items-center gap-1 px-2">
            <span className="flex flex-row justify-between items-center">
              <FiShare />
            </span>
            Invite
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
