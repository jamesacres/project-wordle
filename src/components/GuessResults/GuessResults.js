import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import Guess from '../Guess/Guess';

const empties = Array.from(Array(NUM_OF_GUESSES_ALLOWED)).map((_, i) => {
  return { id: crypto.randomUUID(), value: ' '.repeat(WORD_LENGTH) };
});

const GuessResults = ({ guesses }) => {
  return (
    <>
      <div className="guess-results">
        {[
          ...guesses,
          ...empties.slice(0, NUM_OF_GUESSES_ALLOWED - guesses.length),
        ].map((guess) => (
          <Guess key={guess.id} guess={guess} />
        ))}
      </div>
    </>
  );
};

export default GuessResults;
