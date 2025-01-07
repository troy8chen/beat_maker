import React, { useState, useEffect } from 'react';

interface DrumPadProps {
    sound: string;
    label: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ sound, label }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = () => {
        setIsPlaying(true);
        const audio = new Audio(sound);
        audio.play().finally(() => setIsPlaying(false));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toUpperCase() === label.toUpperCase()) {
                playSound();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [label, sound]);

    return (
        <button className={`drum-pad ${isPlaying ? 'playing' : ''}`} onClick={playSound}>
            {label}
        </button>
    );
};

export default DrumPad;