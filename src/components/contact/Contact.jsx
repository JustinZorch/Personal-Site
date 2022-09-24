import "./contact.scss";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { init } from "ityped";
import { ThumbUpAlt } from "@mui/icons-material";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [robot, setRobot] = useState(false);

  const formRef = useRef();
  const textRef = useRef();
  const firstUpdate = useRef(true);

  useEffect(() => {
    console.log("running useEffect");

    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    init(textRef.current, {
      showCursor: true,
      backDelay: 15000,
      strings: [
        "Thanks for visiting  my site. If you want to get in contact please drop me a message.",
        "Still here? Well in that case lets crack some dad jokes. Stay tuned!",
        "What do you call a factory that makes okay products? A satisfactory.",
        "How does the moon cut his hair? Eclipse it.",
        "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
        "A guy walks into a bar...and he was disqualified from the limbo contest.",
        "I ordered a chicken and an egg from Amazon. I'll let you know...",
        "Okay thats all folks, don't forget to get in contact.",
      ],
    });
  }, [robot]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setMessage(true);
      },
      (error) => {
        console.log(error.text);
        setErrorMessage(true);
      }
    );

    event.target.reset();
  };

  return (
    <div className="contact" id="contact" onMouseOver={() => setRobot(true)}>
      <div className="left">
        <img src="assets/MailRobot.svg" alt=""></img>
        <p className="message" ref={textRef}></p>
      </div>
      <div className="right">
        {!message && (
          <>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
              <input
                type="text"
                placeholder="Full Name"
                required
                name="user_name"
              />
              <input
                type="text"
                placeholder="Email"
                required
                name="user_email"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
              <textarea
                placeholder="Message"
                required
                name="message"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </>
        )}
        {message && (
          <>
            <div className="thanks">
              <ThumbUpAlt className="icon" />
              <span>Thanks, I will reply ASAP :)</span>
            </div>
          </>
        )}
        {errorMessage && <span>Oops, something went wrong :(</span>}
      </div>
    </div>
  );
}
