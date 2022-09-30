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

function ProjectsSlider() {
  const data = projects;
  return (
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
                <div className="featuresM">
                  <span>Features</span>
                  {item.features.map((item) => (
                    <span className="featuresSpan">{item}</span>
                  ))}
                </div>
                <div className="linksM">
                  <a href={item.github} target="_blank">
                    <GitHub className="iconM" />
                  </a>
                  <a href={item.live} target="_blank">
                    <Laptop className="iconM" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProjectsSlider;
