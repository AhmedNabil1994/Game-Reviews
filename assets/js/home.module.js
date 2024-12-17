"use strict";
// imports
import UI from "./ui.module.js";

// Global DOM elements
// Glabal Variables
export default class Home {
  constructor() {
    this.fetchGamesByCategory("mmorpg");
    this.homeUI = new UI();
    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector("a.nav-link.active").classList.remove("active");
        e.target.classList.add("active");
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
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data, "data");
      this.homeUI.displayGames(data);
    } catch (error) {
      console.log(error);
    }
  }
}
