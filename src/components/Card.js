import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Card = ({ List }) => {
  const getDate = (d, isCodeChef = false) => {
    if (isCodeChef) {
      d = d.replace(" UTC", ".000Z");
    }
    var date_temp = new Date(d);
    var date = date_temp.toLocaleString("en-US");
    var datearray = date.split("/");
    var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
    return newdate.replace(",", "    ");
  };
  const getduration = (sec_num) => {
    return Math.floor(sec_num / 3600) + " Hrs";
  };
  const getImage = (site) => {
    var url = "";
    switch (site) {
      case "CodeChef":
        url =
          "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg";
        break;
      case "CodeForces":
        url =
          "https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg";
        break;
      case "LeetCode":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
        break;
      case "AtCoder":
        url = "https://avatars.githubusercontent.com/u/7151918?s=200&v=4";
        break;
      case "HackerRank":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png";
        break;
      case "HackerEarth":
        url =
          "https://yt3.ggpht.com/ytc/AAUvwngkLcuAWLtda6tQBsFi3tU9rnSSwsrK1Si7eYtx0A=s176-c-k-c0x00ffffff-no-rj";
        break;
      case "Kick Start":
        url =
          "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip";
        break;
      case "TopCoder":
        url =
          "https://images.ctfassets.net/b5f1djy59z3a/3MB1wM9Xuwca88AswIUwsK/dad472153bcb5f75ea1f3a193f25eee2/Topcoder_Logo_200px.png";
        break;
      default:
    }
    return url;
  };
  function ISODateString(date) {
    const d = new Date(date);
    d.setHours(d.getHours() + 5);
    d.setMinutes(d.getMinutes() + 30);
    const text = d.toISOString();
    const myArray = text.split(".");
    const t = myArray[0] + "+05:30";
    return t;
  }
  const openCalander = (contest) => {
    var st = ISODateString(contest.start_time);
    var end = ISODateString(contest.end_time);
    var uri = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(
      contest.name
    )}&dates=${st}/${end}&details=Your reminder is set by Contests. 
    Contest URL: ${
      contest.url
    }`;
    console.log("uri: " + uri);
    window.open(uri);
  };
  return (
    <>
      {List.map((curr, i) => {
        return (
          <div
            className="card flex-row text-center"
            style={{ alignItems: "center" }}
            key={i}
          >
            <div style={{ margin: "25px" }}>
              <img
                className="card-img-left example-card-img-responsive"
                src={getImage(curr.site)}
                style={{
                  height: "75px",
                  width: "75px",
                }}
                alt={curr.site}
              />
            </div>

            <div className="card-body">
              <h4 className="card-title h5 h4-sm">{curr.name}</h4>
              <h6 className="card-text">
                <div>
                  Start:
                  {getDate(curr.start_time, curr.site === "code_chef")}
                  <p>
                    End:
                    {getDate(curr.end_time, curr.site === "code_chef")}
                    <br />
                    Duration:
                    {getduration(curr.duration)}
                  </p>
                </div>
              </h6>
              <div className="buttons">
                <a
                  type="button"
                  className="btn btn-outline-primary btn-sm me-2 "
                  href={curr.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Contest
                </a>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Add to calendar"
                  onClick={() => openCalander(curr)}
                >
                  <i class="fa-solid fa-calendar"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
