"use client";

import { Bounce, toast } from "react-toastify";
import { useEffect } from "react";

const ToastHandler = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const message = localStorage.getItem("toastMessage");
      if (message) {
        toast.success(message, {
          className: "font-bold",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.removeItem("toastMessage");
      }
    }
  }, []);

  return null;
};

export default ToastHandler;
