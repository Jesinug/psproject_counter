import {useState, React} from "react";
import Header from "./Components/Header/Header";
import AddingButton from "./Components/Button/AddingButton";
import SubstractingButton from "./Components/Button/SubstractingButton";
import Display from "./Components/Display/Display";
import './App.css';




function App() {
  const [tracker, setTracker] = useState(0);
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  const decrementCounter = (decrementValue) => setCounter(counter-decrementValue);

	return (
    <>
        <Header onCLickFunction={tracker} />
        <div className="add-wraper">
          <AddingButton onClickFunction={incrementCounter} increment={1} />
          <AddingButton onClickFunction={incrementCounter} increment={5} />
          <AddingButton onClickFunction={incrementCounter} increment={10} />
          <AddingButton onClickFunction={incrementCounter} increment={100} />
        </div>
        <div className="substract-wraper">
          <SubstractingButton onClickFunction={decrementCounter} decrement={1} />
          <SubstractingButton onClickFunction={decrementCounter} decrement={5} />
          <SubstractingButton onClickFunction={decrementCounter} decrement={10} />
          <SubstractingButton onClickFunction={decrementCounter} decrement={100} />
        </div>
        <div className="display-wraper">
          <Display message={counter}/>
        </div>
    </>  
  );
}

export default App;
