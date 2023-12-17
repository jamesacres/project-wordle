import React from 'react';

const submitGuess = (guess) => {
  console.info(guess);
};

const GuessInput = () => {
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length === 5) {
            submitGuess(guess);
            setGuess('');
          }
        }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => {
            const nextGuess = e.target.value.slice(0, 5).toUpperCase();
            setGuess(nextGuess);
          }}
        ></input>
      </form>
    </>
  );
};

export default GuessInput;
