import Image from "next/image";
import { Inter } from "next/font/google";
import mobileBackground from "../../public/assets/images/background-pattern-mobile.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{maxWidth: "1440px"}} className="h-screen bg-cover bg-center">
      <Image
        src={mobileBackground}
        alt="Mobile Background"
        className="hidden md:block object-cover"
      />
    </div>
  );
}
