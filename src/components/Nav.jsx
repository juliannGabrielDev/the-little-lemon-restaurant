import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, memo } from "react";

import Logo from "../assets/images/icons/logo.svg";
import Basket from "../assets/images/icons/Basket.svg";
import Menu from "../assets/images/icons/hamburger-menu.svg";
import PropTypes from "prop-types";

const styles = {
	nav: {
		container: "bg-white fixed top-0 w-full z-20 shadow-md",
		wrapper:
			"flex items-center justify-between gap-5 max-w-4xl mx-auto py-4 px-5",
		logo: "h-9 lg:h-10",
		actions: "flex items-center gap-5",
		icon: "w-8 cursor-pointer",
	},
	menu: {
		desktop:
			"hidden md:flex justify-self-center font-karla text-primary-green font-bold text-lg",
		mobileBase:
			"md:hidden fixed top-0 w-full h-screen z-10 flex items-center justify-center font-karla font-bold text-2xl bg-primary-green text-highlight-white",
		mobileOpen: "right-0",
		mobileClosed: "-right-full",
		closeButton: "absolute top-5 right-5 text-2xl",
		list: "flex flex-col items-center gap-5",
	},
	link: {
		base: "py-1 px-3 font-bold rounded-sm whitespace-nowrap",
		active: "text-highlight-white bg-primary-green",
		inactive: "bg-transparent",
	},
};

const Nav = () => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setIsMenuMobileOpen((prev) => !prev);

		if (isMenuMobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isMenuMobileOpen]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "Escape" && isMenuMobileOpen) {
				toggleMenu();
			}
		},
		[isMenuMobileOpen, toggleMenu]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto";
		};
	}, [handleKeyDown]);

	return (
		<nav className={styles.nav.container} aria-label="Main Navigation">
			<div className={styles.nav.wrapper}>
				<Link to="/" className="cursor-pointer" aria-label="Go to Home Page">
					<img src={Logo} className={styles.nav.logo} alt="Little Lemon" />
				</Link>
				<MemorizedNavMenu />
				<div className={styles.nav.actions}>
					<button aria-label="Go to Basket">
						<img src={Basket} className={styles.nav.icon} alt="" />
					</button>
					<button
						onClick={toggleMenu}
						className="md:hidden"
						aria-label="Open Menu"
					>
						<img src={Menu} className={styles.nav.icon} alt="" />
					</button>
				</div>
			</div>
			<MemorizedNavMenuMobile
				isMenuMobileOpen={isMenuMobileOpen}
				toggleMenu={toggleMenu}
			/>
		</nav>
	);
};

const NavMenu = () => {
	return (
		<ul className={styles.menu.desktop}>
			<NavLink route="/">Home</NavLink>
			<NavLink route="/menu">Menu</NavLink>
			<NavLink route="/reservations">Reservations</NavLink>
			<NavLink route="/order-online">Order Online</NavLink>
			<NavLink route="/login">Login</NavLink>
		</ul>
	);
};

const NavMenuMobile = ({ isMenuMobileOpen, toggleMenu }) => {
	const menuRef = useRef(null);
	const closeButtonRef = useRef(null);

	// Cuando el menú se abre, enfoca el primer elemento
	useEffect(() => {
		if (isMenuMobileOpen && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, [isMenuMobileOpen]);

	// Eliminamos el código duplicado:
	// - No necesitamos otro handler para Escape
	// - No necesitamos añadir otro event listener
	
	const mobileMenuPosition = isMenuMobileOpen
		? styles.menu.mobileOpen
		: styles.menu.mobileClosed;

	// Si el menú está cerrado, no lo renderices para evitar problemas de accesibilidad
	if (!isMenuMobileOpen) {
		return null;
	}

	return (
		<div
			ref={menuRef}
			className={`${styles.menu.mobileBase} ${mobileMenuPosition}`}
			role="dialog"
			aria-modal={true}
			aria-label="Mobile Navigation Menu"
		>
			<button
				ref={closeButtonRef}
				onClick={toggleMenu}
				className={styles.menu.closeButton}
				aria-label="Close Menu"
			>
					✕
			</button>
			<ul className={styles.menu.list} role="menu">
				<NavLink route="/" toggleMenu={toggleMenu}>
					Home
				</NavLink>
				<NavLink route="/about" toggleMenu={toggleMenu}>
					About
				</NavLink>
				<NavLink route="/menu" toggleMenu={toggleMenu}>
					Menu
				</NavLink>
				<NavLink route="/reservations" toggleMenu={toggleMenu}>
					Reservations
				</NavLink>
				<NavLink route="/order-online" toggleMenu={toggleMenu}>
					Order Online
				</NavLink>
				<NavLink route="/login" toggleMenu={toggleMenu}>
					Login
				</NavLink>
			</ul>
		</div>
	);
};

const NavLink = ({ route, children, toggleMenu }) => {
	const location = useLocation();
	const isActive = location.pathname === route;
	const activeClassName = isActive ? styles.link.active : styles.link.inactive;
	const className = `${activeClassName} ${styles.link.base}`;

	const handleClick = () => {
		if (toggleMenu) toggleMenu();
	};

	return (
		<li>
			<Link
				to={route}
				onClick={handleClick}
				className={className}
				aria-label={`Go to ${children}`}
				aria-current={isActive ? "page" : undefined}
				role="menuitem"
			>
				{children}
			</Link>
		</li>
	);
};

const MemorizedNavMenu = memo(NavMenu);
const MemorizedNavMenuMobile = memo(NavMenuMobile);

export default Nav;

NavMenuMobile.propTypes = {
	isMenuMobileOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

NavLink.propTypes = {
	route: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	toggleMenu: PropTypes.func,
};