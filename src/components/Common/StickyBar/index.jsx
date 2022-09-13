import { useEffect } from "react";
import Link from "next/link";

const StickyBar = () => {
	useEffect(() => {
		const sticky_bar = document.querySelector(".sticky-bar");
		if (window.pageYOffset > 600) {
			sticky_bar.classList.add("active");
		} else {
			sticky_bar.classList.remove("active");
		}

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 600) {
				sticky_bar.classList.add("active");
			} else {
				sticky_bar.classList.remove("active");
			}
		});
	}, []);

	return (
		<div className='sticky-bar'>
			<div className='left-bar'>
				<Link href='/contact-creative'>
					<a className='contact-butn'>
						<span>Contáctanos</span>
						<span className='icon ml-10'>
							<i className='far fa-comment'></i>
						</span>
					</a>
				</Link>
			</div>
			<div className='right-bar'>
				<div className='social-text fz-13' style={{ fontWeight: 150, color: "gray" }}>
					<span className='text'>Siguenos</span>
					<a href='#0'>Instagram.</a>
					<i>/</i>
					<a href='#0'>Linkedin</a>
				</div>
			</div>
		</div>
	);
};

export default StickyBar;
