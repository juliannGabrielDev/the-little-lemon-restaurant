import PropTypes from "prop-types";

const Input = ({
	id,
	type,
	label,
	placeholder,
	value,
	onChange,
	className,
	options,
	...rest
}) => {
	const baseClasses =
		"block w-full p-3 px-4 mb-4 bg-highlight-white rounded-sm focus:border-primary-green focus:ring-primary-green";
	return (
		<>
			{
				label ? (
					<label htmlFor={id} className="block mb-2 font-medium">
						{label}
					</label>
				) : null
			}
			{type === "select" ? (
				<select
					id={id}
					value={value}
					onChange={onChange}
					className={`${className} ${baseClasses}`}
					aria-label={label}
					{...rest}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className={`${className} ${baseClasses}`}
					aria-label={label}
					{...rest}
				/>
			)}
		</>
	);
};
Input.defaultProps = {
	type: "text",
	onChange: () => {}
};
Input.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	),
	rest: PropTypes.object,
};
export default Input;
