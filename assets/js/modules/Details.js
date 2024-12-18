"use strict";
// imports
import UI from "./Ui.js";

// Global DOM elements
const spinner = document.getElementById("loading-spinner");

export default class Details {
  constructor() {
    // event
    document.querySelector("button.btn-close").addEventListener("click", () => {
      document.getElementById("game-details").classList.add("d-none");
      document.getElementById("home").classList.remove("d-none");
    });
  }
  //   async fetchGameById(id) {
  //     console.log(id, "game id");
  //     const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": "e5056859f4msh30c4fc656992940p1df47fjsn0b8de7147be0",
  //         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  //       },
  //     };
  //     try {
  //       spinner.classList.remove("d-none");
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log(data, "data");
  //       this.ui.displayGames(data);
  //       this.gameDetails();
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       spinner.classList.add("d-none");
  //     }
  //   }
}
