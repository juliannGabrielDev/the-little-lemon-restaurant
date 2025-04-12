import { memo, useMemo } from "react";
import Button from "../components/Button";
import "../styles/home.css";

import HeroImage from "../assets/images/hero.jpg";
import LLPhoto from "../assets/images/restaurant.jpg";
import LLPhoto2 from "../assets/images/restaurant-chef-B.jpg";
import GreekSalad from "../assets/images/greek-salad.jpg";
import LemonDessert from "../assets/images/lemon-dessert.jpg";
import Bruchetta from "../assets/images/bruchetta.svg";

// Constantes extraídas
const FOOD_CATEGORIES = [
	{ id: "lunch", label: "Lunch" },
	{ id: "mains", label: "Mains" },
	{ id: "desserts", label: "Desserts" },
	{ id: "alacarte", label: "A la Carte" },
	{ id: "specials", label: "Specials" },
	{ id: "drinks", label: "Drinks" },
];

const TESTIMONIALS = [
	{
		id: 1,
		rating: 5,
		profile: "https://randomuser.me/api/portraits/women/44.jpg",
		name: "Maria Gonzalez",
		comment:
			"The food was delicious and the service was excellent. I will definitely come back!",
	},
	{
		id: 2,
		rating: 4,
		profile: "https://randomuser.me/api/portraits/men/32.jpg",
		name: "Carlos Lopez",
		comment:
			"Great atmosphere and tasty dishes, but the wait time was a bit long.",
	},
	{
		id: 3,
		rating: 5,
		profile: "https://randomuser.me/api/portraits/men/45.jpg",
		name: "Juan Perez",
		comment:
			"Excellent experience. I loved the authentic taste of Mediterranean cuisine.",
	},
	{
		id: 4,
		rating: 3,
		profile: "https://randomuser.me/api/portraits/women/50.jpg",
		name: "Ana Ramirez",
		comment: "The food was okay, but I expected more for the price.",
	},
];

const SPECIALS = [
	{
		id: 1,
		name: "Greek Salad",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: "$12.99",
		image: GreekSalad,
	},
	{
		id: 2,
		name: "Bruchetta",
		description:
			"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: "$5.99",
		image: Bruchetta,
	},
	{
		id: 3,
		name: "Lemon Dessert",
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: "$5.00",
		image: LemonDessert,
	},
];

// Estilos organizados por componente y con nombres más semánticos
const styles = {
	hero: {
		container:
			"hero xs:bg-primary-green bg-center bg-no-repeat bg-cover text-highlight-white h-dvh xs:h-auto font-karla",
		wrapper:
			"relative flex flex-col xs:grid xs:grid-cols-[2fr_1fr] gap-5 md:gap-0 max-w-4xl h-full mx-auto pt-24 pb-4 px-4",
		heading: "h1 text-primary-yellow",
		subheading: "font-markazi text-4xl col-span-2 mb-3",
		description: "text-xl text-pretty max-w-lg row-start-2 row-end-3",
		image:
			"hidden xs:block aspect-square w-full row-start-1 row-end-3 rounded-xl",
		button:
			"absolute bottom-24 left-1/2 -translate-x-1/2 xs:static xs:translate-x-0 hover:-translate-y-2 transition-transform",
	},
	categories: {
		container: "max-w-4xl mx-auto",
		wrapper: "p-4",
		heading: "font-karla font-extrabold mb-2",
		buttonList: "flex flex-shrink-0 gap-2 overflow-x-auto no-scrollbar pb-1",
	},
	testimonials: {
		section: "bg-primary-green",
		container: "flex flex-col gap-8 max-w-4xl mx-auto p-4 md:py-28",
		heading: "text-highlight-white text-center text-3xl font-bold font-markazi",
		grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
	},
	opinion: {
		card: "bg-highlight-white p-3 grid grid-cols-2 gap-3 font-karla h-full",
		rating: "col-span-2",
		profile: "col-span-2 w-20 rounded-xl",
		name: "font-medium",
		comment: "col-span-2 text-xs",
	},
	history: {
		section: "max-w-4xl mx-auto p-4 grid gap-3 grid-cols-1 md:grid-cols-2",
		heading:
			"text-primary-yellow text-5xl md:text-6xl leading-9 font-medium font-markazi",
		subheading: "font-markazi text-4xl mb-3",
		text: "font-karla",
		imagesContainer:
			"flex flex-col gap-3 md:row-span-6 md:row-start-1 md:col-start-2 relative",
		image1: "rounded-2xl md:absolute md:left-4 md:top-4 md:w-4/5",
		image2: "rounded-2xl md:absolute md:right-4 md:bottom-4 md:w-4/5",
	},
	specials: {
		section: "p-4 max-w-4xl mx-auto",
		heading: "font-bold text-4xl font-markazi mb-4",
		grid: "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4",
	},
	dish: {
		card: "flex flex-col gap-3 bg-highlight-white p-3 h-full",
		heading: "font-medium col-span-2",
		image: "object-cover h-36 rounded-xl justify-self-end w-full",
		description: "text-primary-green text-sm flex-grow",
		price: "font-bold text-secondary-coral",
	},
};

// Componentes optimizados con memoización
const Hero = memo(() => {
	return (
		<header className={styles.hero.container}>
			<div className={styles.hero.wrapper}>
				<div>
					<h1 className={styles.hero.heading}>Little Lemon</h1>
					<h2 className={styles.hero.subheading}>Chicago</h2>
				</div>
				<p className={styles.hero.description}>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<img
					className={styles.hero.image}
					src={HeroImage}
					alt="Delicious Mediterranean dish"
					loading="eager"
					fetchPriority="high"
				/>
				<Button
					variant="yellow"
					size="lg"
					to="/reservations"
					className={styles.hero.button}
				>
					Reserve a Table
				</Button>
			</div>
		</header>
	);
});

const DishesQuickView = memo(() => {
	return (
		<section className={styles.categories.container}>
			<div className={styles.categories.wrapper}>
				<h2 className={styles.categories.heading}>ORDER FOR DELIVERY!</h2>
				<div className={styles.categories.buttonList}>
					{FOOD_CATEGORIES.map((category) => (
						<Button
							key={category.id}
							variant="white"
							aria-label={`Order ${category.label}`}
						>
							{category.label}
						</Button>
					))}
				</div>
			</div>
		</section>
	);
});

const OpinionCard = memo(({ rating, profile, name, comment }) => {
	// Generar estrellas basadas en la calificación
	const stars = useMemo(() => "⭐".repeat(rating), [rating]);

	return (
		<article className={styles.opinion.card}>
			<div
				className={styles.opinion.rating}
				aria-label={`${rating} stars rating`}
			>
				{stars}
			</div>
			<img
				src={profile}
				className={styles.opinion.profile}
				alt={`Profile picture of ${name}`}
				loading="lazy"
			/>
			<h3 className={styles.opinion.name}>{name}</h3>
			<p className={styles.opinion.comment}>{comment}</p>
		</article>
	);
});

const Testimonials = memo(() => {
	return (
		<section className={styles.testimonials.section}>
			<div className={styles.testimonials.container}>
				<h2 className={styles.testimonials.heading}>Testimonials</h2>
				<div className={styles.testimonials.grid}>
					{TESTIMONIALS.map((opinion) => (
						<OpinionCard
							key={opinion.id}
							rating={opinion.rating}
							profile={opinion.profile}
							name={opinion.name}
							comment={opinion.comment}
						/>
					))}
				</div>
			</div>
		</section>
	);
});

const OurHistory = memo(() => {
	return (
		<section className={styles.history.section}>
			<h1 className={styles.history.heading}>Little Lemon</h1>
			<h2 className={styles.history.subheading}>Chicago</h2>
			<p className={styles.history.text}>
				Founded in 2015 by brothers Mario and Adrian,{" "}
				<strong>Little Lemon</strong> was born out of a family dream: to bring
				their grandmother&apos;s traditional recipes from a small village in
				Greece to the big city. When they arrived in Chicago, they noticed that
				while there were many international restaurants, few captured the true
				essence of homemade Mediterranean cuisine.
			</p>
			<div className={styles.history.imagesContainer}>
				<img
					className={styles.history.image1}
					src={LLPhoto}
					alt="Interior of Little Lemon restaurant"
					loading="lazy"
				/>
				<img
					className={styles.history.image2}
					src={LLPhoto2}
					alt="Chef preparing food at Little Lemon"
					loading="lazy"
				/>
			</div>
		</section>
	);
});

const DishCard = memo(({ name, description, price, image }) => {
	return (
		<article className={styles.dish.card}>
			<h3 className={styles.dish.heading}>{name}</h3>
			<img
				src={image}
				className={styles.dish.image}
				alt={`${name} dish`}
				loading="lazy"
			/>
			<p className={styles.dish.description}>{description}</p>
			<span className={styles.dish.price}>{price}</span>
		</article>
	);
});

const Specials = memo(() => {
	return (
		<section className={styles.specials.section}>
			<h2 className={styles.specials.heading}>This Weeks Specials!</h2>
			<div className={styles.specials.grid}>
				{SPECIALS.map((dish) => (
					<DishCard
						key={dish.id}
						name={dish.name}
						description={dish.description}
						price={dish.price}
						image={dish.image}
					/>
				))}
			</div>
		</section>
	);
});

// Componente principal
const HomePage = () => {
	return (
		<main>
			<Hero />
			<DishesQuickView />
			<Specials />
			<Testimonials />
			<OurHistory />
		</main>
	);
};

// Nombres de visualización para depuración
Hero.displayName = "Hero";
DishesQuickView.displayName = "DishesQuickView";
OpinionCard.displayName = "OpinionCard";
Testimonials.displayName = "Testimonials";
OurHistory.displayName = "OurHistory";
DishCard.displayName = "DishCard";
Specials.displayName = "Specials";

export default HomePage;
