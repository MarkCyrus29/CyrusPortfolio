import React from "react";
import instagramIcon from "../../assets/navbar/instagram.svg";
import telegramIcon from "../../assets/navbar/telegram.svg";
import facebookIcon from "../../assets/navbar/facebook.svg";
import githubIcon from "../../assets/navbar/github.svg";
import linkedinIcon from "../../assets/navbar/linkedin.svg";

const Footer = () => {
  return (
    <footer className="w-[60%] flex flex-row justify-between items-center">
      <div className="array  animate-pulse ">
        <span className="font-bold text-primary text-3xl drop-shadow-[0px_0px_5px_var(--color-primary)]">
          Cyr
        </span>
        <span className="text-3xl drop-shadow-[0px_0px_5px_var(--color-light)]">
          .us
        </span>
      </div>
      <div className="flex gap-2 items-center ">
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
    </footer>
  );
};

export default Footer;
