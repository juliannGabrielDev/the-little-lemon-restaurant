import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/bookingApi";
import PropTypes from "prop-types";

import Button from "../components/Button";
import Input from "../components/Input";

import Arrowback from "../assets/images/icons/arrow-back.svg";

async function safeFetchAPI(date) {
	try {
		const times = await fetchAPI(date);
		return times || [];
	} catch (error) {
		console.error("Error fetching times:", error);
		return [];
	}
}

function timesReducer(state, action) {
	switch (action.type) {
		case "UPDATE_TIMES":
			return action.payload;
		default:
			return state;
	}
}

export default function BookingPage() {
	const [availableTimes, dispatch] = useReducer(timesReducer, []);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchInitialTimes() {
			const today = new Date().toISOString().split("T")[0];
			console.log("Fetching initial times for:", today);
			const times = await safeFetchAPI(today);
			console.log("Fetched times:", times);
			dispatch({ type: "UPDATE_TIMES", payload: times });
		}
		fetchInitialTimes();
	}, []);

	async function updateTimes(selectedDate) {
		console.log("Updating times for date:", selectedDate);
		const times = await safeFetchAPI(selectedDate);
		console.log("Updated times:", times);
		dispatch({ type: "UPDATE_TIMES", payload: times });
	}

	return (
		<main className="p-4 pt-24 max-w-3xl mx-auto">
			<Button id="back-button" variant="white" className="mb-4" onClick={() => navigate("/")}>
				<img src={Arrowback} alt="Back" />
			</Button>
			<h1 className="h1 text-primary-green text-center mb-5">
				Reserve a Table
			</h1>
			<BookingForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}
				navigate={navigate}
			/>
		</main>
	);
}

function BookingForm({ availableTimes, updateTimes, navigate }) {
	const [formData, setFormData] = useState({
		date: new Date().toISOString().split("T")[0],
		guests: "1",
		time: "",
		occasion: "Casual",
	});
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		if (availableTimes.length > 0 && !formData.time) {
			setFormData((prev) => ({
				...prev,
				time: availableTimes[0],
			}));
		}
	}, [availableTimes, formData.time]);

	useEffect(() => {
		console.log("Form data:", formData);
		const isValid =
			formData.date &&
			formData.time &&
			formData.guests > 0 &&
			formData.guests <= 10 &&
			formData.occasion;
		setIsFormValid(isValid);
	}, [formData]);

	function submitForm(e, formData) {
		e.preventDefault();
		if (submitAPI(formData)) {
			navigate("/confirmed-booking");
		}
	}

	function handleChange(e) {
		const { id, value } = e.target;

        const fieldName = id === "booking-date" ? "date" : id;
		setFormData({ ...formData, [id]: value });

		if (fieldName === "date") {
			updateTimes(value);
		}
	}

	return (
		<form
			className="max-w-sm mx-auto"
			onSubmit={(e) => submitForm(e, formData)}
		>
			<Input
				id="booking-date"
				type="date"
				label="Choose a date *"
				value={formData.date}
				onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                max={`${new Date().getFullYear()}-12-31`}
				aria-required="true"
				aria-label="Select reservation date"
				required
			/>
			<Input
				id="time"
				type="select"
				label="Choose time *"
				value={formData.time}
				onChange={handleChange}
				aria-required="true"
				aria-label="Select reservation time"
                options={availableTimes.map(time => ({value: time, label: time}))}
				required
			/>
			<Input
				id="guests"
				type="number"
				label="Number of guests *"
				placeholder="1"
				value={formData.guests}
				onChange={handleChange}
				min="1"
				max="10"
				aria-required="true"
				aria-label="Select the number of guests for your reservation"
				aria-invalid={formData.guests <= 0 ? "true" : "false"}
				required
				aria-describedby="guests-error"
			/>
			<Input
				id="occasion"
				type="select"
				label="Occasion *"
				value={formData.occasion}
				onChange={handleChange}
				aria-required="true"
				aria-label="Select the occasion for your reservation"
				required
				options={[
					{ value: "Casual", label: "Casual" },
					{ value: "Birthday", label: "Birthday" },
					{ value: "Anniversary", label: "Anniversary" },
				]}
			/>
			<Input
				id="submit"
				type="submit"
				value="Make your reservation"
				disabled={!isFormValid}
				className={`bg-primary-yellow text-green-950 font-bold ${
					isFormValid ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
				}`}
			/>
		</form>
	);
}

BookingForm.propTypes = {
	availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
	updateTimes: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired,
};
