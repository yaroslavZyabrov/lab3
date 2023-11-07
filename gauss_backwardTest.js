const { gauss_backward } = require('./matrix.js');

describe('gauss_backward', () => {
  it('performs gauss backward elimination correctly', () => {
    const mockMatrix = {
      get_rows: jest.fn(() => 3),
      get_cols: jest.fn(() => 3),
      get: jest.fn((row, col) => {
        const matrixData = [
          [2, 1, 3],
          [0, 2, 1],
          [0, 0, 3],
        ];
        return matrixData[row][col];
      },
    });

    const solutions = gauss_backward(mockMatrix);

    expect(mockMatrix.get_rows).toHaveBeenCalled();
    expect(mockMatrix.get_cols).toHaveBeenCalled();
    expect(mockMatrix.get).toHaveBeenCalledTimes(9); 

    expect(solutions).toEqual([1, 0.5, 1]); 
  });
});
