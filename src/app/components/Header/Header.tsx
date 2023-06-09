import Image from "next/image";
import Navigation from "./Navigation";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="flex flex-row justify-between items-center container mx-auto py-2">
        <div>
          <Image src={Logo} alt="UPVC" width={48} height={65} />
        </div>
        <div>
          <ul className="flex flex-row gap-10 font-medium text-xl">
            <Navigation />
          </ul>
        </div>
        <div>
          <Link href="">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
