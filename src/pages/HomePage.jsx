import { memo } from "react";
import Button from "../components/Button";
import HeroImage from "../assets/images/hero.jpg";
import LLPhoto from "../assets/images/restaurant.jpg";
import LLPhoto2 from "../assets/images/restaurant-chef-B.jpg";
import "../styles/home.css";

const FOOD_CATEGORIES = [
	{ id: "lunch", label: "Lunch" },
	{ id: "mains", label: "Mains" },
	{ id: "desserts", label: "Desserts" },
	{ id: "alacarte", label: "A la Carte" },
	{ id: "specials", label: "Specials" },
	{ id: "drinks", label: "Drinks" },
];

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
			"hidden xs:block aspect-square w-full row-start-1 row-end-3 rounded-2xl",
		button:
			"absolute bottom-24 left-1/2 -translate-x-1/2 xs:static xs:translate-x-0 hover:-translate-y-2 transition-transform",
	},
	dishes: {
		container: "max-w-4xl mx-auto",
		wrapper: "p-4",
		heading: "font-karla font-extrabold mb-2",
		buttonList: "flex flex-shrink-0 gap-2 overflow-x-auto no-scrollbar pb-1",
	},
};

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
		<section className={styles.dishes.container}>
			<div className={styles.dishes.wrapper}>
				<h2 className={styles.dishes.heading}>ORDER FOR DELIVERY!</h2>
				<div className={styles.dishes.buttonList}>
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

const HomePage = () => {
	return (
		<>
			<Hero />
			<DishesQuickView />
			<Testimonials />
			<OurHistory />
		</>
	);
};

Hero.displayName = "Hero";
DishesQuickView.displayName = "DishesQuickView";

const Testimonials = () => {
	const opinions = [
		{
			rating: 5,
			profile: "https://randomuser.me/api/portraits/women/44.jpg",
			name: "Maria Gonzalez",
			comment:
				"The food was delicious and the service was excellent. I will definitely come back!",
		},
		{
			rating: 4,
			profile: "https://randomuser.me/api/portraits/men/32.jpg",
			name: "Carlos Lopez",
			comment:
				"Great atmosphere and tasty dishes, but the wait time was a bit long.",
		},
		{
			rating: 5,
			profile: "https://randomuser.me/api/portraits/men/45.jpg",
			name: "Juan Perez",
			comment:
				"Excellent experience. I loved the authentic taste of Mediterranean cuisine.",
		},
		{
			rating: 3,
			profile: "https://randomuser.me/api/portraits/women/50.jpg",
			name: "Ana Ramirez",
			comment: "The food was okay, but I expected more for the price.",
		},
	];

	return (
		<section className="bg-primary-green">
			<div className="flex flex-col gap-8 max-w-4xl mx-auto p-5 md:py-28">
				<h2 className="text-highlight-white text-center text-3xl font-bold font-markazi">
					Testimonials
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
					{opinions.map((opinion, index) => (
						<OpinionCard
							key={index}
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
};

const OpinionCard = (props) => {
	return (
		<article className="bg-highlight-white p-3 grid grid-cols-2 gap-3 font-karla">
			<div className="col-span-2" arial-label={`${props.rating} stars rating`}>
				⭐ {props.rating}
			</div>
			<img
				src={props.profile}
				className="col-span-2 w-full xs:col-span-1 xs:w-20 rounded-xl"
				alt={`Profile picture of ${props.name}`}
			/>
			<h3 className="font-medium">{props.name}</h3>
			<p className="col-span-2 text-xs">{props.comment}</p>
		</article>
	);
};

const OurHistory = () => {
	return (
		<section className="max-w-4xl mx-auto p-4 grid gap-3 grid-cols-1 md:grid-cols-2">
            <h1 className="text-primary-yellow text-5xl md:text-6xl leading-9 font-medium font-markazi">Little Lemon</h1>
            <h2 className="font-markazi text-4xl mb-3">Chicago</h2>
            <p className="font-karla">Founded in 2015 by brothers Mario and Adrian, <strong>Little Lemon</strong> was born out of a family dream: to bring their grandmother&apos;s traditional recipes from a small village in Greece to the big city. When they arrived in Chicago, they noticed that while there were many international restaurants, few captured the true essence of homemade Mediterranean cuisine.</p>
            <div className="flex flex-col gap-3 md:row-span-6 md:row-start-1 md:col-start-2 relative">
                <img className="rounded-2xl md:absolute md:left-4 md:top-4 md:w-4/5" src={LLPhoto} alt="Photo of the restaurant" />
                <img className="rounded-2xl md:absolute md:right-4 md:bottom-4 md:w-4/5" src={LLPhoto2} alt="Photo of the restaurant" />
            </div>
        </section>
	)
}

export default HomePage;
