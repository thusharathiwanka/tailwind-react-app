import { BrowserRouter as Router } from "react-router-dom";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<Nav />
			<Home />
			<Collection />
		</Router>
	);
}

export default App;
