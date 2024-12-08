import { useCallback, useEffect, useState, useRef } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numbers, setNumbers] = useState(false);
	const [characters, setCharacters] = useState(false);
	const [password, setPassword] = useState("");
	// useRef hook
	const passwordRef = useRef(null);

	const copyPassword = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, length);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numbers) str += "0123456789";
		if (characters) str += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numbers, characters, setPassword]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numbers, characters, passwordGenerator]);

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
				<div className="w-full flex flex-col rounded-lg overflow-hidden mb-4">
					<h1 className="text-white text-center my-3 ">
						Password generator
					</h1>
					<div className="flex rounded-lg overflow-hidden mb-4">
						<input
							className="outline-none w-full py-1 px-3 rounded-lg"
							type="text"
							value={password}
							placeholder="Password"
							readOnly
							ref={passwordRef}
						/>
						<button
							className="ml-4 bg-blue-500 rounded-lg px-3 text-white hover:bg-blue-700"
							onClick={copyPassword}>
							Copy
						</button>
					</div>
					<div className="flex text-sm gap-x-2">
						<div className="flex text-sm gap-x-1">
							<input
								className="cursor-pointer"
								type="range"
								min={6}
								max={100}
								value={length}
								onChange={(e) => {
									setLength(e.target.value);
								}}
							/>
							<label>Length: {length}</label>
						</div>
						<div className="flex text-sm gap-x-1">
							<input
								type="checkbox"
								defaultChecked={numbers}
								id="numberInput"
								onChange={() => {
									setNumbers((prev) => !prev);
								}}
							/>
							<label htmlFor="numberInput">Number</label>
						</div>
						<div className="flex text-sm gap-x-1">
							<input
								type="checkbox"
								defaultChecked={characters}
								id="charInput"
								onChange={() => {
									setCharacters((prev) => !prev);
								}}
							/>
							<label htmlFor="charInput">Characters</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
