import CoursesList from "./CoursesList";
import "./courses.scss";
import { useEffect, useState } from "react";
import {
  backendCourses,
  frontendCourses,
  mlCourses,
  allCourses,
} from "../../data";
import {
  Bounce,
  Slide,
  Fade,
  Flip,
  Hinge,
  Roll,
  Zoom,
} from "react-awesome-reveal";

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
    </div>
  );
}
