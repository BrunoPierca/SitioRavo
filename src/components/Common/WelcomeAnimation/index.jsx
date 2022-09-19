import Image from "next/image";
import "animate.css";
export const WelcomeAnimation = ({ changeState }) => {
	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	const dissapear = async ({ target }) => {
		target.parentElement.classList.add("animate__fadeOut");
		await delay(1000);
		target.parentElement.remove();
		changeState();
	};

	return (
		<>
			<div
				className={`animate__animated`}
				style={{
					width: "100%",
					height: "100vh",
					backgroundColor: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: 0,
					padding: 0,
				}}
				onAnimationEnd={(e) => dissapear(e)}
			>
				<div
					className='animate__animated animate__fadeIn animate__slow animate__delay-1s'
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
				>
					<Image priority='true' src='/img/logo.png' width='120px' height='105px' alt='Logo'></Image>
					<Image priority='true' src='/img/3mpathy.png' height='90px' width='393px' alt='Logo name'></Image>
				</div>
			</div>
		</>
	);
};
