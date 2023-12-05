import importTextFromFile from '../utils/importTextFromFile';
import solution from './part2';

const sampleInput = `hello
world`;

describe.skip('Day XX - Part 2', () => {
  it('should return the correct value given sample input', () => {
    expect(solution(sampleInput)).toEqual(1);
  });
  it('should return the correct value for the real input', () => {
    const realInput = importTextFromFile(__dirname, 'part1.input.txt');
    expect(solution(realInput)).toBe(1);
  });
});
