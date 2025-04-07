import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
// import ConfirmedBooking from "./pages/ConfirmedBooking";

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/reservations" element={<BookingPage />} />
				{/* <Route path="/confirmed-booking" element={<ConfirmedBooking />} /> */}
			</Routes>
			<Footer />
		</>
	);
};

export default App;
