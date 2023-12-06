import { Routes, Route, BrowserRouter } from "react-router-dom";

import MediaPlayer from "./player/mediaPlayer";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MediaPlayer />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
