import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Orb from "../../animations/Orb";
function SendEmail() {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8mqr2f",
        "template_6xfqh8p",
        form.current,
        "371mgpqs0Yv_i3aP7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          {
            showAlert && (
              // <Alert
              //   message="Sorry, we encountered an error while sending your message."
              //   onClose={closeAlert}
              // />
              <></>
            );
          }
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full h-full flex relative flex-col justify-center items-center">
        <Orb
          hoverIntensity={0.75}
          rotateOnHover={true}
          hue={260}
          forceHoverState={false}
        />
        <form
          className="flex flex-col justify-center items-center text-center "
          ref={form}
          onSubmit={sendEmail}
        >
          <p className="array mb-5 xs:text-lg md:text-5xl font-bold z-10">
            Send me a Message
          </p>
          <input
            placeholder="Full name"
            className="form-input xs:text-sm sm:text-base"
            type="text"
            name="user_name"
            required
          />
          <input
            placeholder="Email / Phone Number"
            className="form-input  xs:text-sm sm:text-base"
            type="text"
            name="user_email"
            required
          />
          <textarea
            placeholder="Message"
            cols="20"
            rows="3"
            className="form-input resize-none  xs:text-sm sx:text-base"
            name="message"
            required
          ></textarea>

          <input
            className="cursor-pointer py-1 px-2 border z-10"
            type="submit"
            value="Send Message"
          />
        </form>
        <a
          href="https://calendly.com/markcyrus-serrano/30min"
          target="_blank"
          className="cursor-pointer z-10"
        >
          Schedule a meeting with me
        </a>
      </div>
    </>
  );
}

export default SendEmail;
