/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable quotes */

import { callPokemonList } from "./api-callls.js";
import { createCard, getIndex } from "./ui.js";

callPokemonList(createCard);
getIndex();
