import { useState, useMemo, useEffect, useRef } from 'react';
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

  // Timeout references for debounced validation
  const billTimeoutRef = useRef(null);
  const tipTimeoutRef = useRef(null);
  const peopleTimeoutRef = useRef(null);

  const clearTimeouts = () => {
    if (billTimeoutRef.current) clearTimeout(billTimeoutRef.current);
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
    if (peopleTimeoutRef.current) clearTimeout(peopleTimeoutRef.current);
  };

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => clearTimeouts();
  }, []);

  // Handle bill amount change
  const handleBillChange = (value) => {
    const sanitized = sanitizeInputString(value);
    setBill(sanitized);
    
    if (billTimeoutRef.current) clearTimeout(billTimeoutRef.current);
    
    const validation = validateBill(sanitized);
    if (validation.isValid) {
      setErrors((prev) => ({ ...prev, bill: '' }));
    } else {
      billTimeoutRef.current = setTimeout(() => {
        setErrors((prev) => ({ ...prev, bill: validation.message }));
      }, 600);
    }
  };

  const handleBillBlur = () => {
    if (billTimeoutRef.current) clearTimeout(billTimeoutRef.current);
    const validation = validateBill(bill);
    setErrors((prev) => ({ ...prev, bill: validation.message }));
  };

  // Handle preset tip selection
  const handlePresetTip = (percent) => {
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
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
    
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
    
    const validation = validateTip(sanitized);
    if (validation.isValid) {
      setErrors((prev) => ({ ...prev, tip: '' }));
    } else {
      tipTimeoutRef.current = setTimeout(() => {
        setErrors((prev) => ({ ...prev, tip: validation.message }));
      }, 600);
    }
  };

  const handleCustomTipBlur = () => {
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
    const validation = validateTip(customTip);
    setErrors((prev) => ({ ...prev, tip: validation.message }));
  };

  // Handle number of people change
  const handlePeopleChange = (value) => {
    // Only allow positive integers (no decimals, no letters)
    const sanitized = value.replace(/[^0-9]/g, '');
    setPeople(sanitized);
    
    if (peopleTimeoutRef.current) clearTimeout(peopleTimeoutRef.current);
    
    const validation = validatePeople(sanitized);
    if (validation.isValid) {
      setErrors((prev) => ({ ...prev, people: '' }));
    } else {
      peopleTimeoutRef.current = setTimeout(() => {
        setErrors((prev) => ({ ...prev, people: validation.message }));
      }, 600);
    }
  };

  const handlePeopleBlur = () => {
    if (peopleTimeoutRef.current) clearTimeout(peopleTimeoutRef.current);
    const validation = validatePeople(people);
    setErrors((prev) => ({ ...prev, people: validation.message }));
  };

  // Reset all states
  const handleReset = () => {
    clearTimeouts();
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
    handleBillBlur,
    handlePresetTip,
    handleCustomTipChange,
    handleCustomTipBlur,
    handlePeopleChange,
    handlePeopleBlur,
    handleReset
  };
};
