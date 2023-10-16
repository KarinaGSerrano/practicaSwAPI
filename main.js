"use strict";
const containerCards = document.querySelector(".container-cards");

// --------------------------------------------------------------------------------------

async function swAPI(numPage) {
  return fetch(`https://swapi.dev/api/people/?page=${numPage}`).then(
    (response) => response.json()
  );
}

// --------------------------------------------------------------------------------------
function renderCard(img, title, description) {
  const templateCards = `  <div class="pt-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="card text-center">
                              <img
                                src="${img}"
                                class="card-img-top"
                                alt="..."
                              />
                              <div class="card-body">
                                <h2 class="card-title">${title}</h2>
                                <p class="card-description">${description}</p>
                                <button
                                  type="button"
                                  class="btn btn-style"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                >
                                  Ver más
                                </button>
                              </div>
                            </div>
                          </div>`;
  containerCards.insertAdjacentHTML("beforeend", templateCards);
}
