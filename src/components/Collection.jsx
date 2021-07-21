import React from "react";
import EggOne from "../images/egg-1.jpg";
import EggTwo from "../images/egg-2.jpg";
import EggThree from "../images/egg-3.jpg";

const Collection = () => {
	return (
		<div className="container mx-auto mb-40">
			<h1 className="text-gray-800 font-bold text-5xl text-center mb-40">
				Explore the Collection
			</h1>
			<div className="flex justify-around flex-wrap">
				<div className="w-80 rounded-lg overflow-hidden shadow-md mx-5 my-10">
					<img
						src={EggOne}
						alt="egg-1"
						className="w-full h-80 object-cover object-bottom max-w-full"
					/>
					<div className="p-5">
						<h3 className="font-bold text-xl text-gray-800 pb-2">Product 01</h3>
						<p className="text-gray-500 font-medium pb-4 leading-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, repellat.
						</p>
						<button className="bg-indigo-900 border-2 border-indigo-900 text-white px-8 py-1 rounded-full font-medium tracking-wider text-md transition-all hover:text-indigo-900 hover:bg-white">
							View
						</button>
					</div>
				</div>
				<div className="w-80 rounded-lg overflow-hidden shadow-md mx-5 my-10">
					<img
						src={EggTwo}
						alt="egg-2"
						className="w-full h-80 object-cover object-bottom max-w-full"
					/>
					<div className="p-5">
						<h3 className="font-bold text-xl text-gray-800 pb-2">Product 02</h3>
						<p className="text-gray-500 font-medium pb-4 leading-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, repellat.
						</p>
						<button className="bg-indigo-900 border-2 border-indigo-900 text-white px-8 py-1 rounded-full font-medium tracking-wider text-md transition-all hover:text-indigo-900 hover:bg-white">
							View
						</button>
					</div>
				</div>
				<div className="w-80 rounded-lg overflow-hidden shadow-md mx-5 my-10">
					<img
						src={EggThree}
						alt="egg-3"
						className="w-full h-80 object-cover object-bottom max-w-full"
					/>
					<div className="p-5">
						<h3 className="font-bold text-xl text-gray-800 pb-2">Product 03</h3>
						<p className="text-gray-500 font-medium pb-4 leading-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, repellat.
						</p>
						<button className="bg-indigo-900 border-2 border-indigo-900 text-white px-8 py-1 rounded-full font-medium tracking-wider text-md transition-all hover:text-indigo-900 hover:bg-white">
							View
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
