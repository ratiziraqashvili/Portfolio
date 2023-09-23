import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

type Inputs = {
  example: string;
  exampleRequired: string;
};
type Props = {};

function ContactMe() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(form.current){
      emailjs.sendForm(
        "service_ba762pu",
        "template_x0r42hv",
        form.current,
        "uZ1UIY49XxqIXpFif"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        () => {
          toast.error("Error sending email.");
        }
      );
    }

 

  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="animate-pulse absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold pt-80 md:pt-52 text-center">
          Contact Me
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">+995593753690</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">rziraqashvili@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">Tbilisi</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              required
              placeholder="Name"
              className="contactInput"
              name="from_name"
              type="text"
            />
            <input
              required
              name="user_email"
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            required
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            required
            name="message"
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
