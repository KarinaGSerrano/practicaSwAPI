"use strict";
const containerCards = document.querySelector(".container-cards");
const urlFirst = "https://swapi.dev/api/people/?page=1";

// --------------------------------------------------------------------------------------

async function swApiPeople(url) {
  return fetch(url).then((response) => response.json());
}

// --------------------------------------------------------------------------------------

async function renderPeopleCards(cantidad) {
  let arrPeople = [];
  let url = urlFirst;

  do {
    const people = await swApiPeople(url);
    people.results.forEach((person) => {
      arrPeople.push(person);
    });
    url = people.next;
  } while (arrPeople.length <= cantidad);

  arrPeople.forEach((person, i) => {
    if (i < cantidad) {
      renderCard(
        "https://img.freepik.com/foto-gratis/vista-nave-espacial-aspecto-futurista_23-2150675497.jpg?w=1380&t=st=1697487761~exp=1697488361~hmac=c6de712bc1b4145a068d01e2ad9a3dd5f3a24405b34a44e8cc48fb14da24c062",
        person.name,
        person.eye_color,
        person.url
      );
    }
  });
}

// --------------------------------------------------------------------------------------

function renderCard(img, title, description, url) {
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
                                <a  
                                  type="button" 
                                  class="btn btn-nav btn-style" 
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop
                                  "href="${url}">Ver más</a>
                              </div>
                            </div>
                          </div>`;
  containerCards.insertAdjacentHTML("beforeend", templateCards);
}

// function renderCard(img, title, description, url) {
//   const templateCards = `  <div class="pt-4 col-lg-4 col-md-6 col-sm-12">
//                             <div class="card text-center">
//                               <img
//                                 src="${img}"
//                                 class="card-img-top"
//                                 alt="..."
//                               />
//                               <div class="card-body">
//                                 <h2 class="card-title">${title}</h2>
//                                 <p class="card-description">${description}</p>
//                                 <button
//                                   type="button"
//                                   class="btn btn-style"
//                                   data-bs-toggle="modal"
//                                   data-bs-target="#staticBackdrop"
//                                 >
//                                   Ver más
//                                 </button>
//                               </div>
//                             </div>
//                           </div>`;
//   containerCards.insertAdjacentHTML("beforeend", templateCards);
// }

// --------------------------------------------------------------------------------------

// comportamiento default APP:
renderPeopleCards(25);
