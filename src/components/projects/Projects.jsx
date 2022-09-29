import { useState } from "react";
import "./projects.scss";
import {
  ArrowForwardIos,
  ArrowBackIos,
  GitHub,
  Laptop,
  GifBox,
  Close,
} from "@mui/icons-material";
import { projects } from "../../data";
import { useMediaQuery } from "react-responsive";

import ProjectsSlider from "./ProjectSlider";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gif, setGif] = useState(false);
  const [gifSourceM, setGifSourceM] = useState({
    gif: "",
    name: "",
    description: "",
    features: [],
  });

  const data = projects;

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };

  const handleClick = (direction) => {
    let dataLength = data.length - 1;

    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : dataLength)
      : setCurrentSlide(currentSlide < dataLength ? currentSlide + 1 : 0);
  };

  return (
    <div className="projectsContainer" id="projects">
      <h1>Projects</h1>
      <Mobile>
        <ProjectsSlider
          gif={gif}
          setGif={setGif}
          gifSourceM={gifSourceM}
          setGifSourceM={setGifSourceM}
        />
      </Mobile>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            {!gif ? (
              <>
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="featuresContainer">
                        <span>Features</span>
                        <ul className="features">
                          {item.features.map((feature) => (
                            <li>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="links"></div>
                    </div>
                  </div>
                  <div className="right">
                    <img className="mainImage" src={item.source} alt="" />

                    <div className="stacksContainer">
                      {item.stack.map((item) => (
                        <div className="stacks">
                          <img
                            className="stacksImg"
                            src={item.source}
                            alt=""
                            key={item.source}
                          ></img>
                          <span className="name">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="links">
                      <a href={item.github} target="_blank">
                        <GitHub className="icon" />
                      </a>
                      <a href={item.live} target="_blank">
                        <Laptop className="icon" />
                      </a>
                      <div className="gif" onClick={() => setGif(true)}>
                        <GifBox className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="gifContainer" onClick={() => setGif(false)}>
                  <img src={item.gif} className="gifImage" alt="" />
                  <Close className="icon" />
                  <span>{item.name} Site Demo</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="arrow backward"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="arrow forward"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
