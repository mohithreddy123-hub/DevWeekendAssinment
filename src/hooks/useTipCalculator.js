import { useState, useMemo } from 'react';
import { sanitizeInputString } from '../utils/formatters';
import { validateBill, validateTip, validatePeople } from '../utils/validators';
import { calculateTipAndSplit } from '../utils/calculations';

export const useTipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(''); // Current active tip percent (preset or custom)
  const [customTip, setCustomTip] = useState(''); // Custom tip percent string
  const [people, setPeople] = useState('');
  
  // Validation errors state
  const [errors, setErrors] = useState({
    bill: '',
    tip: '',
    people: ''
  });

  // Handle bill amount change
  const handleBillChange = (value) => {
    const sanitized = sanitizeInputString(value);
    setBill(sanitized);
    
    const validation = validateBill(sanitized);
    setErrors((prev) => ({ ...prev, bill: validation.message }));
  };

  // Handle preset tip selection
  const handlePresetTip = (percent) => {
    setCustomTip(''); // Clear custom field
    setTipPercent(percent.toString());
    
    // Clear any previous tip error
    setErrors((prev) => ({ ...prev, tip: '' }));
  };

  // Handle custom tip percent change
  const handleCustomTipChange = (value) => {
    const sanitized = sanitizeInputString(value);
    setCustomTip(sanitized);
    setTipPercent(sanitized);
    
    const validation = validateTip(sanitized);
    setErrors((prev) => ({ ...prev, tip: validation.message }));
  };

  // Handle number of people change
  const handlePeopleChange = (value) => {
    // Only allow positive integers (no decimals, no letters)
    const sanitized = value.replace(/[^0-9]/g, '');
    setPeople(sanitized);
    
    const validation = validatePeople(sanitized);
    setErrors((prev) => ({ ...prev, people: validation.message }));
  };

  // Reset all states
  const handleReset = () => {
    setBill('');
    setTipPercent('');
    setCustomTip('');
    setPeople('');
    setErrors({
      bill: '',
      tip: '',
      people: ''
    });
  };

  // Real-time calculation derived state
  const calculations = useMemo(() => {
    return calculateTipAndSplit(bill, tipPercent, people);
  }, [bill, tipPercent, people]);

  // Reset button is active if any inputs or errors exist
  const canReset = useMemo(() => {
    return !!(
      bill ||
      tipPercent ||
      customTip ||
      people ||
      errors.bill ||
      errors.tip ||
      errors.people
    );
  }, [bill, tipPercent, customTip, people, errors]);

  return {
    bill,
    tipPercent,
    customTip,
    people,
    errors,
    calculations,
    canReset,
    handleBillChange,
    handlePresetTip,
    handleCustomTipChange,
    handlePeopleChange,
    handleReset
  };
};
