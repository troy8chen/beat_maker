import React, { useState } from 'react';

interface SequencerProps {
  numBeats: number;
}

const Sequencer: React.FC<SequencerProps> = ({ numBeats }) => {
  const [sequence, setSequence] = useState<boolean[]>(Array(numBeats).fill(false));

  const handleClick = (index: number) => {
    const newSequence = [...sequence];
    newSequence[index] = !newSequence[index];
    setSequence(newSequence);
  };

  return (
    <div className="sequencer">
      {sequence.map((isActive, index) => (
        <div
          key={index}
          className={`step ${isActive ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Sequencer;