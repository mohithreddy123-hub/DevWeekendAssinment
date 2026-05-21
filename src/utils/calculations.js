/**
 * Computes tip amount, grand total, and split amount safely.
 *
 * @param {number|string} bill
 * @param {number|string} tipPercent
 * @param {number|string} people
 * @returns {{totalTip: number, grandTotal: number, perPersonShare: number, perPersonTip: number}}
 */
export const calculateTipAndSplit = (bill, tipPercent, people) => {
  const b = parseFloat(bill);
  const t = parseFloat(tipPercent);
  const p = parseInt(people, 10);
  
  // If inputs are not valid numbers, default to 0
  const cleanBill = isNaN(b) || b < 0 ? 0 : b;
  const cleanTipPercent = isNaN(t) || t < 0 ? 0 : t;
  
  // Calculation of total tip and grand total
  const totalTip = (cleanBill * cleanTipPercent) / 100;
  const grandTotal = cleanBill + totalTip;
  
  // Split calculations
  // If people input is empty, invalid, or 0, default per person share to 0 to prevent Infinity
  const cleanPeople = isNaN(p) || p < 1 ? 0 : p;
  
  const perPersonShare = cleanPeople > 0 ? grandTotal / cleanPeople : 0;
  const perPersonTip = cleanPeople > 0 ? totalTip / cleanPeople : 0;
  
  return {
    totalTip,
    grandTotal,
    perPersonShare,
    perPersonTip
  };
};
