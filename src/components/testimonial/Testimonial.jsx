import React from "react";
import "./Testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const settings = {
		infinite: true,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};
	return (
		<section>
			<Container>
				<Row>
					<Col lg="10" md="12" className="m-auto">
						<div className="testimonial__wrapper d-flex justify-content-between align-items-center p-10 ">
							<div className="testimonial__img w-80">
								<img
									src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									className="w-100"
								/>
							</div>

							<div className="testimonial__content w-50">
								<h2 className="mb-4">Our Students Voice</h2>

								<Slider {...settings}>
									<div>
										<div className="single__testimonial">
											<h6 className="mb-3 fw-bold">
												Excellent course of materials
											</h6>
											<p>
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Facilis saepe id voluptas
												molestiae. Aperiam corrupti
												voluptas earum at molestiae
												neque!
											</p>

											<div className="student__info mt-4">
												<h6 className="fw-bold">
													Jane Doe
												</h6>
												<p>California, United State</p>
											</div>
										</div>
									</div>

									<div>
										<div className="single__testimonial">
											<h6 className="mb-3 fw-bold">
												Great course of curriculum
											</h6>
											<p>
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Facilis saepe id voluptas
												molestiae. Aperiam corrupti
												voluptas earum at molestiae
												neque!
											</p>

											<div className="student__info mt-4">
												<h6 className="fw-bold">
													Maria Müller
												</h6>
												<p>Munich, Germany</p>
											</div>
										</div>
									</div>

									<div>
										<div className="single__testimonial">
											<h6 className="mb-3 fw-bold">
												Amazing teachers of course
											</h6>
											<p>
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Facilis saepe id voluptas
												molestiae. Aperiam corrupti
												voluptas earum at molestiae
												neque!
											</p>

											<div className="student__info mt-4">
												<h6 className="fw-bold">
													Sinju Kim
												</h6>
												<p>Seoul, South Korea</p>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonials;
