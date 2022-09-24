import "./intro.scss";
import {
  KeyboardArrowDown,
  School,
  Laptop,
  People,
  ContactMail,
} from "@mui/icons-material";

import { init } from "ityped";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const textRef = useRef();

  const [mainImage, setMainImage] = useState("assets/Justin Pngs/Front.png");

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Engineer", "Developer", "Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div class="main">
          <div class="circle">
            <a href="#projects">
              <div
                className="features projects"
                onMouseOver={() =>
                  setMainImage("assets/Justin Pngs/Top-Left.png")
                }
                onMouseOut={() => setMainImage("assets/Justin Pngs/Front.png")}
              >
                <Laptop className="icon laptop" />
                <span>Projects</span>
              </div>
            </a>
          </div>

          <div class="circle">
            <a href="#references">
              <div
                className="features references"
                onMouseOver={() =>
                  setMainImage("assets/Justin Pngs/Top-Right.png")
                }
                onMouseOut={() => setMainImage("assets/Justin Pngs/Front.png")}
              >
                <People className="icon people" />
                <span>References</span>
              </div>
            </a>
          </div>

          <div class="circle">
            <a href="#courses">
              <div
                className="features school"
                onMouseOver={() =>
                  setMainImage("assets/Justin Pngs/Side-Left.png")
                }
                onMouseOut={() => setMainImage("assets/Justin Pngs/Front.png")}
              >
                <School className="icon school" />
                <span>Courses</span>
              </div>
            </a>
          </div>
          <div class="circle">
            <a href="#contact">
              <div
                className="features contacts"
                onMouseOver={() =>
                  setMainImage("assets/Justin Pngs/Side-Right.png")
                }
                onMouseOut={() => setMainImage("assets/Justin Pngs/Front.png")}
              >
                <ContactMail className="icon contactMail" />
                <span>Contact</span>
              </div>
            </a>
          </div>
          <div className="imgContainer">
            <img
              src={mainImage}
              alt="Profile of Justin Louckx"
              className="mainImage"
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Justin Louckx</h1>
          <h3>
            Software <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#courses">
          <KeyboardArrowDown className="arrowDownward" />
        </a>
      </div>
    </div>
  );
}
