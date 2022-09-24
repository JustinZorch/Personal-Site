import "./topbar.scss";
import {
  PhoneAndroid,
  MailOutline,
  Home,
  LinkedIn,
  GitHub,
  Article,
} from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen, setCv }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="jlvl" href="#intro">
            <div className="justin">
              <span className="j">J</span>
              <div className="ustin">
                <span>u</span>
                <span>s</span>
                <span>t</span>
                <span>i</span>
                <span>n</span>
              </div>
            </div>
            <div className="lance">
              <span className="">L</span>
              <div className="ance">
                <span>a</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
              </div>
            </div>
            <div className="victor">
              <span className="v">V</span>
              <div className="ictor">
                <span>i</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
              </div>
            </div>
            <div className="louckx">
              <span className="lx">L</span>
              <div className="ouckx">
                <span>o</span>
                <span>u</span>
                <span>c</span>
                <span>k</span>
                <span>x</span>
              </div>
            </div>
          </a>

          <div className="itemContainer">
            <PhoneAndroid className="icon" />
            <span>+31 6 8465 1416</span>
          </div>

          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>jlouckx@gmail.com</span>
          </div>

          <div className="itemContainer">
            <Home className="icon" />
            <span>Netherlands</span>
          </div>
        </div>

        <div className="right">
          <div className="cvContainer" onClick={() => setCv(true)}>
            <span>CV</span>
            <Article className="article">CV</Article>
          </div>

          <div className="linkedinContainer">
            <a
              href="https://www.linkedin.com/in/justin-louckx-511114165/"
              target="_blank"
            >
              <LinkedIn className="linkedin" />
            </a>
          </div>

          <div className="githubContainer">
            <a href="https://github.com/JustinZorch" target="_blank">
              <GitHub className="github" />
            </a>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
