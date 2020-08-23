import React from "react";
import "./Connect.scss";
let Connect = (props) => (
	<div className="connect">
		<div className="connect-area">
			<h3 className="connect-h3">CONTACT</h3>
			<h4 className="connect-h4">
				Feel to contact me through the email below, I'd love to chat.
			</h4>
			<a href="mailto:heet1885@gmail.com" class="email">
				heet1885@gmail.com
			</a>
		</div>

		<ul className="connect-footer">
			<li>
				<a
					href="https://twitter.com/heet907"
					target="_blank"
					rel="noopener noreferrer"
					className="twitter"
				>
					Twitter
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/heet1996"
					target="_blank"
					rel="noopener noreferrer"
					className="linkedin"
				>
					LinkedIn
				</a>
			</li>
			<li>
				<a
					href="https://www.facebook.com/heetshah1996"
					target="_blank"
					rel="noopener noreferrer"
					className="facebook"
				>
					FaceBook
				</a>
			</li>
			<li>
				<a
					href="https://github.com/Heet1996"
					target="_blank"
					rel="noopener noreferrer"
					className="github"
				>
					GitHub
				</a>
			</li>
		</ul>
	</div>
);

export default Connect;
