/**
 * Formats a numeric value into INR currency format (₹).
 * Handles null, undefined, and NaN gracefully.
 *
 * @param {number} value
 * @returns {string}
 */
export const formatCurrency = (value) => {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) {
    return '₹0.00';
  }
  
  // Format to INR currency standard (e.g. ₹1,23,456.78)
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    // Fallback if Intl is not fully supported or throws
    return `₹${Number(value).toFixed(2)}`;
  }
};

/**
 * Sanitizes numeric input strings (removes double decimals, letters, negative signs, etc.)
 *
 * @param {string} val
 * @returns {string}
 */
export const sanitizeInputString = (val) => {
  if (typeof val !== 'string') return '';
  
  // Remove any character that is not a digit or decimal point
  let cleaned = val.replace(/[^0-9.]/g, '');
  
  // Prevent multiple decimal points (keep only the first one)
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = `${parts[0]}.${parts.slice(1).join('')}`;
  }
  
  return cleaned;
};
