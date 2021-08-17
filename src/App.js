import React from "react";
import Button from "./Components/Button";  n


function App() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter5} increment={5} />
      <Button onClickFunction={incrementCounter10} increment={10} />
      <Button onClickFunction={incrementCounter100} increment={100} />
      
      <Display message={counter}/>
    </div>  
  );
}

export default App;
