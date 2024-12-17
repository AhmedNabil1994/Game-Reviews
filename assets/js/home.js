"use strict";
// Global DOM elements

// Glabal Variables
export default class Home {
  async fetchGamesByCategory() {
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e5056859f4msh30c4fc656992940p1df47fjsn0b8de7147be0",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  }
}

const obj = new Home();
export const arr = await obj.fetchGamesByCategory();
