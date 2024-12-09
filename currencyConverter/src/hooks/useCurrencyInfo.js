import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {
	const [data, setData] = useState({});
	// let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`;
	let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res[currency]));
	}, [currency]);

	return data;
}

export default useCurrencyInfo;
