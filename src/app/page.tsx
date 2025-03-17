import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 gap-18 sm:p-20">
      <Image
        src="/img/logo-light.png"
        alt="Zaur Tango"
        width={800}
        height={800}
        layout="stretch"
        objectFit="cover"
      />
      <p className="text-sm md:text-2xl tracking-[10px]">COMING SOON...</p>
    </div>
  );
}
