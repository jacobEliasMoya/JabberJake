import JakeLogo from "../../../public/jabberjake.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import IconRenderer from "../atoms/IconRenderer";

const Aside = () => {
  return (
    <aside className="flex items-center md:items-start w-full md:w-max border-b-1 md:border-t-0 md:border-r-1 p-3 border-zinc-700/30 h-1/12 md:h-full justify-between rounded-b-xl md:rounded-b-none">
      <Image
        src={JakeLogo}
        alt=""
        width={40}
        height={40}
        sizes=""
        placeholder="empty"
      />

      <IconRenderer
        icon={"hamburgerMenu"}
        size={"md"}
        additionalClasses={"md:hidden cursor-pointer"}
      />
    </aside>
  );
};

export default Aside;
