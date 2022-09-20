/* eslint-disable @next/next/no-css-tags */
import { useEffect, useState } from "react";
import Head from "next/head";
//= Layout
import MainLightLayout from "../../layouts/main-light";
//= Components
import StickyBar from "../../components/Common/StickyBar";
import FixedSearch from "../../components/Common/FixedSearch";
import Header from "../../components/Main/Header3";
import Process from "../../components/Main/Process2";
import Testimonials from "../../components/Creative/Testimonials";
import About from "../../components/Main/About2";
import Footer from "../../components/Footers/DigitalFooter";
import { WelcomeAnimation } from "../../components/Common/WelcomeAnimation";
import ProgressScroll from "../../components/Progress-Scroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const HomeLanding = () => {
	const [isLoading, setIsLoading] = useState(true);

	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	const changeState = async () => {
		await delay(700);
		setIsLoading(false);
	};
	useEffect(() => {
		document.body.classList.add("land-demo2");

		const removeClasses = [
			"index-bus1",
			"index-corporate",
			"index-restaurant",
			"index-arch",
			"index-freelancer",
			"cr-agency",
			"index-main",
			"mobile-app",
			"gr-orange-bg",
			"nft-market",
		];

		document.body.classList.remove(...removeClasses);
	}, []);

	const siteDisplay = () => {
		let siteDisplay = {};
		if (isLoading) {
			siteDisplay = { display: "none" };
		} else {
			siteDisplay = { display: "" };
		}
		return siteDisplay;
	};

	return (
		<>
			<WelcomeAnimation isLoading={isLoading} changeState={changeState} />
			<div style={siteDisplay()} className={`animate__animated ${isLoading ? "" : "animate__fadeIn"}`}>
				<MainLightLayout defaultTheme={"dark"} defaultLogoTheme='dark'>
					<StickyBar />
					<FixedSearch />
					<Header />
					<Testimonials isLoading={isLoading} />
					<Process />
					<About />
					<Footer footerClass='position-re pb-40' />
					<ProgressScroll />
				</MainLightLayout>
			</div>
		</>
	);
};

export default HomeLanding;
