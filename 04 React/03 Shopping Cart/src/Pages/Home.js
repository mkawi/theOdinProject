import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import CompanyLove from "../Components/CompanyLove";

function Home(props) {
	return (
		<main>
			<Hero title="Nourish Your Skin" />
			<FeaturedProducts addCart={props.addCart} toggle={props.toggle} />
			<CompanyLove />
		</main>
	);
}

export default Home;
