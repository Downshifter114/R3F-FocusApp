import React from "react";
import "./Styles.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Index = () => {
	return (
		<div className="MainLayout">
			<div className="focusButton">
				<h3>FOCUS</h3>
				<button>
					<BsFillPlayFill className="react-icon" />
				</button>
			</div>

			<div className="timeInfo">
				<h4>... Hours .. Minutes</h4>
				<h3>TODAY</h3>
			</div>

			<div className="focusButton settings">
				<h3>SETTINGS</h3>
				<button>
					<FiSettings className="react-icon" />
				</button>
			</div>
		</div>
	);
};

export default Index;
