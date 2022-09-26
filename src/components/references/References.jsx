import "./references.scss";
import { LinkedIn, AssuredWorkload, Close } from "@mui/icons-material";
import { references } from "../../data";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function References() {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const [fullscreen, setFullscreen] = useState({
    clicked: false,
    id: "",
    name: "",
    title: "",
    img: "a",
    linkedin: "",
    companyName: "",
    company: "",
    location: "",
    desc: "",
  });

  console.log(fullscreen);

  const data = references;
  return (
    <div className="references" id="references">
      <Mobile>
        {!fullscreen.clicked ? (
          <>
            <h1 className="headingM">References</h1>
            <div className="containerM">
              {data.map((item) => (
                <div
                  className="cardM"
                  onClick={() =>
                    setFullscreen({
                      clicked: true,
                      id: item.id,
                      name: item.name,
                      title: item.title,
                      img: item.img,
                      linkedin: item.linkedin,
                      companyName: item.companyName,
                      company: item.company,
                      location: item.location,
                      desc: item.desc,
                    })
                  }
                >
                  <img src={item.img} alt="" />
                  <h2>{item.name}...</h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="containerMFS">
              <div className="topMFS">
                <img className="companyMFS" src={fullscreen.company} alt="" />
                <img className="userMFS" src={fullscreen.img} alt="" />
                {fullscreen.id !== 3 ? (
                  <>
                    <a href={fullscreen.linkedin} target="_blank">
                      <LinkedIn className="icon" />
                    </a>
                  </>
                ) : (
                  <>
                    <a href={fullscreen.linkedin} target="_blank">
                      <AssuredWorkload className="icon" />
                    </a>
                  </>
                )}
              </div>
              <div className="centerMFS">{fullscreen.desc}</div>
              <div className="bottomMFS">
                <h3>{fullscreen.name}</h3>
                <h4 className="locationMFS">{fullscreen.location}</h4>
                <h4>{fullscreen.title}</h4>
                <h4>{fullscreen.companyName}</h4>
              </div>
            </div>
            <Close
              className="iconMFS"
              onClick={() => setFullscreen({ clicked: false })}
            />
          </>
        )}
      </Mobile>
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
