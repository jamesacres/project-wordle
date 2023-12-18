const Guess = ({ guess: { value } }) => {
  return (
    <p className="guess">
      {value.split('').map((letter, i) => (
        <span key={i} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
