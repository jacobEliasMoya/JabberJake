"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaEllipsisH } from "react-icons/fa";

interface FormState {
  username: string | undefined;
  maxLength: number;
  hasJoined: boolean;
}

const Form = () => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    maxLength: 20,
    hasJoined: false,
  });

  const lengthErrorRenderer = () => {

    if(!formState.username) return;

    if (formState.maxLength <= formState.username?.length) {
      return(
        <p className="absolute left-1/2 -translate-x-1/2 top-full pt-4 text-red-400 font-sans">{`No more than ${formState.maxLength} characters`}</p>
      )
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(formState.username);
  }, [formState.username]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-row items-center gap-2 w-full max-w-2xl bg-zinc-800 rounded-3xl p-2 "
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

      {lengthErrorRenderer()}

    </form>

    
  );
};

export default Form;
