import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);
	// let counter = 15;
	const addValue = () => {
		if (counter < 20) {
			setCounter(counter + 1);
		}
	};
	const removeValue = () => {
		console.log("Clicked", counter);
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<div>
			<h1>Chai aur react {counter}</h1>
			<h2>Counter value: {counter}</h2>

			<button onClick={addValue}>Add {counter}</button>
			<span> </span>
			<button onClick={removeValue}>Remove {counter}</button>
			<p>footer {counter}</p>
		</div>
	);
}

export default App;
