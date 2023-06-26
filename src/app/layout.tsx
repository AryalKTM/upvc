
import "./globals.css";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/app/components";
import clsx from "clsx";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Roadshow uPvc",
  description: "Nepal's first uPVC Excursion Plant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={clsx(roboto.className, "bg-white")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
