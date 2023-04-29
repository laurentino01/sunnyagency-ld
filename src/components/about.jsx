import Image from "next/image";
import egg from "../public/images/desktop/image-transform.jpg";
import stand from "../public/images/desktop/image-stand-out.jpg";

export default function About() {
  return (
    <>
      <section
        className="max-w-[1440px] w-full mx-auto lg:flex lg:flex-row-reverse items-center"
        id="about"
      >
        <Image src={egg} alt="Egg photo" className="mx-auto lg:w-[50%]" />
        <div className="px-7 lg:px-16 py-14 text-center mx-auto lg:text-left  lg:w-[50%]">
          <h3 className="whitespace-nowrap md:text-4xl   text-2xl font-serif mb-4 text-VeryDarkDesaturatedBlue">
            Transform your <br /> brand
          </h3>
          <p className="text-DarkGrayishBlue mb-4 mx-auto lg:mx-0 max-w-[410px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <div className="relative">
            <a
              href="#"
              className="font-serif  text-center relative uppercase text-md text-VeryDarkDesaturatedBlue z-10"
            >
              Learn more
            </a>
            <div className="bg-Yellow opacity-50 absolute h-[10px] lg:mx-0 w-32 lg:-left-1 right-1/4 left-1/4 mx-auto top-4 z-0 rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] w-full mx-auto lg:flex  items-center">
        <Image src={stand} alt="Egg photo" className="mx-auto lg:w-[50%]" />
        <div className="px-7 py-14 lg:px-28 lg:text-left text-center mx-auto lg:w-[50%]">
          <h3 className="whitespace-nowrap md:text-4xl text-2xl  font-serif mb-4 text-VeryDarkDesaturatedBlue">
            Stand out to the right
            <br /> audience
          </h3>
          <p className="text-DarkGrayishBlue mb-4 mx-auto lg:mx-0 max-w-[410px]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="relative ">
            <a
              href="#"
              className="font-serif relative  uppercase text-md text-VeryDarkDesaturatedBlue z-10"
            >
              Learn more
            </a>
            <div className="bg-SoftRed opacity-50 absolute h-[10px] w-32 lg:-left-1 lg:mx-0 right-1/4 left-1/4 mx-auto top-4 z-0 rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
}
