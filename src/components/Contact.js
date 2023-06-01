import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import Navbar from "./Navbar";
import contactcss from "../assets/css/contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b8b9ehn",
        "template_pfie5am",
        form.current,
        "11NwVPPG13gs8If6K"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className={contactcss.contact_form}>
        <h1 className={contactcss.contact_header}>Conctact us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label for="name">Name:</label>
          <input
          name="user_name"
            type="text"
            className={contactcss.form_horizantal}
            required=""
          />
          <label for="email">Email:</label>
          <input
            className={contactcss.form_horizantal}
            type="email"
            id="email"
            name="user_email"
            required=""
          />
          <label for="message">Message:</label>
          <textarea id="message" name="message" required=""></textarea>
          <button type="submit" value="Send" >Submit</button>
          <ul className={contactcss.contact_list}>
            <li className={contactcss.list_item}>
              <span className={contactcss.contact_text}>
                <LocationOnIcon className={contactcss.icon} />
                Cite Elghazela, Ariana
              </span>
            </li>
            <li className={contactcss.list_item}>
              <span className={contactcss.contact_text}>
                <PublicIcon className={contactcss.icon} />
                http://www.tac-tic.net
              </span>
            </li>
            <li className={contactcss.list_item}>
              <span className={contactcss.contact_text}>
                <LocalPhoneIcon className={contactcss.icon} />
                (+216) 36 368 883
              </span>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Contact;
