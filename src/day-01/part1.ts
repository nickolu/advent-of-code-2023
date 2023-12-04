const isNumberPredicate = (char: string) => !isNaN(Number(char));

export function getNumberForEntry(text: string) {
  text = text.trim();
  const char1 = getFirstNumberFromText(text);
  const char2 = getFirstNumberFromText(text.split('').reverse().join(''));

  return Number(char1 + char2);
}

export function getFirstNumberFromText(text: string) {
  return text.split('').filter(isNumberPredicate)[0] || '';
}

export default function solution(input: string): number {
  const lines = input.split('\n');

  return lines.reduce((total, line) => (total += getNumberForEntry(line)), 0);
}
