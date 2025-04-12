import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import SectionInProcess from "./pages/SectionInProcess";

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/menu" element={<SectionInProcess />} />
				<Route path="/reservations" element={<BookingPage />} />
				<Route path="/order-online" element={<SectionInProcess />} />
				<Route path="/login" element={<SectionInProcess />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
