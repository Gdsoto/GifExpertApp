import React, { useEffect, useState } from 'react';

const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const url =
			'https://api.giphy.com/v1/gifs/search?q=Wanda&limit=10&api_key=xkk6MGZIZ1hBlKBa8JkjzONUh994PrAb';

		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});

		setImages(gifs);
	};

	return (
		<>
			<div>{category}</div>
		</>
	);
};

export default GifGrid;
