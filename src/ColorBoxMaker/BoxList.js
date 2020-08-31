import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

function BoxList() {
	const INTIAL_STATE = [
		{
			id: uuid(),
			width: 100,
			height: 100,
			backgroundColor: 'red'
		},
		{
			id: uuid(),
			width: 100,
			height: 100,
			backgroundColor: 'orange'
		},
		{
			id: uuid(),
			width: 100,
			height: 100,
			backgroundColor: 'slateblue'
		}
	];
	const [boxSpecs, setBoxSpecs] = useState(INTIAL_STATE);
	const addBox = (newBox) => {
		setBoxSpecs((boxSpecs) => [...boxSpecs, { id: uuid(), ...newBox }]);
	};

	const handleDelete = (box) => {
		setBoxSpecs(boxSpecs.filter((val) => val !== box));
	};

	return (
		<>
			<div className='BoxList'>
				{boxSpecs.map((specs) => (
					<Box
						backgroundColor={specs.backgroundColor}
						width={specs.width}
						height={specs.height}
						key={specs.id}
						deleteBox={() => handleDelete(specs)}
					/>
				))}
			</div>
			<NewBoxForm addBox={addBox} />
		</>
	);
}

export default BoxList;
