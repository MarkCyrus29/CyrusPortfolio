import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Button from "./components/ui/button";
import HeroImage from "./components/ui/hero-image";
import TechStack from "./components/ui/techstack";
import Aurora from "./animations/Aurora";
import { useEffect } from "react";
import Lenis from "lenis";
import { Timeline } from "./components/ui/timeline-section/timeline";
import TimelineTitle from "./components/ui/timeline-section/timeline-title";
import TimelineContent from "./components/ui/timeline-section/timeline-content";
import qrMaker from "./assets/projects/qr-maker.png";
import SendEmail from "./components/ui/SendEmail";
import FadeContent from "./animations/FadeContent";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="main-container">
        <Aurora
          colorStops={["#5d275d", "#5d2741", "#5d275d"]}
          blend={0.7}
          amplitude={0.5}
          speed={1}
        />
        <div className="min-w-0 min-h-dvh flex justify-center">
          <main className="min-w-[60%] max-w-[60%] flex flex-col ">
            <Header />

            <HeroSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </FadeContent>
  );
}

export default App;

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-dvh flex items-center flex-col justify-center"
    >
      <div className="flex flex-row items-center justify-between w-full pb-10 pt-10 z-10 ">
        <div className="">
          <h1 className="max-text-9xl md:text-9xl">WEB</h1>
          <h1 className="max-text-6xl md:text-6xl">DEVELOPER</h1>
          <p className=" text-gray mb-2">Mark Cyrus Serrano</p>
          <Button
            title="Contact me"
            handleClick={() => console.log("clicked!")}
          />
        </div>
        <div className="">
          <HeroImage />
        </div>
      </div>
      <TechStack />
    </section>
  );
};
const ProjectsSection = () => {
  return (
    <section
      id="project-section"
      className=" flex items-start flex-row justify-between"
    >
      <Timeline
        data={[
          {
            title: (
              <TimelineTitle
                link="https://qr-maker-nu.vercel.app/"
                name="QR Maker"
                techs="Vite, Reactjs, Tailwindcss, MUI"
              />
            ),
            content: (
              <TimelineContent
                desc="QR Maker. A sleek, customizable tool for creating and styling QR codes in seconds."
                image={qrMaker}
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://qr-maker-nu.vercel.app/"
                name="Air Jordan"
                techs="Vite, Reactjs, Tailwindcss, GSAP + Lenis"
              />
            ),
            content: (
              <TimelineContent
                desc="Air Jordan. A dynamic showcase of Nike Air Jordan sneakers, powered by GSAP ScrollTrigger."
                image={qrMaker}
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://threadspace.vercel.app/home"
                name="ThreadSpace"
                techs="Vite, Reactjs, Tailwindcss, Framer Motion, Firebase, Cloudinary"
              />
            ),
            content: (
              <TimelineContent
                desc="ThreadSpace. A modern social media platform for threaded discussions."
                image={qrMaker}
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://qr-maker-nu.vercel.app/"
                name="Marshalls"
                techs="Vite, Reactjs, Tailwindcss, Emailjs"
              />
            ),
            content: (
              <TimelineContent
                desc="Marshalls Tailoring. A showcase for a local tailor’s premium coats and how to reach them."
                image={qrMaker}
              />
            ),
          },
        ]}
      />
    </section>
  );
};
const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="h-dvh flex items-center flex-row justify-between "
    >
      <SendEmail />
    </section>
  );
};
