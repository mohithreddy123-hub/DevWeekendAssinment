import { useState, useMemo, useEffect, useRef } from 'react';
import { sanitizeInputString } from '../utils/formatters';
import { validateBill, validateTip, validatePeople } from '../utils/validators';
import { calculateTipAndSplit } from '../utils/calculations';

export const useTipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(''); 
  const [customTip, setCustomTip] = useState(''); 
  const [people, setPeople] = useState('');
  
  const [errors, setErrors] = useState({
    bill: '',
    tip: '',
    people: ''
  });

  
  const billTimeoutRef = useRef(null);
  const tipTimeoutRef = useRef(null);
  const peopleTimeoutRef = useRef(null);

  const clearTimeouts = () => {
    if (billTimeoutRef.current) clearTimeout(billTimeoutRef.current);
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
    if (peopleTimeoutRef.current) clearTimeout(peopleTimeoutRef.current);
  };

  
  useEffect(() => {
    return () => clearTimeouts();
  }, []);

  
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

  const handlePresetTip = (percent) => {
    if (tipTimeoutRef.current) clearTimeout(tipTimeoutRef.current);
    setCustomTip(''); // Clear custom field
    setTipPercent(percent.toString());
    
    
    setErrors((prev) => ({ ...prev, tip: '' }));
  };

  
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

  
  const handlePeopleChange = (value) => {
    
    const hasMinus = value.startsWith('-');
    let cleaned = value.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = `${parts[0]}.${parts.slice(1).join('')}`;
    }
    if (hasMinus) {
      cleaned = '-' + cleaned;
    }
    setPeople(cleaned);
    
    if (peopleTimeoutRef.current) clearTimeout(peopleTimeoutRef.current);
    
    const validation = validatePeople(cleaned);
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
  const calculations = useMemo(() => {
    return calculateTipAndSplit(bill, tipPercent, people);
  }, [bill, tipPercent, people]);

  
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
