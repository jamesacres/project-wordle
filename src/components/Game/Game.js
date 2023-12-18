import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { Banner } from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState('in_progress');

  const [guesses, setGuesses] = React.useState([]);
  const submitGuess = (guess) => {
    if (status === 'in_progress') {
      const nextGuesses = [
        ...guesses,
        {
          id: crypto.randomUUID(),
          value: guess,
          statuses: checkGuess(guess, answer).map((result) => result.status),
        },
      ];
      setGuesses(nextGuesses);

      if (guess === answer) {
        setStatus('won');
      } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setStatus('lost');
      }
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        submitGuess={submitGuess}
        disabled={status !== 'in_progress'}
      />
      {status === 'won' && (
        <Banner className={'happy'}>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </Banner>
      )}
      {status === 'lost' && (
        <Banner className={'sad'}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
