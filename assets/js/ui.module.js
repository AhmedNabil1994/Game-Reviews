"use strict";

// import Home from "./home.module.js";
// const out = new Home();
// console.log(out, "out");

// Global DOM elements
const cardsContainer = document.querySelector("#games .row");
export default class UI {
  displayGames(arr) {
    console.log(arr, "array in ui class");
    let cards = "";
    for (let i = 0; i < arr.length; i++) {
      cards += `  <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100">
              <div class="card-body">
                <figure>
                  <img
                    src="${arr[i].thumbnail}"
                    class="card-img-top"
                    alt="game image"
                  />
                </figure>
                <figcaption>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h5 class="card-title m-0">${arr[i].title}</h5>
                    <span class="badge py-2 text-bg-primary">Free</span>
                  </div>
                  <p class="card-text text-center opacity-50">
                    ${arr[i].short_description.split(" ").slice(0, 8).join()}
                  </p>
                </figcaption>
              </div>
              <footer class="card-footer d-flex justify-content-between">
                <span class="badge py-2">${arr[i].genre}</span>
                <span class="badge py-2">${arr[i].platform}</span>
              </footer>
            </div>
          </div>`;
    }
    cardsContainer.innerHTML = cards;
  }
  displayGameDetails() {
    console.log("display details");
  }
}

// new UI().displayGames();
// obj.displayGameDetails();
// const home = new Home();
// const gamesData = await home.fetchGamesByCategory("mmorpg");
