import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="min-w-full mx-auto shadow-sm">
			<header className="container mx-auto flex justify-between items-center h-20">
				<h3 className="text-2xl uppercase font-medium">Egg</h3>
				<nav className="w-1/4">
					<ul className="flex justify-between font-medium text-indigo-700">
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Menu</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
