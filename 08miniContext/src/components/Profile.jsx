import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);

	return user ? (
		<>
			<div className="block w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-10">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<p>Welcome {user.username}</p>
				</h5>
			</div>
		</>
	) : (
		<>
			<div className="block w-full max-w-sm p-6 bg-gray-900 text-white border border-gray-200 rounded-lg shadow mt-10">
				<h5 className="text-2xl font-bold tracking-tight ">
					<p>Please Login</p>
				</h5>
			</div>
		</>
	);
}

export default Profile;
