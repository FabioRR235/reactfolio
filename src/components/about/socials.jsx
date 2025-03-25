import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="homepage-socials">
			<a href={INFO.socials.github} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faGithub}
					className="homepage-social-icon"
				/>
			</a>
			<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faInstagram}
					className="homepage-social-icon"
				/>
			</a>
			<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
				<FontAwesomeIcon
					icon={faLinkedin}
					className="homepage-social-icon"
				/>
			</a>
		</div>
	);
};

export default Socials;
