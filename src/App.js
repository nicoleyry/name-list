import { useEffect, useState } from 'react';
import './App.scss';
import Name from './components/Name';
import Pager from './components/Pager';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

	useEffect(() => {
		axios.get(`${url}`).then((response) => {
			setData(response.data);
		});
	}, [url]);

	return (
		<div className='App'>
			<Name data={data} />
			<Pager data={data} setUrl={setUrl}/>
		</div>
	);
}

export default App;
