/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */

const $buttonStat = document.querySelector('.button-stats');
export const $previousButton = document.querySelector('.arrow-left');
export const $nextButton = document.querySelector('.arrow-right');

export function showPokemonData(objetoPokemon) {
  const nombre = objetoPokemon.name;
  const $title = document.querySelector('.title');
  const pokemonNumber = objetoPokemon.id.toString().padStart(3, '00');
  $title.textContent = `${nombre.toUpperCase()} Nro ${pokemonNumber}`;
}
export function createSpriteGallery(objetoPokemon) {
  const createdImg = document.querySelector('.poke-picture');
  const $containerImage = document.querySelector('.container-images');

  if (createdImg) {
    createdImg.src = objetoPokemon.sprites.other['official-artwork'].front_default;
    createdImg.classList = 'poke-picture';
    createdImg.classList.add(`img${objetoPokemon.name}`);
  } else {
    const $img = document.createElement('img');
    $img.src = objetoPokemon.sprites.other['official-artwork'].front_default;
    $img.classList.add('poke-picture', `img${objetoPokemon.name}`);
    $containerImage.appendChild($img);
  }
}

export function createPokemonData(objetoPokemon) {
  const $containerInfo = document.querySelector('.container-info');
  const $containerData = document.querySelector('.container-data');
  const createdAbilities = document.querySelector('.abilities');
  const createdHeight = document.querySelector('.height');
  const createdWeight = document.querySelector('.weight');

  if (createdAbilities && createdHeight && createdWeight) {
    createdAbilities.textContent = '';
    objetoPokemon.abilities.forEach((element) => {
      const habilidad = element.ability.name;
      createdAbilities.textContent += ` ${habilidad}`;
    });

    createdHeight.textContent = '';
    const heightValue = objetoPokemon.height;
    createdHeight.textContent = `Height: ${heightValue}`;

    createdWeight.textContent = '';
    const weightValue = objetoPokemon.weight;
    createdWeight.textContent = `weight: ${weightValue}`;
  } else {
    const $abilities = document.createElement('p');
    $abilities.classList = 'abilities';
    $abilities.textContent = 'Abilities: ';
    objetoPokemon.abilities.forEach((element) => {
      const habilidad = element.ability.name;
      $abilities.textContent += ` ${habilidad}`;
    });

    const $height = document.createElement('p');
    $height.classList = 'height';
    const heightValue = objetoPokemon.height;
    $height.textContent = `Height: ${heightValue}`;

    const $weight = document.createElement('p');
    $weight.classList = 'weight';
    const weightValue = objetoPokemon.weight;
    $weight.textContent = `weight: ${weightValue}`;

    const $containerStats = document.createElement('div');
    $containerStats.classList.add('stats-container', 'hidden');

    $containerData.appendChild($abilities);
    $containerData.appendChild($height);
    $containerData.appendChild($weight);
    $containerInfo.appendChild($containerStats);
  }
}

export function createStatsCard(objetoPokemon) {
  const $statsDiv = document.querySelector('.stats-container');
  $statsDiv.innerHTML = '';
  objetoPokemon.stats.forEach((statArray) => {
    const statName = statArray.stat.name;
    const statValue = statArray.base_stat;
    $statsDiv.innerHTML += `${statName}: ${statValue} <br>`;
  });
  const $closeButton = document.createElement('button');
  $closeButton.textContent = 'close';
  $closeButton.classList.add('close-button');
  $statsDiv.appendChild($closeButton);
}

export function showHiddenStats(e) {
  $previousButton.classList.add('hidden');
  $nextButton.classList.add('hidden');
  e.target.classList.add('hidden');
  const $statsContainer = document.querySelector('.stats-container');
  $statsContainer.classList.remove('hidden');
  const $closeButton = document.querySelector('.close-button');
  $closeButton.onclick = closeHiddenStats;
  const $basicStats = document.querySelector('.container-data');
  $basicStats.classList.add('hidden');
}

function closeHiddenStats() {
  $previousButton.classList.remove('hidden');
  $nextButton.classList.remove('hidden');
  const $statsContainer = document.querySelector('.stats-container');
  $statsContainer.classList.add('hidden');
  const $basicStats = document.querySelector('.container-data');
  $basicStats.classList.remove('hidden');
  $buttonStat.classList.remove('hidden');
}

export function showPreviousPokemon(respuesta) {
  const pokeId = respuesta - 1;
  return pokeId;
}

export function showNextPokemon(respuesta) {
  const pokeId = respuesta + 1;
  return pokeId;
}

$buttonStat.onclick = showHiddenStats;
