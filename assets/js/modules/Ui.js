"use strict";

export default class UI {
  displayGames(arr) {
    console.log(arr, "array in ui class");
    let cards = "";
    for (let i = 0; i < arr.length; i++) {
      cards += `  <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100" data-id = ${arr[i].id}>
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
    document.querySelector("#games .row").innerHTML = cards;
  }
  displayGameDetails() {
    console.log("display details");
    const gameDetails = ` <div class="col-md-5 col-lg-4">
            <picture>
              <img
                src="./assets/images/thumbnail.jpg"
                alt="game image"
                class="w-100"
              />
            </picture>
          </div>
          <div class="col-md-7 col-lg-8">
            <article>
              <h2>Title: Tarisland</h2>
              <h3 class="h6">
                Category:<span class="badge text-bg-info">MMORPG</span>
              </h3>
              <h3 class="h6">
                Platform:<span class="badge text-bg-info">Windows</span>
              </h3>
              <h3 class="h6">
                Status:<span class="badge text-bg-info">Live</span>
              </h3>
              <p>
                Tarisland is a free-to-play cross-platform MMORPG developed by
                Level Infinite and Published by Tencent. Available on PC and
                mobile devices, the game allows players to easily move between
                both, taking the game with them when they can’t be at their
                desk. The game is designed to appeal to players of MMOs like
                World of Warcraft, offering players nine playable classes and 18
                specializations. Each class features an extensive talent tree
                system and can be customized. Players of existing MMOs will be
                familiar with the standard tank, DPS, and healer lineup,
                necessary for the game’s classic raid and dungeon system.
                Explore a vast game world and solve mysteries. Pick up various
                trades such as gathering, mining, and crafting, and sell your
                items on the auction house.
              </p>
              <a
                href="https://tarisglobal.com/en/home.html"
                target="_blank"
                class="btn btn-outline-warning text-white"
                >Show Game</a
              >
            </article>
          </div>`;
    document.querySelector("#game-details .row").innerHTML = gameDetails;
  }
}
