import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Button from "./components/ui/button";
import HeroImage from "./components/ui/hero-image";
import TechStack from "./components/ui/techstack";

function App() {
  return (
    <>
      <div className="min-w-0 min-h-dvh flex justify-center">
        <main className="min-w-[60%] max-w-[60%] flex flex-col ">
          <Header />
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-dvh flex items-center flex-col justify-center"
    >
      <div className="flex flex-row items-center justify-between w-full h-dvh pt-10 z-10">
        <div className="">
          <h1 className="text-8xl">WEB</h1>
          <h1 className="text-6xl">DEVELOPER</h1>
          <p className="font-sans font-thin">Mark Cyrus Serrano</p>
          <Button
            title="Contact me"
            handleClick={() => console.log("clicked!")}
          />
        </div>
        <div className="">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
const ProjectsSection = () => {
  return (
    <section
      id="project-section"
      className="h-dvh flex items-start flex-row justify-between"
    >
      <TechStack />
    </section>
  );
};
const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="h-dvh flex items-center flex-row justify-between"
    ></section>
  );
};
