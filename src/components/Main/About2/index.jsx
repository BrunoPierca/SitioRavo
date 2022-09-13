import React from "react";
import {Image} from 'next'

const About = () => {
	return (
		<section className='section-padding gr-purple-light-bg to-up position-re bord-thin-top'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 valign'>
						<div className='intro-img-shape full-width'>
							<div className='svg-shape-img'>
								<svg
									viewBox='0 0 500 500'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									width='100%'
								>
									<defs>
										<clipPath id='shape1'>
											<path
												d='M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z'
												fill='#d1d8e0'
											></path>
										</clipPath>
									</defs>
									<image
										x='0'
										y='0'
										width='100%'
										height='100%'
										clipPath='url(#shape1)'
										xlinkHref='img/about/02.jpg'
										preserveAspectRatio='none'
									></image>
								</svg>
								<div className='svg-sub-bg'>
									<svg
										viewBox='0 0 500 500'
										xmlns='http://www.w3.org/2000/svg'
										xmlnsXlink='http://www.w3.org/1999/xlink'
										width='100%'
									>
										<path
											d='M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z'
											fill='#f7f7f7'
										></path>
									</svg>
								</div>
							</div>
							<div className='exp'>
								<div className='full-width'>
									<img src='img/3MPATHY_LOGO (logo only).png' alt='3mpathy logo' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6 valign'>
						<div className='content'>
							<h3 className='mb-20 fz-38 fw-700'>Nuestra filosofía.</h3>
							<p className="fw-200">
								Apoyamos a cambiar la <strong>forma de actuar y pensar</strong> a través de la educación para que los argumentos que se den a favor o en contra de todos los <strong>grupos vulnerables</strong> estén fundamentados en el conocimiento y no en posturas que parten de los prejuicios.
							</p>
							<br />
							<strong>
								Queremos vernos en la necesidad de reinventar nuestra compañía en 15 años, como el resultado de haber logrado una sociedad incluyente.
							</strong>
							<br />
							<a className='butn butn-md gr-purple2-bg text-light mt-30 radius-30'>
											<span className='text slide-up fw-200'>Sigue conociendonos</span>
											<span className='text slide-down fw-400'>Empecemos</span>
										</a>

						</div>
					</div>
				</div>
			</div>
			<div
				className='wave-1 bottom bg-img'
				style={{ backgroundImage: "url('img/waves/wave-white2.svg')" }}
			></div>
		</section>
	);
};

export default About;
