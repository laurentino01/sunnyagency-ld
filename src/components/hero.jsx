import Image from "next/image";
import arrowDown from "../public/images/icon-arrow-down.svg";

export default function Hero() {
  return (
    <>
      <main className="flex items-center text-center flex-col  h-[90vh] relative">
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-White font-serif mt-24 tracking-[.3em] font-black">
          We are creatives
        </h1>
        <Image
          src={arrowDown}
          alt="Picture of the author"
          width={30}
          className="absolute left-1/2 top-[40%] "
        />
      </main>
    </>
  );
}
