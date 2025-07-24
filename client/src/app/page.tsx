import Form from "@/components/organisms/Form";
import Image from "next/image";
import JakeLogo from "../../public/jabberjake.png";
import Header from "@/components/layout/Header";
import { DiScala } from "react-icons/di";
import Disclaimer from "@/components/atoms/Disclaimer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex ">
      <aside className="flex items-start w-max border-r-1 p-3 border-zinc-700/30">
        <Image
          src={JakeLogo}
          alt=""
          width={35}
          height={35}
          sizes=""
          placeholder="empty"
        />
      </aside>

      <section className="w-full p-2 flex items-center flex-col justify-between relative">
        <Header />
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto flex items-center flex-col justify-center gap-2 h-full">
          <h2 className="flex flex-row justify-between items-center gap-4 px-2 text-3xl mb-2 font-semibold text-zinc-300">
            <span> Hey There! </span>
            Ready To Chat?
          </h2>
          <Form />
          <Disclaimer />
        </div>
      </section>
    </main>
  );
}
