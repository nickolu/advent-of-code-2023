import day01, {
  getFirstNumberFromText,
  parseFirstAndLastNumberFromText,
} from './day-01';

describe('Day 01', () => {
  test.skip('parseText should return the number from the given text', () => {
    expect(parseFirstAndLastNumberFromText('he11o')).toEqual(11);
    expect(parseFirstAndLastNumberFromText('1asdfa3asdafs5')).toEqual(15);
    expect(parseFirstAndLastNumberFromText('wo3ld')).toEqual(33);
    expect(parseFirstAndLastNumberFromText('pqr3stu8vwx')).toEqual(38);
  });

  test.skip('getFirstNumberFromText should return the first number', () => {
    expect(getFirstNumberFromText('he11o')).toEqual('1');
    expect(getFirstNumberFromText('he13o')).toEqual('1');
    expect(getFirstNumberFromText('o31eh')).toEqual('3');
    expect(getFirstNumberFromText('2342asfsa234')).toEqual('2');
  });
  it('should return the correct value given sample input', () => {
    const sampleInput = `1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`;

    const expectedResult = 142;

    expect(day01(sampleInput)).toEqual(expectedResult);
  });
});
