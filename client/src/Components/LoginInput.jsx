/* eslint-disable react/prop-types */

const LoginInput = ({
	placeholder,
	icon,
	type,
	inputState,
	userEmailFunction,
	isSignUp,

}) => {
	return (
		<div
			className={`flex justify-center items-center gap-4 backdrop-blur-md rounded-md w-full px-4 py-2 bg-cardOverlay`}
		></div>
	);
};

export default LoginInput;
