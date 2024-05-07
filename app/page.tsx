import GifsLayout from "@/components/GifsLayout";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NavBar */}
      <Navbar />
      {/* Banner */}
      <Image
        className="mt-2 rounded w-full"
        src="/banner.gif"
        alt="banner"
        width={38}
        height={24}
      />
      {/* GIFS */}
      <GifsLayout />
      {/* Footer */}
    </main>
  );
}
