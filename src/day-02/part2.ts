import { Game, GameSet, GameSetLimit } from './part1';

function findMaxCubesInGame(game: Game): GameSetLimit {
  const maxValues = {
    red: 0,
    blue: 0,
    green: 0,
  };
  return game.sets.reduce(
    (accumulator, gameSet: GameSet) => ({
      red: Math.max(accumulator.red, gameSet.red),
      blue: Math.max(accumulator.blue, gameSet.blue),
      green: Math.max(accumulator.green, gameSet.green),
    }),
    maxValues,
  );
}

function getGameSetPower(game: Game): number {
  const max = findMaxCubesInGame(game);
  return max['red'] * max['blue'] * max['green'];
}

export default function solution(input: string): number {
  const lines = input.split('\n');

  return lines.reduce(
    (total, line) => (total += getGameSetPower(new Game(line))),
    0,
  );
}
