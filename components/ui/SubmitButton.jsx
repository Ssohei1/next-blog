"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="cursor-pointer rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-800 disabled:bg-gray-400"
      type="submit"
      disabled={pending}
    >
      ثبت
    </button>
  );
};

export default SubmitButton;
