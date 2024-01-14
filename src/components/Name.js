// import '../styles/name.scss';
import { useEffect, useState } from 'react';
import isEmpty from '../isEmpty';

export default function Name({ data }) {
	const [nameList, setNameList] = useState([]);

	useEffect(() => {
		if (!isEmpty(data)) {
			setNameList([]);
			for (var i = 0; i < data.results.length; i++) {
				let name = data.results[i].name;
				setNameList(nameList => [...nameList, name]);
			}
		}
	}, [data]);

	return (
		<div className='Name'>
			<h1 className='title'>Name List</h1>
			<ul>
				{nameList.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</div>
	);
}
