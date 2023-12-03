import importTextFromFile from '../utils/importTextFromFile';

const isNumberPredicate = (char: string) => !isNaN(Number(char));

export function parseFirstAndLastNumberFromText(text: string) {
  text = text.trim();
  const char1 = getFirstNumberFromText(text);
  const char2 = getFirstNumberFromText(text.split('').reverse().join(''));

  return Number(char1 + char2);
}

export function getFirstNumberFromText(text: string) {
  return text.split('').filter(isNumberPredicate)[0] || '';
}

export default function day01(sampleInput: string): number {
  let total = 0;
  sampleInput.split('\n').forEach((lineText) => {
    total += parseFirstAndLastNumberFromText(lineText);
  });
  return total;
}

const realInput = importTextFromFile(__dirname, 'day-01.input.txt');

console.log(day01(realInput));
