/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { animatedDiv } from "../Animations";
const LoginInput = ({
	placeholder,
	icon,
	type,
	inputState,
	inputStateFunction,
	isSignUp,
}) => {
	const [isfocus, setIsFocus] = useState(false);
	return (
		<motion.div
			{...animatedDiv}
			className={`flex justify-center items-center gap-4 backdrop-blur-md rounded-md w-full px-4 py-2 bg-cardOverlay ${
				isfocus ? "shadow-md shadow-red-400" : "shadow-none"
			}`}
		>
			{icon}
			<input
				type={type}
				placeholder={placeholder}
				className="w-full h-full bg-transparent text-headingColor outline-none  text-lg font-semibold border-none"
				value={inputState}
				onChange={(e) => inputStateFunction(e.target.value)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
			/>
		</motion.div>
	);
};

export default LoginInput;
