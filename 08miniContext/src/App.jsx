import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	return (
		<UserContextProvider>
			<div className="h-screen flex flex-col items-center justify-center">
				<Login />
				<Profile />
			</div>
		</UserContextProvider>
	);
}

export default App;
