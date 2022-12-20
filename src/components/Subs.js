import React, { useState, useEffect } from "react";
import * as localForage from "localforage";
const Subs = () => {
  const [list, setlist] = useState([]);
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

  const getdata = () => {
    localForage.getItem("platforms", function (err, value) {
      if (err) console.log(err);
      setlist(value);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleChange = (event, index) => {
    let newPlatforms = [...list];
    newPlatforms[index] = {
      ...list[index],
      isSubscribed: !list[index].isSubscribed,
    };
    setlist(newPlatforms);
    localForage.setItem("platforms", newPlatforms);
    console.log(newPlatforms);
  };
  return (
    <>
      <div className="form">
        <ul class="list-group mb-0">
          {list.map((curr, i) => {
            return (
              <li
                class="list-group-item d-flex align-items-center border-0 mb-2 rounded "
                style={{ backgroundColor: "#f4f6f7" }}
                key={i}
              >
                <img
                  className="card-img-left example-card-img-responsive"
                  src={getImage(curr.platform)}
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  alt={curr}
                />
                <div className="me-auto col-9 text-center ">
                  <h4 className="card-title h5 h4-sm">{curr.platform}</h4>
                </div>
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value={curr.platform}
                  aria-label="..."
                  checked={curr.isSubscribed}
                  onChange={(e) => handleChange(e, i)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Subs;
