import "./coursesList.scss";

export default function CoursesList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "coursesList active" : "coursesList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
