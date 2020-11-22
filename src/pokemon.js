/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import { callPokemon } from './api-callls.js';
import {
  createSpriteGallery, showPokemonData, createPokemonData, createStatsCard, showPreviousPokemon,
  $previousButton, $nextButton, showNextPokemon,
} from './ui.pokemon-page.js';

let pokemonSeleccionado = localStorage.getItem('pokemon');
loadActualPokemon(pokemonSeleccionado);

function loadActualPokemon(pokemon) {
  callPokemon(pokemon).then((respuesta) => {
    createPokemon(respuesta);
    pokemonSeleccionado = respuesta.id;
  });
}

function createPokemon(respuesta) {
  showPokemonData(respuesta);
  createSpriteGallery(respuesta);
  createPokemonData(respuesta);
  createStatsCard(respuesta);
}

$previousButton.onclick = () => {
  loadActualPokemon(showPreviousPokemon(pokemonSeleccionado));
};

$nextButton.onclick = () => {
  loadActualPokemon(showNextPokemon(pokemonSeleccionado));
};
