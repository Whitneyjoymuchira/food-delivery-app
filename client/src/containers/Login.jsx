import { useState } from "react";
import { LoginInput } from "../Components";
import { logoBg, Logo } from "../assets";

const Login = () => {
	const [userEmail, setuserEmail] = useState("")
	const [isSignUp, setisSignUp] = useState("false");
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
					SignIn with the following
				</p>
				{/* input section*/}
				<div className="flex flex-col justify-center items-center gap-6 px-4 md:px-12 py-4 w-full">
					<LoginInput
						type="email"
						placeholder={"Email Here"}
						userEmail={userEmail}
						inputStateFunction={setuserEmail}
						isSignUp={isSignUp}
						icon=""
						label="Email"
					/>
					<LoginInput
						type="email"
						placeholder="Email"
						userEmail={userEmail}
						inputStateFunction={setuserEmail}
						isSignUp={isSignUp}
						icon=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
