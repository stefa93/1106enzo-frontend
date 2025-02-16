import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../shared';

describe('shared utils', () => {
  describe('formatCurrency', () => {
    it('formats EUR currency correctly', () => {
      expect(formatCurrency(1234.56)).toMatch(/€\s*1\.234,56/);
    });

    it('formats USD currency correctly', () => {
      expect(formatCurrency(1234.56, 'USD')).toMatch(/US\$\s*1\.234,56/);
    });

    it('handles zero correctly', () => {
      expect(formatCurrency(0)).toMatch(/€\s*0,00/);
    });

    it('handles negative numbers correctly', () => {
      expect(formatCurrency(-1234.56)).toMatch(/€\s*-1\.234,56/);
    });
  });
});
