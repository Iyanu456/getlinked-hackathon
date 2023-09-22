import Navigation from "../components/Navigation";
import Image from "next/image";
import Facebook from "../hackathon-assets/icons/Facebook.svg";
import Twitter from "../hackathon-assets/icons/Twitter.svg";
import Instagram from "../hackathon-assets/icons/Instagram.svg";
import Linkedin from "../hackathon-assets/icons/Linkedin.svg";
import "../registration-form.css";

export default function ContactPage() {
	return (
		<div className="contact-container">
			<Navigation />
			<div className="reg-form-grp">
				<section>
					<div>
						<h2 className="mb-2 logo">
							<b>
								<span
									style={{
										color: "#d434ff",
										dropShadow:
											"0 4px 6px rgba(0, 0, 0, 0.4)",
										fontSize: "1.2em",
									}}>
									Get in touch
								</span>
							</b>
						</h2>
						<p>
							Contact <br />
							Information
							<br />
							<br />
							27, Alara Street <br />
							Yaba 100012 <br /> Lagos State
							<br />
							<br />
							Call Us: 07067981819
							<br />
							<br />
							we are open from Monday-Friday
							<br />
							08:00am - 05:00pm
						</p>
						<div className="socials web">
							<small>
								<b>
									<span style={{ color: "#d434ff" }}>
										Share on
									</span>
								</b>
							</small>
							<div>
								<Image src={Instagram} alt="socail media" />
								<Image src={Twitter} alt="socail media" />
								<Image src={Facebook} alt="socail media" />
								<Image src={Linkedin} alt="socail media" />
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="reg-form">
						<form>
							<p>
								<b>
									<span
										style={{
											color: "#d434ff",
											fontSize: "1.2em",
											fontFamily: "Clash Display",
											fontWeight: "800",
											wordSpacing: "5px",
										}}>
										Questions or need assistance?
										<br />
										Let us know about it!
									</span>
								</b>
							</p>
							<p className="mobile">
								Email us below to any question related <br /> to
								our event
							</p>
							<div>
								<input
									type="text"
									placeholder="First Name"
									style={{
										backgroundColor: "transparent",
										color: "white",
									}}></input>
							</div>
							<div>
								<input
									type="text"
									placeholder="Mail"
									style={{
										backgroundColor: "transparent",
										color: "white",
									}}></input>
							</div>
							<div>
								<textarea
									rows="4"
									cols="35"
									placeholder="Message"
									style={{
										backgroundColor: "transparent",
										color: "white",
									}}></textarea>
							</div>
							<div className="reg-submit">
								<button type="submit" className="btn-gradient">
									Submit
								</button>
								<div className="socials mobile">
									<small>
										<b>
											<span style={{ color: "#d434ff" }}>
												Share on
											</span>
										</b>
									</small>
									<div>
										<Image
											src={Instagram}
											alt="socail media"
										/>
										<Image
											src={Twitter}
											alt="socail media"
										/>
										<Image
											src={Facebook}
											alt="socail media"
										/>
										<Image
											src={Linkedin}
											alt="socail media"
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}
