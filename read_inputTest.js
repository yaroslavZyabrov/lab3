const fs = require('fs');
const { read_input } = require('./matrix.js');

describe('read_input', () => {
  beforeAll(() => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue('3\n1 2 3\n4 5 6\n7 8 9\n');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('reads input and creates a matrix object', () => {
    const matrix = read_input();

    expect(fs.readFileSync).toHaveBeenCalledWith('input.txt', 'utf8');

    expect(matrix).toBeDefined();
    expect(matrix.get_rows()).toEqual(3);
    expect(matrix.get_cols()).toEqual(3);
  });
});
