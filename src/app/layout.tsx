
import "./globals.css";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/app/components";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Roadshow uPVC",
  description: "Nepal's first uPVC Excursion Plant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={clsx(roboto.className, "bg-white min-w-[340px]")}>
        <Header />
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}
