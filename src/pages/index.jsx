import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../public/images/desktop/image-header.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center ">
        <Hero />
      </div>
      <About />
      <Services />
      <Projects />
    </>
  );
}
