import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import HeroImage from "./components/ui/hero-image";
import TechStack from "./components/ui/techstack";
import Aurora from "./animations/Aurora";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Timeline } from "./components/ui/timeline-section/timeline";
import TimelineTitle from "./components/ui/timeline-section/timeline-title";
import TimelineContent from "./components/ui/timeline-section/timeline-content";
import SendEmail from "./components/ui/SendEmail";
import FadeContent from "./animations/FadeContent";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/layout/navbar";
import instagramIcon from "./assets/navbar/instagram.svg";
import telegramIcon from "./assets/navbar/telegram.svg";
import facebookIcon from "./assets/navbar/facebook.svg";
import githubIcon from "./assets/navbar/github.svg";
import linkedinIcon from "./assets/navbar/linkedin.svg";
import Loader from "./animations/Loader";
import SplitText from "./animations/SplitText";
import BlurText from "./animations/BlurText";
function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Flatten the nested pixel array and combine with other assets
    const pixelImages = Array.from({ length: 14 }, (_, row) =>
      Array.from({ length: 16 }, (_, col) => {
        const x = col + 1;
        const y = row + 3;
        return `/pixels/image${x}x${y}.jpeg`; // Removed redundant path prefix
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

    const projectVids = [
      "/projects/1.mp4",
      "/projects/2.mp4",
      "/projects/3.mp4",
      "/projects/4.mp4",
    ];

    const allAssets = [...pixelImages, ...techIcons, ...projectVids];
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
      img.onerror = handleAssetLoad; // Count even if some fail
    });

    // Fallback timeout in case some assets fail to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    AOS.init({
      offset: 100,
      duration: 1000, // Animation duration (ms)
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
    });

    return () => {
      window.lenis = null; // Cleanup
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Loader progress={loadingProgress} />
        </>
      ) : (
        <FadeContent
          className="h-full "
          blur={true}
          duration={800}
          easing="ease-out"
          initialOpacity={0}
        >
          <Aurora
            colorStops={["#5d275d", "#5d2741", "#5d275d"]}
            blend={1}
            amplitude={0.5}
            speed={1.5}
          />
          <div className="main-container ">
            <div className="min-w-0 min-h-dvh flex justify-center">
              <Header />
              <main className="scroll-container w-full flex flex-col justify-center items-center">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
              </main>
            </div>
          </div>
          <Navbar />
        </FadeContent>
      )}
    </>
  );
}

export default App;

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="scroll-child h-dvh flex items-center flex-col  justify-center md:w-[60%] xs:w-[90%]"
    >
      <div className="flex md:flex-row xs:flex-col md:items-center justify-between w-full pb-10 pt-10 z-10 ">
        <FadeContent
          className="md:w-1/2 sm:w-1/3 xs:pt-10 xs:pb-5 flex flex-col xs:items-center md:items-start "
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={800}
        >
          <div className="flex flex-col xs:justify-center xs:items-center md:items-start">
            <SplitText
              text="WEB"
              className="xs:text-6xl font-bold text-center max-text-9xl md:text-9xl display "
              delay={300}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeIn"
              threshold={0.2}
              rootMargin="-50px"
            />
            <SplitText
              text="DEVELOPER"
              className="xs:text-3xl font-bold text-center max-text-6xl md:text-6xl display "
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeIn"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          <BlurText
            text="Mark Cyrus Serrano"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-gray mb-2 text-lg"
          />
          <div className="h-full ">
            <div className="flex gap-2 xs:items-center md:items-start ">
              <a
                href="https://www.instagram.com/cyrus.srrn/"
                target="_blank"
                className="footer-link"
              >
                <img src={instagramIcon} alt="Instagram Icon" />
              </a>
              <a
                href="https://t.me/cyrus_srrn"
                target="_blank"
                className="footer-link "
              >
                <img src={telegramIcon} alt="Telegram Icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/markcyrus-serrano"
                target="_blank"
                className="footer-link "
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="!h-5" />
              </a>
              <a
                href="https://www.facebook.com/cyrus.srrn"
                target="_blank"
                className="footer-link "
              >
                <img src={facebookIcon} alt="Facebook Icon" />
              </a>
              <a
                href="https://github.com/MarkCyrus29"
                target="_blank"
                className="footer-link "
              >
                <img src={githubIcon} alt="Github Icon" />
              </a>
            </div>
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
      data-aos="fade-right"
      id="project-section"
      className="scroll-child relative flex items-center flex-row justify-between md:w-[70%] xs:w-[90%] "
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
      data-aos="fade-left"
      id="about-section"
      className="scroll-child h-dvh md:w-[60%] xs:w-[90%] flex items-center flex-col justify-center outline"
    >
      <BlurText
        text="About me"
        delay={150}
        animateBy="letters"
        direction="top"
        className="project-title array  text-lg md:text-[7rem] xs:text-[4.5rem] text-black dark:text-white max-w-9xl drop-shadow-[0px_0px_2px_var(--color-light),4px_6px_10px_var(--color-primary),-4px_-4px_10px_var(--color-analogous)] cursor-default text-center "
      />
      <FadeContent
        className=""
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
        delay={200}
      >
        Hi! I'm Mark Cyrus Serrano from the Philippines
      </FadeContent>
    </section>
  );
};
const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="scroll-child h-dvh md:w-[60%] xs:w-[90%] flex items-center flex-row justify-between "
    >
      <SendEmail />
    </section>
  );
};
