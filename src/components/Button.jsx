import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const styles = {
    base: "px-4 py-2 rounded-4xl font-bold transition-colors duration-200 w-fit cursor-pointer",
    variants: {
        green:
            "bg-primary-green text-white hover:bg-primary-green/90 focus:ring-primary-green",
        yellow:
            "bg-primary-yellow text-green-950 border border-primary-green hover:bg-primary-yellow/90 focus:ring-primary-yellow",
        white: "bg-highlight-white text-primary-green hover:bg-highlight-white/90",
        coral: "",
        text: "bg-transparent text-primary-green hover:underline focus:ring-primary-green/30",
    },
    sizes: {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3",
    },
};

const Button = ({
	children,
	variant = "primary",
	size = "md",
	type = "button",
	to,
	onClick,
	disabled = false,
	className = "",
	ariaLabel,
	...props
}) => {
	const buttonClasses = `
    ${styles.base}
    ${styles.variants[variant] || styles.variants.primary}
    ${styles.sizes[size] || styles.sizes.md}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}`;

	if (to) {
		return (
			<Link to={to} className={buttonClasses} aria-label={ariaLabel} {...props}>
				<span className="whitespace-nowrap">{children}</span>
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			{...props}
		>
			<span className="whitespace-nowrap">{children}</span>
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(["green", "yellow", "text", "white", "coral"]),
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	to: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
};

Button.defaultProps = {
	variant: "green",
	size: "md",
	type: "button",
	disabled: false,
	className: "",
	ariaLabel: "",
};

export default Button;
