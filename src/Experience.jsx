import React from "react";
import { OrbitControls } from "@react-three/drei";

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
