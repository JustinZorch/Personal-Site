import React from "react";
import "./projectslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-cards";
import { GitHub, Laptop, GifBox, Close } from "@mui/icons-material";
import { projects } from "../../data";

function ProjectsSlider(props) {
  const data = projects;
  return (
    <>
      {!props.gif ? (
        <>
          <div className="sliderProjects">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="projectsSlider"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="swiperSlide">
                  {item.id !== 4 ? (
                    <h3>{item.name}</h3>
                  ) : (
                    <h3 style={{ color: "black" }}>{item.name}</h3>
                  )}

                  <img
                    src={item.source}
                    alt="slider images"
                    className="images"
                  ></img>
                  <div className="detailsM">
                    <p>{item.description}</p>
                    <div className="linksM">
                      <a href={item.github} target="_blank">
                        <GitHub className="iconM" />
                      </a>
                      <a href={item.live} target="_blank">
                        <Laptop className="iconM" />
                      </a>

                      <div
                        className="gifM"
                        onClick={() => {
                          props.setGifSourceM({
                            gif: item.gif,
                            name: item.name,
                            description: item.description,
                            features: item.features,
                          });
                          props.setGif(true);
                        }}
                      >
                        <GifBox className="iconM" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div className="gifContainerM" onClick={() => props.setGif(false)}>
            <h2 className="headingGifM">{props.gifSourceM.name} Site Demo</h2>
            <img src={props.gifSourceM.gif} className="gifImageM" alt="" />
            <div className="detailsM">
              <p>{props.gifSourceM.description}</p>
            </div>
            <div className="featuresContainerM">
              <span>Features:</span>
              <ul className="featuresM">
                {props.gifSourceM.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
            <Close className="iconM" />
          </div>
        </>
      )}
    </>
  );
}

export default ProjectsSlider;
