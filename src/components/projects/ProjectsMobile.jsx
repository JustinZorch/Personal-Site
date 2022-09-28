import "./projectsmobiles.scss";
import ProjectsSlider from "./ProjectSlider";
import { projects } from "../../data";

export default function ProjectsMobile({ gif }) {
  const data = projects;
  return (
    <>
      <div className="sliderContainer">
        <ProjectsSlider gif={gif} data={data} />
      </div>
    </>
  );
}
