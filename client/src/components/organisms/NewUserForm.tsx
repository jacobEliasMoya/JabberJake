"use client";

import React, { useState } from "react";
import { FaArrowUp, FaEllipsisH } from "react-icons/fa";
import clsx from "clsx";
interface FormState {
  username: string | undefined;
  maxLength: number;
  hasJoined: boolean;
}

const Form = () => {
  // setting state
  const [formState, setFormState] = useState<FormState>({
    username: "",
    maxLength: 20,
    hasJoined: false,
  });

  // destructuring state for ease of use
  const { username, maxLength } = formState;

  const lengthRenderer = () => {
    const length = username?.length;
    const lengthIndicationColor =
      username?.length === maxLength ? "text-red-400" : "text-green-300";

    return (
      <p
        className={clsx(
          "absolute left-1/2 -translate-x-1/2 top-full  pt-4 font-sans",
          lengthIndicationColor
        )}
      >
        {`${length} / ${maxLength}`}
      </p>
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = JSON.stringify({
      username: username,
    });

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="http://localhost:1337/users"
      method="POST"
      className="relative flex flex-row items-center gap-2 w-full max-w-2xl bg-zinc-800 rounded-3xl p-2 "
    >
      <input
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormState({
            ...formState,
            username: e.target.value.replace(/\s+/g, ""),
          });
        }}
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