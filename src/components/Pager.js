// import '../styles/pager.scss';
import { useState, useEffect } from "react";
import isEmpty from "../isEmpty";

export default function Pager({data, setUrl}) {
	const [prev, setPrev] = useState();
	const [next, setNext] = useState();

	const clickHandler = (props) => {
		setUrl(props);
	};

	useEffect(() => {
		if (!isEmpty(data)) {
			console.log(data.info);
			setPrev(data.info.prev);
			setNext(data.info.next);
		}
	}, [data]);

	return (
		<div className="Pager">
			{prev && <div className='btn' onClick={() => clickHandler(prev)}>Prev</div>}
			{next && <div className='btn' onClick={() => clickHandler(next)}>Next</div>}
		</div>
	)
};