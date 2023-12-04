export class Game {
  id: string;
  sets: GameSet[];

  constructor(inputText: string) {
    const [id, sets] = inputText.split(':');
    this.id = id.split(' ')[1];
    this.sets = sets.split(';').map((setText) => new GameSet(setText));
  }
}

export class GameSet {
  red: number;
  blue: number;
  green: number;

  constructor(setText: string) {
    this.red = 0;
    this.blue = 0;
    this.green = 0;
    setText.split(',').map((pullText) => {
      const pull = new GamePull(pullText);

      if (pull.color in this) {
        this[pull.color as keyof GameSet] += pull.value;
      }
    });
  }
}

class GamePull {
  value: number;
  color: string;

  constructor(pullText: string) {
    const [value, color] = pullText.trim().split(' ');

    this.value = Number(value);
    this.color = color;
  }
}

export interface GameSetLimit {
  red: number;
  blue: number;
  green: number;
}

function doesAnyPullExceedLimit(gameSet: GameSet, limit: GameSetLimit) {
  for (const color of Object.keys(limit)) {
    const key = color as keyof GameSetLimit;
    if (gameSet[key] > limit[key]) {
      return true;
    }
  }
  return false;
}

function isGameSetPossible(gameSet: GameSet, limit: GameSetLimit) {
  return !doesAnyPullExceedLimit(gameSet, limit);
}

export function getIsGamePossiblePredicate(
  gameSetLimit: GameSetLimit,
): (game: Game) => boolean {
  return (game) =>
    game.sets.every((gameSet) => isGameSetPossible(gameSet, gameSetLimit));
}

export default function solution(input: string): number {
  const gameInputs = input.split('\n');
  const games = gameInputs.map((gameInput) => new Game(gameInput));
  const isGamePossiblePredicate = getIsGamePossiblePredicate({
    red: 12,
    green: 13,
    blue: 14,
  });
  const possibleGames = games.filter(isGamePossiblePredicate);

  return possibleGames.reduce((total, game) => (total += Number(game.id)), 0);
}
