/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
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

const HomeLanding2 = () => {
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

	return (
		<>
			<Head>
				<title>3MPATHY</title>
				<link rel='shortcut icon' href='/img/favicon.ico' />
				<link href='http://fonts.cdnfonts.com/css/gotham-rounded' rel='stylesheet' />
			</Head>

			<MainLightLayout defaultTheme={"dark"} defaultLogoTheme='dark'>
				<StickyBar />
				<FixedSearch />
				<Header />
				<Testimonials />

				<Process />
				<About />

				<Footer footerClass='position-re pb-40  ' />
			</MainLightLayout>
		</>
	);
};

export default HomeLanding2;
