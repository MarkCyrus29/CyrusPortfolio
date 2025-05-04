import React from "react";
import instagramIcon from "../../assets/navbar/instagram.svg";
import telegramIcon from "../../assets/navbar/telegram.svg";
import facebookIcon from "../../assets/navbar/facebook.svg";
import githubIcon from "../../assets/navbar/github.svg";
import linkedinIcon from "../../assets/navbar/linkedin.svg";
import CyrusLogo from "../ui/cyrus-logo";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer className="md:w-[60%] xs:w-[80%] xs:pb-2 flex xs:flex-col md:flex-row xs:justify-center md:justify-between  items-center z-50">
      <div className="flex flex-col items-center xs:my-2 md:my-0">
        <CyrusLogo />
        <p className="md:text-sm xs:text-xs text-gray md:my-1">
          © 2025 All rights reserved.
        </p>
      </div>
      <div className="flex items-center ">
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
    </footer>
  );
};

export default Footer;
