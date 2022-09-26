import "./references.scss";
import { LinkedIn, AssuredWorkload } from "@mui/icons-material";
import { references } from "../../data";
import { useMediaQuery } from "react-responsive";

export default function References() {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };

  const data = references;
  return (
    <div className="references" id="references">
      <h1>References</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="company" src={d.company} alt="" />
              <img className="user" src={d.img} alt="" />
              {d.id !== 3 ? (
                <>
                  <a href={d.linkedin} target="_blank">
                    <LinkedIn className="icon" />
                  </a>
                </>
              ) : (
                <>
                  <a href={d.linkedin} target="_blank">
                    <AssuredWorkload className="icon" />
                  </a>
                </>
              )}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4 className="location">{d.location}</h4>
              <h4>{d.title}</h4>
              <h4>{d.companyName}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
