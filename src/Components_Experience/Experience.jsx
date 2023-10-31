import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Experience = () => {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshBasicMaterial color={"red"} />
			</mesh>
		</>
	);
};

export default Experience;
