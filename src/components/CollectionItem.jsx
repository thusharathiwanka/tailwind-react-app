import React from "react";
import EggOne from "../images/egg-1.jpg";

const CollectionItem = () => {
	return (
		<div className="h-80 w-80">
			<img src={EggOne} alt="egg-1" />
			<div>
				<h3>Product 01</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
					repellat.
				</p>
			</div>
		</div>
	);
};

export default CollectionItem;
