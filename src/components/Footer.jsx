import Logo from "../assets/images/icons/little-lemon-footer.png";

const footerLinks = [
	{
		title: "Logo",
		logo: true,
	},
	{
		title: "Doormat Navigation",
		linkNames: [
			"Home",
			"Menu",
			"Reservations",
			"Order Online",
			"Login",
		],
	},
	{
		title: "Contact",
		linkNames: ["Address", "Phone Number", "Email"],
	},
	{
		title: "Social Media",
		links: [
			{
				name: "Facebook", url: "https://www.facebook.com"
			}, {
				name: "X (Twitter)", url: "https://twitter.com/"
			}, {
				name: "Instagram", url: "https://www.instagram.com/"
			}]
	}
];

const styles = {
	container: {
		wrapper: "border-t-2 border-t-primary-green font-karla",
		content:
			"mx-auto grid max-w-4xl grid-cols-2 gap-9 px-5 py-14 sm:flex sm:flex-wrap sm:justify-between",
		copyright:
			"bg-primary-green p-1 text-center text-xs font-medium text-white",
	},
	logo: {
		image: "aspect-[227/400] w-24",
	},
	section: {
		title: "mb-3 font-bold",
		list: "space-y-1",
	},
	link: {
		base: "hover:text-primary-green hover:underline",
	},
};

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.container.wrapper}>
			<div className={styles.container.content}>
				<img
					src={Logo}
					className={styles.logo.image}
					alt="Little Lemon Restaurant Logo"
				/>

				{footerLinks.map((section, index) => !section.logo && (
					<div key={index}>
						<p className={styles.section.title}>{section.title}</p>
						<ul className={styles.section.list}>
							{section.links ? (
								section.links.map(({ name, url }, idx) => {
									return (
										<li key={idx}>
											<a
												href={url}
												target="_blank"
												className={styles.link.base} aria-label={`Go to ${name}`}
											>
												{name}
											</a>
										</li>
									)
								})
							) : section.linkNames.map((linkName, idx) => (<li key={idx}>
								<a href="#" className={styles.link.base} aria-label={`Go to ${linkName}`}
								>
									{linkName}
								</a>
							</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<p className={styles.container.copyright}>
				&copy; {currentYear} Little Lemon
			</p>
		</footer>
	);
};

export default Footer;
