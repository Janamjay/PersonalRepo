import { useDispatch } from 'react-redux';
import { updateAlphabetData } from './reducer';

const AlphabetButtons = () => {
  const dispatch = useDispatch();

  const handleClick = (letter) => {
    dispatch(updateAlphabetData({ letter }));
  };

  return (
    <div>
      {Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)).map((letter) => (
        <button key={letter} onClick={() => handleClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetButtons;
