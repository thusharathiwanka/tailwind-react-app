import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div className="container px-8 mx-auto">
				<Nav />
			</div>
		</Router>
	);
}

export default App;
