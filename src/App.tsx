import React from 'react';
import './App.css'; // Make sure this import is present and correct
import DrumPad from './components/DrumPad';

const App: React.FC = () => {
    const sounds = [
        { label: 'Q', sound: '/sounds/808/kick-808.wav' },
        { label: 'W', sound: '/sounds/808/snare-808.wav' },
        { label: 'E', sound: '/sounds/808/hihat-808.wav' },
        { label: 'A', sound: '/sounds/808/clap-808.wav' },
        { label: 'S', sound: '/sounds/808/openhat-808.wav' },
        { label: 'D', sound: '/sounds/808/perc-808.wav' },
        { label: 'Z', sound: '/sounds/808/crash-808.wav' },
        { label: 'X', sound: '/sounds/808/tom-808.wav' },
        { label: 'C', sound: '/sounds/808/cowbell-808.wav' },
    ];

    return (
        <div className="drum-machine">
            <div className="drum-pads">
                {sounds.map((s, index) => (
                    <DrumPad key={index} label={s.label} sound={s.sound} />
                ))}
            </div>
        </div>
    );
};

export default App;