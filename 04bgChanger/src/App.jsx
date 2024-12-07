import { useState } from "react";

function App() {
	const [color, setColor] = useState("red");

	return (
		<div className={`w-screen h-screen duration-300 bg-${color}-500`}>
			<div className="fixed w-full flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-3 rounded-full">
					<button
						className="!outline-none px-4 rounded-full capitalize bg-red-500 outline-2 outline-dashed"
						onClick={() => setColor("red")}>
						Red
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-green-500"
						onClick={() => setColor("green")}>
						Green
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-blue-500"
						onClick={() => setColor("blue")}>
						Blue
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-slate-500"
						onClick={() => setColor("slate")}>
						Slate
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-orange-500"
						onClick={() => setColor("orange")}>
						orange
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-yellow-500"
						onClick={() => setColor("yellow")}>
						yellow
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-lime-500"
						onClick={() => setColor("lime")}>
						lime
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-teal-500"
						onClick={() => setColor("teal")}>
						teal
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-cyan-500"
						onClick={() => setColor("cyan")}>
						cyan
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-sky-500"
						onClick={() => setColor("sky")}>
						sky
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-indigo-500"
						onClick={() => setColor("indigo")}>
						indigo
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-violet-500"
						onClick={() => setColor("violet")}>
						violet
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-purple-500"
						onClick={() => setColor("purple")}>
						purple
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-fuchsia-500"
						onClick={() => setColor("fuchsia")}>
						fuchsia
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-pink-500"
						onClick={() => setColor("pink")}>
						pink
					</button>
					<button
						className="!outline-none px-4 rounded-full capitalize bg-rose-500"
						onClick={() => setColor("rose")}>
						rose
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
