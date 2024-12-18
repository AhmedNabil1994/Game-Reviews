"use strict";
// imports
import UI from "./Ui.js";
import Details from "./Details.js";
import SearchGames from "./Search-Games.js";

// Global DOM elements
const spinner = document.getElementById("loading-spinner");

export default class Games {
  constructor() {
    this.fetchGamesByCategory("mmorpg");
    this.ui = new UI();
    // event
    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector("a.nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.fetchGamesByCategory(e.target.dataset.category);
      });
    });
  }
  async fetchGamesByCategory(cat) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e5056859f4msh30c4fc656992940p1df47fjsn0b8de7147be0",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      spinner.classList.remove("d-none");
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data, "data");
      this.ui.displayGames(data);
      const gamesToSearch = new SearchGames(data);
      this.gameDetails();
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  gameDetails() {
    // using event delegation for better performance
    document.querySelector("#games .row").addEventListener("click", (e) => {
      // looking for the card using closest method
      if (e.target.closest(".card")) {
        document.getElementById("home").classList.add("d-none");
        document.getElementById("game-details").classList.remove("d-none");
        const gameDetails = new Details(e.target.closest(".card").dataset.id);
      }
    });
  }
}
