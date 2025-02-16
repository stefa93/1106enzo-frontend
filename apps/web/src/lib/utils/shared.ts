/**
 * Formats a number as a currency string
 * @param amount - The amount to format
 * @param currency - The currency code (default: EUR)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency = 'EUR') => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency,
  }).format(amount);
};
