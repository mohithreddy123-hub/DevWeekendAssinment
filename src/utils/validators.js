/**
 * Validates the bill amount input.
 *
 * @param {string} billStr
 * @returns {{isValid: boolean, message: string}}
 */
export const validateBill = (billStr) => {
  if (!billStr || billStr.trim() === '') {
    return { isValid: true, message: '' }; // Normal empty state
  }
  
  // Allow intermediate typing states
  if (billStr === '.' || billStr === '-' || billStr === '-.') {
    return { isValid: true, message: '' };
  }
  
  const bill = parseFloat(billStr);
  if (isNaN(bill) || bill <= 0) {
    return { isValid: false, message: '❌ Bill amount must be greater than 0' };
  }
  if (bill > 10000000) { // Max ₹1 Crore for safety
    return { isValid: false, message: '❌ Bill amount exceeds maximum limit (₹1,00,00,000)' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates the tip percentage input.
 *
 * @param {string} tipStr
 * @returns {{isValid: boolean, message: string}}
 */
export const validateTip = (tipStr) => {
  if (!tipStr || tipStr.trim() === '') {
    return { isValid: true, message: '' };
  }
  
  // Allow intermediate typing states
  if (tipStr === '.' || tipStr === '-' || tipStr === '-.') {
    return { isValid: true, message: '' };
  }
  
  const tip = parseFloat(tipStr);
  if (isNaN(tip) || tip < 0 || tip > 100) {
    return { isValid: false, message: '❌ Tip percentage must be between 0 and 100' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates the number of people input.
 *
 * @param {string} peopleStr
 * @returns {{isValid: boolean, message: string}}
 */
export const validatePeople = (peopleStr) => {
  if (!peopleStr || peopleStr.trim() === '') {
    return { isValid: true, message: '' }; // Normal empty state
  }
  
  // Allow intermediate typing states
  if (peopleStr === '-') {
    return { isValid: true, message: '' };
  }
  
  // Checks for decimal point
  if (peopleStr.includes('.')) {
    const val = parseFloat(peopleStr);
    if (!isNaN(val) && val < 1) {
      return { isValid: false, message: '❌ Number of people must be at least 1' };
    }
    return { isValid: false, message: '❌ Number of people must be a whole number' };
  }
  
  const peopleVal = parseFloat(peopleStr);
  if (isNaN(peopleVal) || peopleVal < 1) {
    return { isValid: false, message: '❌ Number of people must be at least 1' };
  }
  if (!Number.isInteger(peopleVal)) {
    return { isValid: false, message: '❌ Number of people must be a whole number' };
  }
  if (peopleVal > 10000) { // Limit for safety
    return { isValid: false, message: '❌ Number of people exceeds maximum limit (10,000)' };
  }
  
  return { isValid: true, message: '' };
};
