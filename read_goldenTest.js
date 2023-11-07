const fs = require('fs');
const { read_golden } = require('./matrix.js');

describe('read_golden', () => {
  beforeAll(() => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue('1.0 2.0 3.0 4.0 5.0');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('reads golden data correctly', () => {
    const goldenData = read_golden();

    expect(fs.readFileSync).toHaveBeenCalledWith('golden.txt', 'utf8');

    expect(goldenData).toEqual(['1.0', '2.0', '3.0', '4.0', '5.0']);
  });
});
