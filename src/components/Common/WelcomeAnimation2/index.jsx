import Image from "next/image";
import "animate.css";
export const WelcomeAnimation = ({ changeState }) => {
	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	const dissapear = async ({ target }) => {
		await delay(300);
		const containerDiv = target.parentElement.parentElement.parentElement;

		if (containerDiv.classList.contains("animationContainer")) {
			containerDiv.classList.add("animate__fadeOut");
			await delay(1100);
			containerDiv.remove();
		}

		changeState();
	};

	return (
		<>
			<div
				className={`animationContainer animate__animated`}
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
				<div id='wrapperDiv' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<Image
						className='animate__animated animate__slideInLeft'
						priority='true'
						src='/img/logo.png'
						width='120px'
						height='105px'
						alt='Logo'
					></Image>
					<Image
						className='animate__animated animate__slideInRight'
						priority='true'
						src='/img/3mpathy.png'
						height='90px'
						width='393px'
						alt='Logo name'
					></Image>
				</div>
			</div>
		</>
	);
};
