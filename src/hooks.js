import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useFlip = () => {
	const [ state, setState ] = useState(true);

	const flipState = () => {
		setState((state) => !state);
	};

	return [ state, flipState ];
};

const useAxios = (URL) => {
	const [ arr, setArr ] = useState([]);

	const addToArr = async (restOfURL) => {
		const response = await axios.get(URL + restOfURL);
		setArr((arr) => [ ...arr, { ...response.data, id: uuid() } ]);
	};

	return [ arr, addToArr ];
};
// const response = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   );
//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);

export default useFlip;
export { useAxios };
