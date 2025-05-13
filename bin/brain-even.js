#!/usr/bin/env node
import GameUtils from '../src/utils.js';
import EvenNumbers from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

GameUtils(description, EvenNumbers);
