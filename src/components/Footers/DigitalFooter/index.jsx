/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import footerData from "../../../data/footers/digital-footer.json";

const Footer = ({ footerClass, type }) => {
	return (
		<footer id='footer' className={footerClass}>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<div className='clumn'>
							<div className='logo mb-30'>
								<a href='landing-preview.html'>
									<img src='img/3MPATHY_LOGO.png' style={{width: '130%'}} alt='' />
								</a>
							</div>
							<div className='text'>
								<p className="fw-300">
									Somos una consultora que ofrece a las empresas la posibilidad de tener un propósito firme y contundente en materia de Diversidad & inclusión.
								</p>
							</div>
							<div className='social circle-bord mt-30'>
								<ul className='rest horizontal-link'>
									<li>
										<a href="#">
											<i className='fab fa-instagram'></i>
										</a>
										<a href="#" className='ms-2'>
											<i className='fab fa-linkedin'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-lg-4 offset-lg-1'>
						<div className='clumn'>
							<h6 className='title fw-700 mb-30'>Contáctanos</h6>
							<ul className='address rest'>
								<li className='adrs mb-15 fw-300'>Aquí va la dirección de oficina.</li>
								<li className='eml underline fw-300 mb-15'>
									<a href='mailto:fuchsger@gmail.com' target='blank'>fuchsger@gmail.com</a>
								</li>
								<li className='tel'>
									<h6
										className={`${type == "purple-red" ? "gr-purple-red-text" : ""} ${
											type == "purple-light" ? "gr-blue2-text" : ""
										}`}
									>
										{/* {footerData.phone} */}
										<a className="fw-400" href="tel:+5534667092">+55-3466-7092</a>
									</h6>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 offset-lg-1'>
						<div className='clumn'>
							<h6 className='title fw-700 mb-30'>Instagram</h6>
							<ul className='insta flex mb-20 rest'>
								{footerData.instagram_posts.map(
									(post, idx) =>
										idx < 3 && (
											<li className={`${idx !== 2 ? "mr-20" : ""} full-width`} key={idx}>
												<a href={post.url}>
													<img src={post.image} alt='' />
												</a>
											</li>
										)
								)}
							</ul>
							<ul className='insta flex rest'>
								{footerData.instagram_posts.map(
									(post, idx) =>
										idx >= 3 && (
											<li className={`${idx !== 5 ? "mr-20" : ""} full-width`} key={idx}>
												<a href={post.url}>
													<img src={post.image} alt='' />
												</a>
											</li>
										)
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{type == "purple-light" ? (
				<div
					className='wave-1 top bg-img'
					style={{ backgroundImage: "url('img/waves/wave-white2.svg')", color: "black" }}
				></div>
			) : null}
		</footer>
	);
};

export default Footer;
