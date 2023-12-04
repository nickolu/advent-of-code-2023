import importTextFromFile from '../utils/importTextFromFile';

import solution, { findFirstNumberInText, getNumberForEntry } from './part2';

const sampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe('Day 01 - Part 2', () => {
  it('should get the right value for each line', () => {
    expect(findFirstNumberInText('two1nine')).toBe('2');
    expect(findFirstNumberInText('eighttwothree')).toBe('8');
    expect(findFirstNumberInText('abcone2threexyz')).toBe('1');
    expect(findFirstNumberInText('xtwone3four')).toBe('2');
    expect(findFirstNumberInText('4nineeightseven2')).toBe('4');
    expect(findFirstNumberInText('zoneight234')).toBe('1');
    expect(findFirstNumberInText('7pqrstsixteen')).toBe('7');
  });

  it('should get the right reverse value for each line', () => {
    expect(findFirstNumberInText('two1nine', true)).toBe('9');
  });

  test('getNumberForEntry should get the correct value', () => {
    expect(getNumberForEntry('two1nine')).toBe(29);
    expect(getNumberForEntry('eighttwothree')).toBe(83);
    expect(getNumberForEntry('abcone2threexyz')).toBe(13);
    expect(getNumberForEntry('xtwone3four')).toBe(24);
    expect(getNumberForEntry('4nineeightseven2')).toBe(42);
    expect(getNumberForEntry('zoneight234')).toBe(14);
    expect(getNumberForEntry('7pqrstsixteen')).toBe(76);
  });
  it('should return the correct value given sample input', () => {
    expect(solution(sampleInput)).toEqual(281);
  });
  it('should return the correct value for the real input', () => {
    const realInput = importTextFromFile(__dirname, 'part2.input.txt');
    expect(solution(realInput)).toBe(54277);
  });
});
