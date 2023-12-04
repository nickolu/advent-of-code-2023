import importTextFromFile from '../utils/importTextFromFile';
import solution, { Game, getIsGamePossiblePredicate } from './part1';

const sampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

describe('Day 01 - Part 1', () => {
  it('should construct classes', () => {
    const game = new Game(
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
    );
    expect(game.id).toBe('1');
    expect(game.sets.length).toBe(3);
    expect(game.sets[0].blue).toBe(3);
    expect(game.sets[1].green).toBe(2);
  });
  test('getIsGamePossiblePredicate should return passing predicate', () => {
    const isGamePossible = getIsGamePossiblePredicate({
      red: 12,
      green: 13,
      blue: 14,
    });
    const gameInputs = sampleInput.split('\n');
    const game1 = new Game(gameInputs[0]);
    const game2 = new Game(gameInputs[1]);
    const game3 = new Game(gameInputs[2]);
    const game4 = new Game(gameInputs[3]);
    const game5 = new Game(gameInputs[4]);
    expect(isGamePossible(game1)).toBe(true);
    expect(isGamePossible(game2)).toBe(true);
    expect(isGamePossible(game3)).toBe(false);
    expect(isGamePossible(game4)).toBe(false);
    expect(isGamePossible(game5)).toBe(true);
  });
  it('should return the correct value given sample input', () => {
    expect(solution(sampleInput)).toEqual(8);
  });
  it('should return the correct value for the real input', () => {
    const realInput = importTextFromFile(__dirname, 'part1.input.txt');
    expect(solution(realInput)).toBe(2632);
  });
});
