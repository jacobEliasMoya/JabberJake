"use client";

import { Lexend } from "next/font/google";
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

  const lengthRenderer = () => {
    const { username, maxLength } = formState;

    const length = username?.length;

    return (
      <p className="absolute left-1/2 -translate-x-1/2 top-full text-green-200 pt-4 font-sans">
        {`${length} /${maxLength}`}
      </p>
    );
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
        maxLength={formState.maxLength}
        className="w-full p-2 outline-none resize-none"
      />

      <button
        type="submit"
        className="bg-zinc-700 hover:bg-zinc-900 rounded-2xl w-max p-2 cursor-pointer"
      >
        {formState.username ? <FaArrowUp /> : <FaEllipsisH />}
      </button>

      {lengthRenderer()}
    </form>
  );
};

export default Form;
