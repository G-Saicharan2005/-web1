import {formatCurrency} from '../../scripts/utils/money.js';
describe('test suite:formatCurrency', function() {
  it('test case 1:formatCurrency(2095) should return "20.95"', function() {
    expect(formatCurrency(2095)).toBe('20.95');
  });
  it('test case 2:formatCurrency(100) should return "1.00"', function() {
    expect(formatCurrency(100)).toBe('1.00');
  });
  it('test case 3:formatCurrency(0) should return "0.00"', function() {
    expect(formatCurrency(0)).toBe('0.00');
  });
  it('test case 4:formatCurrency(9999) should return "99.99"', function() {
    expect(formatCurrency(9999)).toBe('99.99');
  });
});