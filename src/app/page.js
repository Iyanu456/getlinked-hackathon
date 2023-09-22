import Navigation from "./components/Navigation";
import Image from "next/image";
import "./main.css";
import Title from './hackathon-assets/Title.svg'
import TitleMobile from './hackathon-assets/Title-mobile.svg'
import VrImage from './hackathon-assets/man-wearing-vr-googles.png' 
export default function Home() {
	return (
		<div className="main-container">
			<Navigation />
			<div className="caption">
				<h4><b><i>Igniting  a Revolution in HR Innovation</i></b></h4>
			</div>
			<div className="hero-section">

				<section>
					<Image className="web" src={Title} alt="Title"/>
					<Image className="mobile" src={TitleMobile} alt="Title"/>
					<p>Participate in getlinked tech Hackathon 2023 stand <br />a chance to win a Big prize </p>
					<button className="btn-gradient">Register</button>
				</section>

				<section>
					<Image src={VrImage} alt="VrImage"/>
				</section>
			</div>
		</div>
	);
}
