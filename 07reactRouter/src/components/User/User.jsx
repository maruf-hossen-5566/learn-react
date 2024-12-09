import { useParams } from "react-router-dom";

function User() {
	const { id } = useParams();
	return (
		<>
			<div className="min-h-[50vh] bg-slate-900 text-white py-12 px-4 text-3xl text-center">
				User: {id}
			</div>
		</>
	);
}

export default User;
