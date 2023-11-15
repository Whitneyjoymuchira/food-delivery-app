import { Routes, Route } from "react-router-dom";
import { Main, Login } from "./containers";

const App = () => {
	return (
		<div className="min-h-screen w-screen h-auto flex flex-col items-center justify-center">
			<Routes>
				<Route path="/*" element={<Main />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
