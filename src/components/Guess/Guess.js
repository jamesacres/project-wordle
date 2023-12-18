const Guess = ({ guess: { value, statuses } }) => {
  return (
    <p className="guess">
      {value.split('').map((letter, i) => {
        const status =
          statuses && statuses.length > i ? statuses[i] : undefined;
        return (
          <span key={i} className={`cell${status ? ` ${status}` : ''}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
