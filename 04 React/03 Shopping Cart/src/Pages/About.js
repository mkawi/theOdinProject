import Hero from "../Components/Hero";
import CompanyLove from "../Components/CompanyLove";

function About() {
	return (
		<main>
			<Hero title="About" style={{ height: "20vh" }} />
			<div className="about-para">
				<h3>Example Title</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci
					ligula, rhoncus at dapibus convallis, mollis sit amet dolor. Donec
					ullamcorper imperdiet arcu non sagittis. Curabitur malesuada luctus
					ullamcorper. Pellentesque ultrices libero eu egestas iaculis. Donec
					sapien nibh, placerat ac feugiat eu, aliquam non libero. Vivamus vitae
					enim a velit mollis dictum.{" "}
				</p>

				<p>
					Maecenas facilisis felis vel enim efficitur, id vehicula dui laoreet.
					In vitae tortor mauris. Suspendisse felis ipsum, vehicula sit amet
					massa et, pulvinar lobortis eros. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
					felis arcu, mollis in aliquam in, aliquet id tellus.
				</p>
				<h4>Subtitle</h4>
				<p>
					Cras pellentesque elit felis, eget congue metus porttitor sed.
					Curabitur porta feugiat imperdiet. Nullam urna est, posuere non enim
					ac, rutrum auctor elit. Sed hendrerit felis volutpat quam feugiat, in
					blandit eros maximus. Maecenas sit amet placerat mauris. In id purus
					maximus, eleifend magna ut, vehicula eros. Morbi finibus lacus et
					mollis mattis. Duis nec velit placerat, maximus felis et, interdum
					velit. Etiam malesuada dui sed felis convallis sagittis. Mauris
					venenatis arcu ac massa placerat, ac lobortis dui accumsan. Vivamus
					vel tempor sem. Duis tristique quam tortor, a volutpat dolor luctus
					vel. Donec feugiat tortor vel nisl tempor rhoncus.
				</p>
				<p>
					In lobortis, lorem eu faucibus posuere, lorem ante feugiat ante, at
					dignissim lacus sapien eget libero. Vestibulum eu libero a mi commodo
					lobortis. Cras semper, leo vel posuere lobortis, orci felis tincidunt
					felis, non finibus tellus dolor vel enim. Aenean et bibendum lectus.
					Integer ut condimentum neque, sit amet ultricies enim. Aliquam
					consectetur vitae magna et pellentesque. Nullam sodales sed eros quis
					posuere. Nulla pharetra aliquet aliquet. Phasellus nec lectus at
					tellus ornare vestibulum.
				</p>
			</div>
			<CompanyLove />
		</main>
	);
}

export default About;
