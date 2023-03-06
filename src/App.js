// import logo from './logo.svg';
import './App.css';
import Heading1 from './component/Heading1';
import Heading2 from './component/Heading2';
import Heading3 from './component/Heading3';
import Button from './component/Button';

function App() {
  return (
    <>

    {/* Challenge 1 */}
      <h1>I am Heading One.....</h1>
      <h2>I am Heading Two.....</h2>
      <h3>I am Heading Three.....</h3>
      <button>Click Me !!</button>

      {/* Challenge 2 */}
      <Heading1/>
      <Heading2/>
      <Heading3/>
      <Button/>
    </>
  );
}

export default App;
