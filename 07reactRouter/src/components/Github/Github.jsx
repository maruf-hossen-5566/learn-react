// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState({});
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/maruf-hossen-5566")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);

	return (
		<>
			<div className="text-3xl text-white bg-slate-900 py-12 px-4 text-center">
				Github followers: {data.followers}
				<img src={data.avatar_url} alt={data.name} />
			</div>
		</>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch(
		"https://api.github.com/users/maruf-hossen-5566"
	);
	return response.json();
};
