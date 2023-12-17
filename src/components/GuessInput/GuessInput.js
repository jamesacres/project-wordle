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
          submitGuess(guess);
          setGuess('');
        }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => setGuess(e.target.value.slice(0, 5).toUpperCase())}
        ></input>
      </form>
    </>
  );
};

export default GuessInput;
