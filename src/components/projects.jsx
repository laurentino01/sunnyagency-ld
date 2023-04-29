import Image from "next/image";
import emily from "../public/images/image-emily.jpg";
import thomas from "../public/images/image-thomas.jpg";
import jennie from "../public/images/image-jennie.jpg";

export default function Projects() {
  return (
    <>
      <section
        className="text-center bg-[#FFFBF8] py-32 max-w-[1440px] w-full mx-auto"
        id="projects"
      >
        <h2 className="text-GrayishBlue  text-xl lg:text-2xl tracking-widest font-serif uppercase ">
          Client testimonials
        </h2>
        <article className="grid grid-cols-1 lg:grid-cols-3 mt-20  lg:px-32">
          <div>
            <Image
              src={emily}
              alt="Picture of the author"
              width={70}
              className="rounded-full mx-auto "
            />
            <p className="text-VeryDarkGrayishBlue text-sm lg:text-lg lg:whitespace-nowrap mt-14 mb-8">
              We put our trust in Sunnyside and they <br />
              delivered, making sure our needs were met
              <br /> and deadlines were always hit.
            </p>
            <h6 className="text-VeryDarkDesaturatedBlue text-lg font-serif">
              Emily R.
            </h6>
            <p className="text-GrayishBlue">Marketing Director</p>
          </div>

          <div className="my-20 lg:my-0">
            <Image
              src={thomas}
              alt="Picture of the author"
              width={70}
              className="rounded-full mx-auto "
            />
            <p className="text-VeryDarkGrayishBlue text-sm lg:text-lg lg:whitespace-nowrap mt-14 mb-8">
              Sunnyside’s enthusiasm coupled with their <br />
              keen interest in our brand’s success made it <br /> a satisfying
              and enjoyable experience.
            </p>
            <h6 className="text-VeryDarkDesaturatedBlue text-lg font-serif">
              Thomas S.
            </h6>
            <p className="text-GrayishBlue"> Chief Operating Officer</p>
          </div>

          <div>
            <Image
              src={jennie}
              alt="Picture of the author"
              width={70}
              className="rounded-full mx-auto "
            />
            <p className="text-VeryDarkGrayishBlue text-sm lg:text-lg lg:whitespace-nowrap mt-14 mb-8">
              Incredible end result! Our sales increased <br />
              over 400% when we worked with Sunnyside.
              <br /> Highly recommended!
            </p>
            <h6 className="text-VeryDarkDesaturatedBlue text-lg font-serif">
              Jennie F.
            </h6>
            <p className="text-GrayishBlue"> Business Owner</p>
          </div>
        </article>
      </section>
    </>
  );
}
