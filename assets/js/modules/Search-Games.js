"use strict";
// imports
import UI from "./Ui.js";

// Global DOM elements
const searchInput = document.getElementById("search");

export default class SearchGames {
  constructor(games) {
    this.ui = new UI();
    // event
    document.querySelector(".fa-search").addEventListener("click", () => {
      this.search(games);
    });
  }
  search(games) {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(searchInput.value.trim().toLowerCase())
    );
    console.log(filteredGames, "filteredGames");
    this.ui.displayGames(filteredGames);
    filteredGames.length === 0
      ? document.querySelector(".no-games-msg").classList.remove("d-none")
      : document.querySelector(".no-games-msg").classList.add("d-none");
    //   searchInput.value = ""
  }
}
