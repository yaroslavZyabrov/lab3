const { gauss } = require('./matrix.js');

describe('gauss', () => {
  it('performs gauss elimination correctly', () => {
    const mockMatrix = {
      get_rows: jest.fn(() => 3),
      get_cols: jest.fn(() => 3),
      exists_wrong_row: jest.fn(() => false), 
      exists_zero_row: jest.fn(() => false), 
      get: jest.fn((row, col) => {
        const matrixData = [
          [2, 1, 3],
          [0, 2, 1],
          [0, 0, 3],
        ];
        return matrixData[row][col];
      },
    });

    const solutions = gauss(mockMatrix);

    expect(mockMatrix.get_rows).toHaveBeenCalled();
    expect(mockMatrix.get_cols).toHaveBeenCalled();
    expect(mockMatrix.exists_wrong_row).toHaveBeenCalled();
    expect(mockMatrix.exists_zero_row).toHaveBeenCalled();
    expect(mockMatrix.get).toHaveBeenCalledTimes(9); // 3x3 matrix

    expect(solutions).toEqual([1, 0.5, 1]); 
  });

  it('returns null when a wrong row exists', () => {
    const mockMatrix = {
      get_rows: jest.fn(() => 3),
      get_cols: jest.fn(() => 3),
      exists_wrong_row: jest.fn(() => true), 
      exists_zero_row: jest.fn(() => false), 
    };

    const solutions = gauss(mockMatrix);

    expect(mockMatrix.get_rows).toHaveBeenCalled();
    expect(mockMatrix.get_cols).toHaveBeenCalled();
    expect(mockMatrix.exists_wrong_row).toHaveBeenCalled();
    expect(mockMatrix.exists_zero_row).not.toHaveBeenCalled(); 

    expect(solutions).toBeNull();
  });

  it('returns null when a zero row exists', () => {
    const mockMatrix = {
      get_rows: jest.fn(() => 3),
      get_cols: jest.fn(() => 3),
      exists_wrong_row: jest.fn(() => false), 
      exists_zero_row: jest.fn(() => true), 
    };

    const solutions = gauss(mockMatrix);

    expect(mockMatrix.get_rows).toHaveBeenCalled();
    expect(mockMatrix.get_cols).toHaveBeenCalled();
    expect(mockMatrix.exists_wrong_row).toHaveBeenCalled();
    expect(mockMatrix.exists_zero_row).toHaveBeenCalled();

    expect(solutions).toBeNull();
  });
});
