"use strict";
// imports
import UI from "./Ui.js";

// Global DOM elements
const spinner = document.getElementById("loading-spinner");
// Glabal Variables

export default class Games {
  constructor() {
    this.fetchGamesByCategory("mmorpg");
    this.ui = new UI();
    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector("a.nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.fetchGamesByCategory(e.target.dataset.category);
      });
    });
  }
  async fetchGamesByCategory(cat) {
    console.log(cat, "cat");
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
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
}
