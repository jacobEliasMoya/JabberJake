import Disclaimer from "@/components/atoms/Disclaimer";
import Form from "@/components/organisms/NewUserForm";
import JakeLogo from "../../public/jabberjake.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-screen flex flex-col md:flex-row">
      <aside className="flex items-center md:items-start w-full md:w-max border-b-1 md:border-t-0 md:border-r-1 p-3 border-zinc-700/30 h-1/12 md:h-full justify-between rounded-b-xl md:rounded-b-none">
        <Image
          src={JakeLogo}
          alt=""
          width={40}
          height={40}
          sizes=""
          placeholder="empty"
        />

        <RxHamburgerMenu className="w-8 h-auto hidden"/>
      </aside>

      <section className="w-full p-4 pb-14 md:pb-4 flex items-end flex-col justify-between relative h-11/12 md:h-full">
        <Header />

        <div className="w-full mx-auto flex items-center flex-col justify-end md:justify-center gap-2 h-full">
          <h2 className="text-xl md:text-3xl mb-1 font-semibold text-zinc-300 capitalize">
            to chat enter a username 😊
          </h2>

          <Form />
          
        </div>
      </section>
    </main>
  );
}
