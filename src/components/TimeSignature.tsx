import React, { useState } from 'react';

interface TimeSignatureProps {
  onChange: (numerator: number, denominator: number) => void;
}

const TimeSignature: React.FC<TimeSignatureProps> = ({ onChange }) => {
  const [numerator, setNumerator] = useState(4);
  const [denominator, setDenominator] = useState(4);

  const handleNumeratorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumerator(parseInt(event.target.value, 10));
    onChange(parseInt(event.target.value, 10), denominator);
  };

    const handleDenominatorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setDenominator(parseInt(event.target.value, 10));
      onChange(numerator, parseInt(event.target.value, 10));
    };

  return (
    <div>
      <label htmlFor="numerator">Numerator:</label>
      <input
        type="number"
        id="numerator"
        value={numerator}
        onChange={handleNumeratorChange}
        min="1"
      />
      <label htmlFor="denominator">Denominator:</label>
      <select id="denominator" value={denominator} onChange={handleDenominatorChange}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
      </select>
    </div>
  );
};

export default TimeSignature;