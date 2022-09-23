import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./constants";
import LoginPage from "./views/LoginPage";
import SingupPage from "./views/SignupPage";

const App = () => (
	<div id="app-home" className="App">
		<Router>
			<Routes>
				<Route path={routes.login} element={<LoginPage />} />
				<Route path={routes.signup} element={<SingupPage />} />
			</Routes>
		</Router>
	</div>
);

export default App;
