import Image from "next/image";

export default function Info(props) {
	return (
		<div
			className={
				props.id % 2 !== 0 ? "hackathon-grp" : "hackathon-grp odd"
			}
			id={props.id}>
			{props.id % 2 !== 0 ? (
				<div>
					<Image src={props.src} alt={props.alt} />
				</div>
			) : null}
			<div>
				<h4 className="heading">
					{props.normalHeading}
					<br />
					<span style={{ color: "#d434ff" }}>
						{props.colouredHeading}
					</span>
				</h4>
				<p
					className="content"
					dangerouslySetInnerHTML={{ __html: props.content }}></p>
			</div>
			{props.id % 2 === 0 ? (
				<div>
					<Image src={props.src} alt={props.alt} />
				</div>
			) : null}
		</div>
	);
}
