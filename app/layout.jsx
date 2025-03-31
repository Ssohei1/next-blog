import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import ToastHandler from "@/components/ui/ToastHandler";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-Ir" dir="rtl">
      <body className={`${vazir.className} `}>
        <Navbar />
        <div className="flex min-h-dvh flex-col justify-between">
          <ToastContainer rtl="false" />
          <ToastHandler className="font-bold" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
