export default function Services() {
  return (
    <>
      <section
        className="text-center grid grid-cols-1 lg:grid-cols-2 justify-center max-w-[1440px] w-full mx-auto"
        id="services"
      >
        <article className="text-DarkDesaturatedCyan bg-cover bg-no-repeat bg-center bg-[url('../public/images/desktop/image-graphic-design.jpg')]">
          <h2 className="font-serif text-3xl  mb-8 mt-80">Graphic design</h2>
          <p className="text-sm lg:text-lg whitespace-nowrap mb-14">
            Great design makes you memorable. We deliver <br /> artwork that
            underscores your brand message
            <br /> and captures potential clients’ attention.
          </p>
        </article>
        <article className="text-DarkBlue bg-cover bg-no-repeat bg-center bg-[url('../public/images/desktop/image-photography.jpg')]">
          <h2 className="font-serif text-3xl  mb-8 mt-80">Photography</h2>
          <p className="text-sm lg:text-lg whitespace-nowrap mb-14">
            Increase your credibility by getting the most
            <br /> stunning, high-quality photos that improve your
            <br /> business image.
          </p>
        </article>
      </section>
    </>
  );
}
