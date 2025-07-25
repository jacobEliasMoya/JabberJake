import { FaArrowUp } from "react-icons/fa";

const Form = () => {
  return (
    <form
      action=""
      className="flex flex-col items-end gap-2 w-full bg-zinc-800 rounded-3xl p-2 "
    >
      <textarea
        name=""
        id=""
        className="w-full p-2 outline-none resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-zinc-700 hover:bg-zinc-900 rounded-2xl w-max p-2 cursor-pointer"
      >
        <FaArrowUp />
      </button>
    </form>
  );
};

export default Form;
