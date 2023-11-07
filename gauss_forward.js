const { gauss_forward } = require('./matrix.js');

describe('gauss_forward', () => {
  it('performs gauss forward elimination correctly', () => {
    const mockMatrix = {
      get_rows: jest.fn(() => 3),
      get_cols: jest.fn(() => 3),
      get: jest.fn((row, col) => {
        const matrixData = [
          [2, 1, 1],
          [0, 2, 1],
          [0, 0, 3],
        ];
        return matrixData[row][col];
      }),
      mull_add: jest.fn(),
      swap_with_nonzero_row: jest.fn(),
    };

    gauss_forward(mockMatrix);

    expect(mockMatrix.get_rows).toHaveBeenCalled();
    expect(mockMatrix.get_cols).toHaveBeenCalled();
    expect(mockMatrix.get).toHaveBeenCalledTimes(9); 
    expect(mockMatrix.mull_add).toHaveBeenCalledTimes(3); 
    expect(mockMatrix.swap_with_nonzero_row).toHaveBeenCalledTimes(0); 

  });
});
