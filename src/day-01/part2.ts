const wordNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function findIndexOfFirstWordInText(
  words: string[],
  text: string,
  reverse = false,
) {
  if (reverse) {
    text = text.split('').reverse().join('');
  }
  for (let i = 0; i < words.length; i += 1) {
    if (text.indexOf(words[i]) > -1) {
      return i;
    }
  }
  return -1;
}

export function findFirstNumberInText(text: string, reverse = false): string {
  let reviewedCharacters = '';
  let foundNumber: number | undefined = undefined;
  if (reverse) {
    text = text.split('').reverse().join('');
  }

  for (const currentCharacter of text) {
    if (foundNumber !== undefined) {
      break;
    }
    reviewedCharacters += currentCharacter;

    const matchingWordIndex = findIndexOfFirstWordInText(
      wordNumbers,
      reviewedCharacters,
      reverse,
    );

    if (matchingWordIndex !== -1) {
      foundNumber = matchingWordIndex;
      break;
    }

    if (!isNaN(Number(currentCharacter))) {
      foundNumber = Number(currentCharacter);
      break;
    }
  }

  return foundNumber?.toString() || '';
}

export function getNumberForEntry(text: string): number {
  return Number(
    findFirstNumberInText(text) + findFirstNumberInText(text, true),
  );
}

export default function solution(input: string): number {
  const lines = input.split('\n');

  return lines.reduce((total, line) => (total += getNumberForEntry(line)), 0);
}
