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
  
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
   
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
  
  
  const hasMinus = val.startsWith('-');
  
  // Remove any character that is not a digit or decimal point
  let cleaned = val.replace(/[^0-9.]/g, '');
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = `${parts[0]}.${parts.slice(1).join('')}`;
  } else if (parts.length === 2) {
    // Restrict to max 2 decimal places
    cleaned = `${parts[0]}.${parts[1].slice(0, 2)}`;
  }
  
  
  if (hasMinus) {
    cleaned = '-' + cleaned;
  }
  
  return cleaned;
};

