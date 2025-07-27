import Disclaimer from "@/components/atoms/Disclaimer";
import Form from "@/components/organisms/NewUserForm";
import JakeLogo from "../../public/jabberjake.png";
import Header from "@/components/layout/Header";
import Image from "next/image";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex ">
      <aside className="flex items-start w-max border-r-1 p-3 border-zinc-700/30 ">
        <Image
          src={JakeLogo}
          alt=""
          width={40}
          height={40}
          sizes=""
          placeholder="empty"
        />
      </aside>

      <section className="w-full p-2 flex items-center flex-col justify-between relative">
        <Header />

        <div className="w-full mx-auto flex items-center flex-col justify-center gap-2 h-full">
          <h2 className="text-3xl mb-1 font-semibold text-zinc-300 capitalize">
            to chat enter a username 😊
          </h2>

          <Form />
          <Disclaimer />
        </div>
      </section>
    </main>
  );
}
