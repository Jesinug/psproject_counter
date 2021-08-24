import {useState, React} from "react";
import AddingButton from "./Components/Button/AddingButton";
import SubstractingButton from "./Components/Button/SubstractingButton";
import Display from "./Components/Display/Display";
import './App.css';




function App() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  const decrementCounter = (decrementValue) => setCounter(counter-decrementValue);

	return (
    <div className='counterwraper'>
      <AddingButton onClickFunction={incrementCounter} increment={1} />
      <AddingButton onClickFunction={incrementCounter} increment={5} />
      <AddingButton onClickFunction={incrementCounter} increment={10} />
      <AddingButton onClickFunction={incrementCounter} increment={100} />
      
      <SubstractingButton onClickFunction={decrementCounter} decrement={1} />
      <SubstractingButton onClickFunction={decrementCounter} decrement={5} />
      <SubstractingButton onClickFunction={decrementCounter} decrement={10} />
      <SubstractingButton onClickFunction={decrementCounter} decrement={100} />
      
      <Display message={counter}/>
    </div>  
  );
}

export default App;
