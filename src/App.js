// import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Heading1 from './component/Heading';
import Input from './component/Input';

function App() {
  return (
    <>
    {/* challenge1 */}
    <h1>Register Here.....</h1>
    <input type="text" placeholder='Mobile......'/>
    <input type="text"  placeholder='Password......'/>
    <button>Submit</button>


    {/* challenge2 */}

    <Heading1   title="Register Here....."/>
    <Input  name="Mobile...."  pass="Password....."/>
    <Button   btnText="Submit"/>
    </>
  );
}

export default App;
