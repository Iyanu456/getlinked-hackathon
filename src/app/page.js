import Navigation from "./components/Navigation";
import Image from "next/image";
import Link from "next/link";
import "./main.css";
import Title from "./hackathon-assets/Title.svg";
import Caption from "./hackathon-assets/caption.svg";
import TitleMobile from "./hackathon-assets/Title-mobile.svg";
import VrImage from "./hackathon-assets/man-wearing-vr-googles.svg";
import Star from "./hackathon-assets/icons/star.svg";
import Idea from "./hackathon-assets/The-big-idea.svg";
export default function Home() {
	return (
		<div className="main-container">
			<Navigation />
			<div
				className="caption"
				style={{
					paddingTop: "1.5em",
					borderTop: "1px solid rgba(124, 124, 124, 0.346)",
				}}>
				<Image src={Caption} alt="caption" />
			</div>
			<Image src={Star} id="star-1" alt="starr" />
			<div className="hero-section">
				<section>
					<Image className="web" src={Title} alt="Title" />
					<Image className="mobile" src={TitleMobile} alt="Title" />
					<p>
						Participate in getlinked tech Hackathon 2023 stand a
						chance to win a Big prize
					</p>
					<Link href="/contact-page">
						<button className="btn-gradient">Register</button>
					</Link>
					<div className="counter">
						00<span>H</span> 00<span>M</span> 00<span>S</span>
					</div>
				</section>

				<section>
					<Image src={VrImage} alt="VrImage" />
				</section>
			</div>
			<div className="hackathon-grp">
				<div>
					<Image src={Idea} alt="Idea" />
				</div>
				<div>
					<h4 className="heading">
						Introduction to getlinked{" "}
						<span style={{ color: "#d434ff" }}>
							tech Hackathon 1.0
						</span>
					</h4>
					<p className="content">
						{
							"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
						}
					</p>
				</div>
			</div>
		</div>
	);
}
