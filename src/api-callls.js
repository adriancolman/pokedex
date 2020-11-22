/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable quotes */

export function callPokemonList(createCard, endpoint) {
  if (endpoint) {
    fetch(endpoint)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        respuestaJson.results.forEach((objetoPokemon) => {
          createCard(objetoPokemon);
        });
      })
      .catch((error) => console.error("error:", error));

  } else {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        respuestaJson.results.forEach((objetoPokemon) => {
          createCard(objetoPokemon);
        });
      })
      .catch((error) => console.error("error:", error));
  }

}

export function fillPokemonCard(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => {

      const $pokeId = document.querySelector(`.id-${name}`);
      $pokeId.textContent = (respuestaJson.id).toString().padStart(3, "00");

      const imagen = respuestaJson.sprites.other["official-artwork"].front_default;
      const $img = document.querySelector(`.img${name}`);
      $img.src = imagen;

      respuestaJson.types.forEach((typeObject) => {
        const $typeDiv = document.querySelector(`.type${name}`);
        $typeDiv.textContent += `${typeObject.type.name} `;
      });
    })
    .catch((error) => console.error("error:", error));
}

export function callPokemon(name) {

  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((respuesta) => respuesta.json());

}

export function getEndpoint(value) {
  return `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${value}`;
}
