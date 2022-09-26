import CoursesList from "./CoursesList";
import "./courses.scss";
import { useEffect, useState } from "react";
import {
  backendCourses,
  frontendCourses,
  mlCourses,
  allCourses,
} from "../../data";
import { Zoom } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

export default function Courses() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState(allCourses);

  //can add this to a database and collect and produce dynamically
  const list = [
    { id: "all", title: "All" },
    { id: "backend", title: "Backend" },
    { id: "frontend", title: "Frontend" },
    { id: "ml", title: "ML" },
  ];

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };

  useEffect(() => {
    switch (selected) {
      case "all":
        setData([...allCourses]);
        break;
      case "backend":
        setData([...backendCourses]);
        break;
      case "frontend":
        setData([...frontendCourses]);
        break;
      case "ml":
        setData([...mlCourses]);
        break;
      default:
        setData([...allCourses]);
    }
  }, [selected]);

  return (
    <div className="courses" id="courses">
      <h1>Courses</h1>
      <Mobile>
        <div className="containerM">
          {data.map((item, index) => (
            <Zoom delay={index * 300} key={selected + "::" + item.url}>
              <div className="itemM">
                <img src={item.img} alt={item.title} id={index}></img>
                <a className="linkM" href={item.url} target="_blank">
                  <h3>{item.title}</h3>
                </a>
              </div>
            </Zoom>
          ))}
        </div>
        <ul className="selectionM">
          {list.map((item, index) => (
            <CoursesList
              key={index}
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </Mobile>
      <Desktop>
        <ul>
          {list.map((item, index) => (
            <CoursesList
              key={index}
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((item, index) => (
            <Zoom delay={index * 300} key={selected + "::" + item.url}>
              <div className="item">
                <img src={item.img} alt={item.title} id={index}></img>
                <a href={item.url} target="_blank">
                  <h3>{item.title}</h3>
                </a>
              </div>
            </Zoom>
          ))}
        </div>
      </Desktop>
    </div>
  );
}
