import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Courses from "./components/courses/Courses";
import Projects from "./components/projects/Projects";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import { Close } from "@mui/icons-material";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cv, setCv] = useState(false);

  return (
    <div className="app">
      {cv ? (
        <>
          <div className="seeCV">
            <Close className="icon" onClick={() => setCv(false)} />
            <embed
              className="pdf"
              src="assets/Justin Louckx - Resume.pdf"
              width="80%"
              height="100%"
            />
          </div>
        </>
      ) : (
        <>
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setCv={setCv} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Intro />
            <Courses />
            <Projects />
            <References />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
