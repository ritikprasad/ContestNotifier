import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as localForage from "localforage";
import Card from "./Card";
const Home = () => {
  const [currentContest, setcurrentContest] = useState("24hours");
  const [mycontest, setmycontest] = useState([]);
  const [list, setlist] = useState([]);
  let platforms = [];
  function contests_in_24_hours(list) {
    const newlist = list.filter((contest) => {
      return contest.in_24_hours === "Yes" && contest.status === "BEFORE";
    });
    return newlist;
  }
  function ongoing(list) {
    const newlist = list.filter((curr) => {
      return curr.status === "CODING";
    });
    return newlist;
  }
  function upcoming(list) {
    const newlist = list.filter((contest) => {
      return contest.status === "BEFORE" && contest.in_24_hours === "No";
    });
    return newlist;
  }
  const GetData = async () => {
    try {
      const value = await localForage.getItem("contest");
      var subscribe = {};

      for (var pl of platforms) {
        subscribe[pl.platform] = pl.isSubscribed;
      }
      for (let i = 0; i < value.length; i++) {
        const name = value[i].site;
        if (subscribe[name]) {
          setmycontest(contests_in_24_hours(value));
          setlist((list) => [...list, value[i]]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    localForage.getItem("platforms", function (err, value) {
      if (err) console.log(err);
      platforms = value;
    });
    GetData();
  }, []);
  return (
    <>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic example"
        style={{ width: "100%" }}
      >
        <button
          type="button"
          class="btn btn-secondary button-12"
          onClick={() => {
            setmycontest(contests_in_24_hours(list));
            setcurrentContest("24hours");
          }}
          style={{
            textTransform: "none",
            backgroundColor: currentContest === "24hours" ? "#fff" : "#6c757d",
            color: currentContest === "24hours" ? "#222" : "#fff",
            borderColor: currentContest === "24hours" ? "#ffffff" : "#6c757d",
            borderRadius: 0,
            outline: "none",
            display: "block",
          }}
        >
          In 24 hours
        </button>
        <button
          type="button"
          class="btn btn-secondary button-12"
          onClick={() => {
            setmycontest(ongoing(list));
            setcurrentContest("ongoing");
          }}
          style={{
            textTransform: "none",
            backgroundColor: currentContest === "ongoing" ? "#fff" : "#6c757d",
            color: currentContest === "ongoing" ? "#222" : "#fff",
            borderColor: currentContest === "ongoing" ? "#ffffff" : "#6c757d",
            borderRadius: 0,
            outline: "none",
            display: "block",
          }}
        >
          Live
        </button>
        <button
          type="button"
          class="btn btn-secondary button-12"
          onClick={() => {
            setmycontest(upcoming(list));
            setcurrentContest("upcoming");
          }}
          style={{
            textTransform: "none",
            backgroundColor: currentContest === "upcoming" ? "#fff" : "#6c757d",
            color: currentContest === "upcoming" ? "#222" : "#fff",
            borderColor: currentContest === "upcoming" ? "#ffffff" : "#6c757d",
            borderRadius: 0,
            outline: "none",
            display: "block",
          }}
        >
          Upcoming
        </button>
      </div>

      <Card List={mycontest} />
    </>
  );
};

export default Home;
