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
  
  if (billStr === '.' || billStr === '-') {
    return { isValid: true, message: '' }; // Allow intermediate typing states
  }
  
  const bill = parseFloat(billStr);
  if (isNaN(bill)) {
    return { isValid: false, message: 'Please enter a valid number' };
  }
  if (bill < 0) {
    return { isValid: false, message: 'Bill amount cannot be negative' };
  }
  if (bill === 0) {
    return { isValid: false, message: 'Bill amount must be greater than ₹0' };
  }
  if (bill > 10000000) { // Max ₹1 Crore for safety
    return { isValid: false, message: 'Bill amount exceeds maximum limit (₹1,00,00,000)' };
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
  
  if (tipStr === '.' || tipStr === '-') {
    return { isValid: true, message: '' }; // Allow intermediate typing states
  }
  
  const tip = parseFloat(tipStr);
  if (isNaN(tip)) {
    return { isValid: false, message: 'Please enter a valid percentage' };
  }
  if (tip < 0) {
    return { isValid: false, message: 'Tip cannot be negative' };
  }
  if (tip > 100) {
    return { isValid: false, message: 'Tip percentage cannot exceed 100%' };
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
  
  // Checks for decimal point
  if (peopleStr.includes('.')) {
    return { isValid: false, message: 'Number of people must be a whole number' };
  }
  
  const peopleVal = parseFloat(peopleStr);
  if (isNaN(peopleVal)) {
    return { isValid: false, message: 'Please enter a valid number' };
  }
  if (peopleVal < 1) {
    return { isValid: false, message: 'Must be at least 1 person' };
  }
  if (!Number.isInteger(peopleVal)) {
    return { isValid: false, message: 'Must be a whole number' };
  }
  if (peopleVal > 10000) { // Limit for safety
    return { isValid: false, message: 'Number of people exceeds maximum limit (10,000)' };
  }
  
  return { isValid: true, message: '' };
};
