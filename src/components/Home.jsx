import React from "react";

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-90">
			<h1 className="text-8xl font-bold uppercase font-sans text-gray-800 tracking-widest">
				Eggcellect
			</h1>
			<button className="bg-indigo-900 border-2 border-indigo-900 text-white mt-8 px-8 py-4 rounded-full font-bold tracking-wider text-lg transition-all hover:text-indigo-900 hover:bg-white">
				Order Now
			</button>
		</div>
	);
};

export default Home;
