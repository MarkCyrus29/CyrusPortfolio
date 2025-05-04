import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Orb from "../../animations/Orb";
import FadeContent from "../../animations/FadeContent";

function SendEmail() {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });
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
          setToast({
            show: true,
            message: "Message sent successfully!",
            isSuccess: true,
          });
          form.current.reset();
          setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
          }, 5000);
        },
        (error) => {
          setToast({
            show: true,
            message: "Failed to send message. Please try again.",
            isSuccess: false,
          });
        }
      );
  };

  return (
    <>
      <FadeContent
        className="w-full h-full flex relative flex-col justify-center items-center"
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
        delay={200}
      >
        {toast.show && (
          <div
            className={`fixed bottom-5 right-0 p-3 rounded-md shadow-lg z-50 
            ${toast.isSuccess ? "bg-green-500" : "bg-red-500"} text-white`}
          >
            {toast.message}
            <button
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              className="ml-4"
            >
              ×
            </button>
          </div>
        )}

        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={260}
          forceHoverState={false}
        />

        <form
          className="flex flex-col justify-center items-center text-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <p className="array mb-5 xs:text-3xl md:text-5xl font-bold z-10 drop-shadow-[0px_0px_2px_var(--color-light),4px_6px_10px_var(--color-primary),-4px_-4px_10px_var(--color-analogous)]">
            {"< Get in Touch />"}
          </p>

          <input
            placeholder="Name"
            className="form-input"
            type="text"
            name="user_name"
            required
          />

          <input
            placeholder="Email"
            className="form-input"
            type="text"
            name="user_email"
            required
          />

          <textarea
            placeholder="Message"
            cols="20"
            rows="2"
            className="form-input resize-none"
            name="message"
            required
          ></textarea>

          <input
            className="contact-button mt-2"
            type="submit"
            value="Send Message"
          />
        </form>

        <p className="py-1 text-gray">or</p>

        <a
          href="https://calendly.com/markcyrus-serrano/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Schedule a meeting
        </a>
      </FadeContent>
    </>
  );
}

export default SendEmail;
