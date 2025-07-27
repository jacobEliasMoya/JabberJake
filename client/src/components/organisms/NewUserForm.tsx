"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaEllipsisH } from "react-icons/fa";

interface FormState {
  username: string | undefined;
  hasJoined: boolean;
}

const Form = () => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    hasJoined: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(formState.username);
  }, [formState.username]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-end gap-2 w-full max-w-2xl bg-zinc-800 rounded-3xl p-2 "
    >
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormState({ ...formState, username: e.target.value });
        }}
        name=""
        id=""
        className="w-full p-2 outline-none resize-none"
      ></input>

      <button
        type="submit"
        className="bg-zinc-700 hover:bg-zinc-900 rounded-2xl w-max p-2 cursor-pointer"
      >
        {formState.username ? <FaArrowUp /> : <FaEllipsisH />}
      </button>
    </form>
  );
};

export default Form;
