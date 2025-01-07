# Simple Drum Pad

This is a simple drum pad web application built with React and TypeScript. It allows users to trigger drum sounds by clicking on the pads or pressing the corresponding keys on their keyboard.

## Features

*   Nine drum pads, each assigned to a different drum sound.
*   Click and keyboard input for triggering sounds.
*   Simple and clean user interface.

## Technologies Used

*   React
*   TypeScript
*   HTML
*   CSS
*   Web Audio API

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/](https://github.com/troy8chen/beat_maker.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd beat_maker
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173/` (or the port shown in your terminal).

## How to Use

*   Click on a drum pad to play the corresponding sound.
*   Press the corresponding key on your keyboard (Q, W, E, A, S, D, Z, X, C) to play the sound.

## Folder Structure

  ```bash
  my-beat-maker-app/
├── public/
│   └── sounds/       <-- Your .wav files go here (in a subfolder like 808)
├── src/
│   ├── components/  <-- Reusable React components
│   │   └── DrumPad.tsx
│   ├── App.tsx
│   ├── App.css
│   └── assets/        <-- Other assets like images, if needed
├── .gitignore
├── package.json
├── tsconfig.json
└── ... other config files
```

## Sound Files

Place your `.wav` sound files in a subfolder within the `public/sounds/` directory (e.g., `public/sounds/808/`). The file names in your `App.tsx` file should match the file names in this directory.

## Future Improvements

*   Add volume control for each drum pad.
*   Implement a visual display to show which pad is playing.
*   Add a simple sequencer.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT License](https://opensource.org/licenses/MIT)
