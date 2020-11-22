/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import {
  fillPokemonCard, callPokemon, getEndpoint, callPokemonList,
} from './api-callls.js';

const $cards = document.querySelector(".cards");

export function deleteCards() {
  const $pokeCardElelement = document.querySelectorAll(".poke-card");
  $pokeCardElelement.forEach((card) => {
    card.remove();
  });
}

export function createCard(pokemon) {
  const $pokeCard = document.createElement("div");
  $pokeCard.classList.add("poke-card", pokemon.name);

  const $pokeId = document.createElement("div");
  $pokeId.classList.add("poke-id", `id-${pokemon.name}`);

  const $pokename = document.createElement("div");
  $pokename.classList.add("poke-name", pokemon.name);
  $pokename.textContent = pokemon.name;

  const containerImg = document.createElement("div");
  containerImg.classList.add("img-container");
  const $pokeImg = document.createElement("img");
  $pokeImg.classList.add(`poke-img`, `img${pokemon.name}`);

  const pokeType = document.createElement("div");
  pokeType.classList.add("poke-type", `type${pokemon.name}`);

  $pokeCard.appendChild($pokeId);
  $pokeCard.appendChild($pokename);
  containerImg.appendChild($pokeImg);
  $pokeCard.appendChild(containerImg);
  $cards.appendChild($pokeCard);
  $pokeCard.appendChild(pokeType);

  fillPokemonCard(pokemon.name);
  $pokename.onclick = newPokePage;
}

export function newPokePage(e) {
  const pokemonClickeado = e.target.textContent;
  callPokemon(pokemonClickeado);
  localStorage.setItem("pokemon", pokemonClickeado);
  window.open(`pokemon.html`, `_blank`);
}

export function getIndex() {
  const $first = document.querySelector(".first-index");
  const $internalNumbers = document.querySelectorAll(".index-number");
  const $last = document.querySelector(".last-index");

  $first.addEventListener("click", (e) => {
    e.preventDefault();
    const value = 0;
    deleteCards();
    callPokemonList(createCard, getEndpoint(value));
  });
  $internalNumbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      e.preventDefault();
      deleteCards();
      let value = Number(e.target.textContent);
      // e.target.textContent = value + 1;
      // alert(`value vale ${value}`);
      value = (value * 20) - 20;
      callPokemonList(createCard, getEndpoint(value));
      $internalNumbers.forEach((target) => {
        incrementIndexNumber(target);
      });
    });
  });
  $last.addEventListener("click", (e) => {
    e.preventDefault();
    const value = 1030;
    deleteCards();
    callPokemonList(createCard, getEndpoint(value));
  });
}

function incrementIndexNumber(target) {
  let index = target.textContent;
  index = Number(index) + 1;
  target.textContent = index;
}
