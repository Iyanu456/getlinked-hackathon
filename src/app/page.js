import Navigation from "./components/Navigation";
import "./registration-form.css";
export default function Home() {
	return (
		<div className="main">
			<Navigation />
			<div className="reg-form-grp">
				<section>
					<div>
						<h2 className="mb-2 logo"><b><span style={{color: "#d434ff", dropShadow: "0 4px 6px rgba(0, 0, 0, 0.4)", fontSize: "1.2em"}}>Get in touch</span></b></h2>
						<p>
							Contact <br />
							Information
							<br /><br />
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
					</div>
				</section>
				<section>
					<div className="reg-form">
						<form>
							<h4><b><span style={{color: "#d434ff"}}>Questions or need assistance?<br/>Let us know about it!</span></b></h4>
					
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
									placeholder="Mail"
									style={{
										backgroundColor: "transparent",
										color: "white",
									}}></textarea>
							</div>
							<div className="reg-submit"><button type="submit" className="btn-gradient">Submit</button></div>
							
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}
