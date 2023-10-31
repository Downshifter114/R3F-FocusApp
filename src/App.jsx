import React from "react";
import Experience from "./Components_Experience/Experience";
import Layout from "./Components_Functionality/Layout";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const App = () => {
	return (
		<Canvas style={{ height: "100vh", width: "100vw" }}>
			<Experience />
			<Html fullscreen>
				<Layout />
			</Html>
		</Canvas>
	);
};

export default App;
