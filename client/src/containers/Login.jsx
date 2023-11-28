import { useState } from "react";
import { LoginInput } from "../Components";
import { logoBg, Logo } from "../assets";
import { FaEnvelope, FaLock } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../Animations";

const Login = () => {
	const [userEmail, setuserEmail] = useState("");
	const [isSignUp, setisSignUp] = useState(false);
	const [userPassword, setuserPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	return (
		<div className="w-screen h-screen overflow-hidden relative flex">
			{/* background image */}
			<img
				className="w-full h-full object-cover top-0 left-0 absolute font-thin"
				src={logoBg}
				alt="our iconic packaging"
			/>
			{/* content box */}
			<div
				className="flex flex-col h-full items-center w-[80%] md:w-[508px] lg:w-[408px] z-10
			backdrop-blur-md p-4 px-4 py-12 gap-6
			bg-cardOverlay"
			>
				{/* logo */}
				<div className="flex items-center justify-start gap-3 w-full">
					<img src={Logo} alt="logo" className="w-8" />
					<p className="text-textColor font-semibold text-2xl">
						EatOut
					</p>
				</div>
				{/* welcome text */}
				<p className="text-3xl font-semibold text-headingColor ">
					Welcome Back
				</p>

				<p className="text-textColor text-xl -mt-6">
					{isSignUp ? "Signup" : "Sign in "} with the following
				</p>
				{/* input section*/}
				<div className="flex flex-col justify-center items-center gap-6 px-4 md:px-12 py-4 w-full">
					<LoginInput
						type="email"
						placeholder={"Email Here"}
						inputState={userEmail}
						inputStateFunction={setuserEmail}
						isSignUp={isSignUp}
						icon={<FaEnvelope className="text-xl text-textColor" />}
						label="Email"
					/>
					<LoginInput
						type="password"
						placeholder="password"
						inputState={userPassword}
						inputStateFunction={setuserPassword}
						isSignUp={isSignUp}
						icon={<FaLock className="text-xl text-textColor" />}
					/>
					{isSignUp && (
						<LoginInput
							type="password"
							placeholder=" confirm password"
							inputState={confirmPassword}
							inputStateFunction={setconfirmPassword}
							isSignUp={isSignUp}
							icon={<FaLock className="text-xl text-textColor" />}
						/>
					)}
					{!isSignUp ? (
						<p>
							{" "}
							Don`t have an account?
							<motion.button
								{...buttonClick}
								className="text-red-400 cursor-pointer bg-transparent underline"
								onClick={() => setisSignUp(true)}
							>
								Create one
							</motion.button>
						</p>
					) : (
						<p>
							Already have an account?
							<motion.button
								{...buttonClick}
								className="text-red-400 cursor-pointer bg-transparent underline"
								onClick={() => setisSignUp(false)}
							>
								Login
							</motion.button>
						</p>
					)}
					{/* button section */}
					{/* Replace static transitions with motion animations to improve the user */}
					<motion.button
						{...buttonClick}
						className="w-full bg-red-400 text-white px-4 py-2 cursor-pointer rounded-md"
					>
						{isSignUp ? "SignUp" : "Sign in"}
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Login;
