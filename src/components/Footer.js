import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import Logotop from "../components/Logotop";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {

  const [email, setEmail] = useState("");

  const getEmail = (event) =>
  {
    setEmail(event.target.value);
  }

  const sendEmail = (event) =>
  {
    event.preventDefault();
    emailjs
      .send(
        "service_cqjf2x8",
        "template_8mij6vo",
        {
          message: email
        },
        "Rq5F7kqqr58wSRO23"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <footer className="bg-darkGrayishBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-sm text-white md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/mappedroute/" target={"_blank"}>
              <img src={ig} alt="" class="h-8 m-1" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100090181692934"
              target={"_blank"}
            >
              <img src={fb} alt="" class="h-8 m-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <Logotop></Logotop>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="px-4 font-bold text-veryDarkBlue">
            Subscribe to newsletter!
          </p>
          <form onSubmit={sendEmail}>
            <div className="flex text-veryDarkBlue space-x-3">
              <input
                type="text"
                className="flex-1 px-4 my-4 rounded-full bg-veryLightGray focus:outline-none"
                placeholder="Enter email"
                onChange={getEmail}
              />
              <button
                className="px-4 font-bold text-veryDarkBlue rounded-full bg-veryLightGray hover:bg-white focus:outline-none"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>

          <div className="hidden text-sm mt-6 text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
