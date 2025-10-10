import Form from "@/components/organisms/NewUserForm";
import Disclaimer from "@/components/atoms/Disclaimer";
import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-screen flex flex-col md:flex-row">
      <Aside />

      <section className="w-full p-4 pb-14 md:pb-4 flex items-end flex-col justify-between relative h-11/12 md:h-full">
        <Header />

        <div className="w-full mx-auto flex items-center flex-col justify-end md:justify-center gap-4 h-full">
          <h2 className="text-xl md:text-3xl font-semibold text-zinc-300 capitalize">
            to chat enter a username
          </h2>
          <Form />
        </div>
      </section>
    </main>
  );
}
