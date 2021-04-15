import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category); //--> customHook

	return (
		<>
			<div>{category}</div>
			{loading && <p>Loading</p>}
			{
				<div className="cardGrid">
					<div>
						{images.map((img) => (
							<GifGridItem key={img.id} {...img} />
							//--->envia como parametro un spread con el objeto img
						))}
					</div>
				</div>
			}
		</>
	);
};

export default GifGrid;
