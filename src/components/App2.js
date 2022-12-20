import React from "react";
import * as localForage from "localforage";

const App2 = () => {
  var platforms = [
    {
      platform: "CodeChef",
      isSubscribed: true,
    },
    {
      platform: "CodeForces",
      isSubscribed: true,
    },
    {
      platform: "LeetCode",
      isSubscribed: true,
    },
    {
      platform: "AtCoder",
      isSubscribed: true,
    },
    {
      platform: "HackerRank",
      isSubscribed: true,
    },
    {
      platform: "HackerEarth",
      isSubscribed: true,
    },
    {
      platform: "Kick Start",
      isSubscribed: true,
    },
    {
      platform: "TopCoder",
      isSubscribed: true,
    },
  ];
  async function getdata() {
    const res = await fetch("https://www.kontests.net/api/v1/all");
    return res;
  }
  async function save(data) {
    await localForage.setItem("contest", data).then(() => {
      // console.log("user saved");
    });
  }
  async function setPlatforms() {
    await localForage.setItem("platforms", platforms);
  }
  setPlatforms();
  getdata()
    .then((data) => {
      data.json().then((response) => {
        save(response);
      });
    })
    .catch((e) => console.log(e));

  return <></>;
};

export default App2;
