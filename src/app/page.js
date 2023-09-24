import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Info from "./components/Info";
import data from "./data";

import Title from "./hackathon-assets/Title.svg";
import Caption from "./hackathon-assets/caption.svg";
import TitleMobile from "./hackathon-assets/Title-mobile.svg";
import VrImage from "./hackathon-assets/man-wearing-vr-googles.svg";
import Star from "./hackathon-assets/icons/star.svg";

import "./main.css";

export default function Home() {
	return (
		<>
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
						<div>
							<Image className="web" src={Title} alt="Title" />
							<Image
								className="mobile"
								src={TitleMobile}
								alt="Title"
							/>
							<p>
								Participate in getlinked tech Hackathon 2023
								stand a chance to win a Big prize
							</p>
							<Link href="/contact-page">
								<button className="btn-gradient">
									Register
								</button>
							</Link>
							<div className="counter">
								00<span>H</span> 00<span>M</span> 00
								<span>S</span>
							</div>
						</div>
					</section>

					<section>
						<Image src={VrImage} alt="VrImage" />
					</section>
				</div>
			</div>

			{data.map((items) => (
				<Info 
				        key={items.id}
                                        id={items.id}
					src={items.image.src}
					alt={items.image.alt}
					normalHeading={items.heading.normal}
					colouredHeading={items.heading.coloured}
					content={items.content}
				/>
			))}
		</>
	);
}
