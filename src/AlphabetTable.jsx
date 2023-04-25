import { useSelector } from 'react-redux';

const AlphabetTable = () => {
  const alphabetData = useSelector((state) => state.alphabet.alphabetData);

  return (
    <table>
      <thead>
        <tr>
          <th>Letter</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(alphabetData).map(([letter, { count }]) => (
          <tr key={letter}>
            <td>{letter}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlphabetTable;
