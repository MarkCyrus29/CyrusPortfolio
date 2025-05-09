import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import HeroImage from "./components/ui/hero-image";
import TechStack from "./components/ui/techstack";
import Aurora from "./animations/Aurora";
import { useEffect, useState } from "react";
import { Timeline } from "./components/ui/timeline-section/timeline";
import TimelineTitle from "./components/ui/timeline-section/timeline-title";
import TimelineContent from "./components/ui/timeline-section/timeline-content";
import SendEmail from "./components/ui/SendEmail";
import FadeContent from "./animations/FadeContent";
import Navbar from "./components/layout/navbar";
import instagramIcon from "./assets/navbar/instagram.svg";
import telegramIcon from "./assets/navbar/telegram.svg";
import facebookIcon from "./assets/navbar/facebook.svg";
import githubIcon from "./assets/navbar/github.svg";
import linkedinIcon from "./assets/navbar/linkedin.svg";
import tiktokIcon from "./assets/navbar/tiktok.svg";
import youtubeIcon from "./assets/navbar/youtube.svg";
import Loader from "./animations/Loader";
import Button from "./components/Button";
import { scrollToSection } from "./components/functions/scroll-to-section";
import Icon from "./components/Icon.jsx";
import Lenis from "lenis";

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (windowWidth > 768) {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } else return;
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Flatten the nested pixel array and combine with other assets
    const pixelImages = Array.from({ length: 14 }, (_, row) =>
      Array.from({ length: 16 }, (_, col) => {
        const x = col + 1;
        const y = row + 3;
        return `/pixels/image${x}x${y}.webp`;
      })
    ).flat();

    const techIcons = [
      "/tech-icons/css.svg",
      "/tech-icons/firebase.svg",
      "/tech-icons/git.svg",
      "/tech-icons/greensock.svg",
      "/tech-icons/html5.svg",
      "/tech-icons/javascript.svg",
      "/tech-icons/mui.svg",
      "/tech-icons/notedotjs.svg",
      "/tech-icons/react.svg",
      "/tech-icons/shadcnui.svg",
      "/tech-icons/tailwindcss.svg",
      "/tech-icons/typescript.svg",
      "/vite.svg",
    ];

    const allAssets = [...pixelImages, ...techIcons];
    const totalAssets = allAssets.length;
    let loadedCount = 0;

    const handleAssetLoad = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalAssets) * 100);
      setLoadingProgress(newProgress);

      if (loadedCount === totalAssets) {
        setIsLoading(false);
      }
    };

    allAssets.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad;
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="xs:overflow-x-hidden md:overflow-x-visible">
      {isLoading ? (
        <>
          <Loader progress={loadingProgress} />
        </>
      ) : (
        <div>
          <FadeContent
            className="h-full"
            blur={true}
            duration={800}
            initialOpacity={0}
          >
            <Aurora
              colorStops={["#5d275d", "#5d2741", "#5d275d"]}
              blend={1}
              amplitude={0.5}
              speed={1.5}
            />
            <div className="main-container">
              <div className=" min-w-0 min-h-screen flex justify-center">
                <Header />
                <main className="overflow-x-visible h-full scroll-container w-full flex flex-col justify-center items-center  will-change-transform">
                  <HeroSection />
                  <AboutSection />
                  <ProjectsSection />
                  <ContactSection />
                  <Footer />
                </main>
              </div>
            </div>
          </FadeContent>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="scroll-child h-max md:h-screen  flex items-center flex-col  justify-center md:w-[60%] xs:w-[90%]"
    >
      <div className="flex md:flex-row xs:flex-col xs:items-center justify-between w-full pb-10 pt-10 z-10 ">
        <FadeContent
          className="md:w-1/2 sm:w-1/3 w-full xs:pt-10 xs:pb-5 flex flex-col xs:items-center md:items-start "
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={800}
        >
          <div className="flex flex-col xs:justify-center xs:items-center md:items-start">
            <p className="xs:text-6xl sm:text-8xl font-bold text-center max-text-9xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] 2xl:text-[11rem] display ">
              WEB
            </p>
            <p className="xs:text-3xl sm:text-5xl font-bold text-center max-text-6xl md:text-5xl lg:text-[3.4rem] xl:text-[4.5rem] 2xl:text-[5rem] display ">
              DEVELOPER
            </p>
          </div>
          <p className="text-gray  text-lg 2xl:text-3xl">Mark Cyrus Serrano</p>
          <div className="h-full ">
            <div className="flex items-center  ">
              <Icon
                link="https://www.instagram.com/cyrus.srrn/"
                img={instagramIcon}
                alt="Instagram Icon"
              />
              <Icon
                link="https://t.me/cyrus_srrn"
                img={telegramIcon}
                alt="Telegram Icon"
              />
              <Icon
                link="https://www.linkedin.com/in/markcyrus-serrano"
                img={linkedinIcon}
                alt="LinkedIn Icon"
                customStyle="xs:!h-6 md:!h-5 2xl:!h-8"
              />
              <Icon
                link="https://www.facebook.com/cyrus.srrn"
                img={facebookIcon}
                alt="Facebook Icon"
              />
              <Icon
                link="https://github.com/MarkCyrus29"
                img={githubIcon}
                alt="Github Icon"
              />
            </div>
          </div>
          <div className="flex gap-2 p-1 pl-0 items-center xs:flex-col mt-1 md:flex-row">
            <Button
              className="bg-primary xs:text-xl "
              text="Let's Connect"
              handleClick={() => scrollToSection("contact-section")}
            ></Button>
            <Button
              handleClick={() => scrollToSection("project-section")}
              className="border-2 border-primary !py-1 !px-3.5"
              text="Projects"
            ></Button>
          </div>
        </FadeContent>
        <div className="flex xs:justify-center md:justify-end">
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
      className=" scroll-child relative flex items-center flex-row justify-center  lg:w-[75%] xs:w-[90%] "
    >
      <Timeline
        data={[
          {
            title: (
              <TimelineTitle
                link="https://qr-maker-nu.vercel.app/"
                name="QR Maker"
                techs={["Vite", "Reactjs", "Tailwindcss", "MUI"]}
              />
            ),
            content: (
              <TimelineContent
                desc="QR Maker. A sleek, customizable tool for creating and styling QR codes in seconds."
                src="/projects/1.mp4"
                link="https://qr-maker-nu.vercel.app/"
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://air-jordan-carousel.vercel.app/"
                name="Air Jordan"
                techs={["Vite", "Reactjs", "Tailwindcss", "GSAP + Lenis"]}
              />
            ),
            content: (
              <TimelineContent
                desc="Air Jordan. A dynamic showcase of Nike Air Jordan sneakers, powered by GSAP ScrollTrigger."
                src="/projects/2.mp4"
                link="https://air-jordan-carousel.vercel.app/"
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://threadspace.vercel.app/home"
                name="ThreadSpace"
                techs={[
                  "Vite",
                  "Reactjs",
                  "Tailwindcss",
                  "Framer Motion",
                  "Firebase",
                  "Cloudinary",
                ]}
              />
            ),
            content: (
              <TimelineContent
                desc="ThreadSpace. A modern social media platform for threaded discussions."
                src="/projects/3.mp4"
                link="https://threadspace.vercel.app/home"
              />
            ),
          },
          {
            title: (
              <TimelineTitle
                link="https://qr-maker-nu.vercel.app/"
                name="Marshalls"
                techs={["Vite", "Reactjs", "Tailwindcss", "Emailjs"]}
              />
            ),
            content: (
              <TimelineContent
                desc="Marshalls Tailoring. A showcase for a local tailor’s premium coats and how to reach them."
                src="/projects/4.mp4"
                link="https://qr-maker-nu.vercel.app/"
              />
            ),
          },
        ]}
      />
    </section>
  );
};
const AboutSection = () => {
  return (
    <section
      id="about-section"
      className=" p-8 md:w-[60%] xs:w-[90%]  xl:h-screen xs:h-max"
    >
      <FadeContent
        className="flex items-center flex-col justify-center"
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
        delay={200}
      >
        <p className="project-title array xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:[4rem] xs:text-[2.5rem] text-black dark:text-white max-w-9xl drop-shadow-[0px_0px_2px_var(--color-light),4px_6px_10px_var(--color-primary),-4px_-4px_10px_var(--color-analogous)] cursor-default text-center xs:mt-10">
          {"< About me />"}
        </p>
        <div className="flex flex-col md:w-[80%] text-justify">
          <div className="text-center mb-6">
            <p className="text-gray xs:text-sm md:text-base">
              Hi! I'm <u className="text-light">Mark Cyrus Serrano</u>, an
              18-year-old computer science student from the Philippines
              currently studying at De La Salle Lipa. With{" "}
              <u className="text-light">over 3 years</u> of self-driven
              experience in web development, I am passionate about creating
              modern, responsive websites and am eager to collaborate with
              clients on exciting projects.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-dark p-4 rounded-lg shadow-md">
              <div className="flex flex-row justify-between items-center">
                <h3 className="display xs:text-lg sm:text-xl md:text-2xl font-semibold">
                  Skills:
                </h3>
                <div className="flex  flex-row items-center">
                  <Icon
                    link="https://www.linkedin.com/in/markcyrus-serrano"
                    img={linkedinIcon}
                    alt="LinkedIn Icon"
                    customStyle="xs:!h-6 md:!h-5 2xl:!h-8"
                  />
                  <Icon
                    link="https://github.com/MarkCyrus29"
                    img={githubIcon}
                    alt="Github Icon"
                  />
                </div>
              </div>
              <p className="xs:text-base md:text-lg text-start">
                <li>Front-end development</li>
                <li>Frameworks like React </li>
                <li>Building user-friendly web experiences</li>
              </p>
            </div>
            <div className="bg-dark p-4 rounded-lg shadow-md">
              <div className="flex flex-row justify-between items-center">
                <h3 className="display xs:text-lg sm:text-xl md:text-2xl font-semibold">
                  Interests:
                </h3>
                <div className="flex  flex-row items-center">
                  <Icon
                    link="https://www.tiktok.com/@cyruss.mp3"
                    img={tiktokIcon}
                    alt="Tiktok Icon"
                  />
                  <Icon
                    link="https://www.youtube.com/@cyruss.mp3"
                    img={youtubeIcon}
                    alt="Youtube Icon"
                  />
                </div>
              </div>
              <p className="xs:text-base md:text-lg">
                <li>Playing the guitar</li>
                <li>Singing</li>
                <li>Content Creation</li>
              </p>
            </div>
          </div>
        </div>
      </FadeContent>
    </section>
  );
};
const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="scroll-child h-screen md:w-[60%] xs:w-[90%] flex items-center flex-row justify-between "
    >
      <SendEmail />
    </section>
  );
};
