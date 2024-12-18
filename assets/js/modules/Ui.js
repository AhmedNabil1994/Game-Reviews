"use strict";

export default class UI {
  displayGames(arr) {
    let cards = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 1) {
        cards += `  <div class="col">
              <div class="card my-3 filtered" data-id = ${arr[i].id}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${arr[i].thumbnail}"class="w-100 rounded-start" alt="${arr[i].title}" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body d-flex justify-content-between h-100 flex-column">
                    <div class ="d-flex justify-content-between align-items-center">
                      <h5 class="card-title">${arr[i].title}</h5>
                      <span class="badge py-2 text-bg-primary">Free</span>
                    </div>
                      <p class="card-text">
                      ${arr[i].short_description}
                      </p>
                      <div class="d-flex justify-content-between">
                        <span class="badge py-2">${arr[i].genre}</span>
                        <span class="badge py-2">${arr[i].platform}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
      } else {
        cards += `  <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100" data-id = ${arr[i].id}>
                <div class="card-body">
                  <figure>
                    <img
                      src="${arr[i].thumbnail}"
                      class="card-img-top"
                      alt="${arr[i].title}"
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
    }
    document.querySelector("#games .row.cards").innerHTML = cards;
  }
  displayGameDetails(data) {
    const gameDetails = ` <div class="col-md-5 col-lg-4">
            <picture>
              <img
                src="${data.thumbnail}"
                alt="${data.title}"
                class="w-100"
              />
            </picture>
          </div>
          <div class="col-md-7 col-lg-8">
            <article>
              <h2>Title: ${data.title}</h2>
              <h3 class="h6">
                Category:<span class="badge text-bg-info">${data.genre}</span>
              </h3>
              <h3 class="h6">
                Platform:<span class="badge text-bg-info">${data.platform}</span>
              </h3>
              <h3 class="h6">
                Status:<span class="badge text-bg-info">${data.status}</span>
              </h3>
              <p>
              ${data.description}
              </p>
              <a
                href="${data.game_url}"
                target="_blank"
                class="btn btn-outline-warning text-white"
                >Show Game</a
              >
            </article>
          </div>`;
    document.querySelector("#game-details .row").innerHTML = gameDetails;
  }
}
