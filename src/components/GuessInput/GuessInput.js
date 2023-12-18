import React from 'react';
import { WORD_LENGTH } from '../../constants';

const GuessInput = ({ submitGuess }) => {
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length === WORD_LENGTH) {
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
            const nextGuess = e.target.value
              .slice(0, WORD_LENGTH)
              .toUpperCase();
            setGuess(nextGuess);
          }}
        ></input>
      </form>
    </>
  );
};

export default GuessInput;
