import React from 'react'
import './About.css';
import { Container, Row, Col } from "reactstrap";
// import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";

const About = () => {
  return (
		<section>
			<Container>
				<Row>
					<Col lg="6" md="6">
						<div className="about__img">
							<img
								src="https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt="about"
								className="w-100"
							/>
						</div>
					</Col>

					<Col lg="6" md="6">
						<div className="about__content">
							<h2>About Us</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Excepturi cupiditate animi
								deserunt libero nesciunt corporis explicabo
								nobis ex quo molestiae!
							</p>

							<div className="about__counter">
								<div className=" d-flex gap-5 align-items-center">
									<div className="single__counter">
										<span className="counter">
											<CountUp
												start={0}
												end={25}
												duration={2}
												suffix="K"
											/>
										</span>

										<p className="counter__title">
											Completed Projects
										</p>
									</div>

									<div className="single__counter">
										<span className="counter">
											<CountUp
												start={0}
												end={12}
												duration={2}
												suffix="M"
											/>
										</span>

										<p className="counter__title">
											Patient Around World
										</p>
									</div>
								</div>

								<div className=" d-flex gap-5 align-items-center">
									<div className="single__counter">
										<span className="counter">
											<CountUp
												start={0}
												end={95}
												duration={2}
												suffix="M"
											/>
										</span>

										<p className="counter__title">
											Ideas Raised Funds
										</p>
									</div>

									<div className="single__counter">
										<span className="counter">
											<CountUp
												start={0}
												end={5}
												duration={2}
												suffix="K"
											/>
										</span>

										<p className="counter__title">
											Categories Served
										</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
  );
}

export default About