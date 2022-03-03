import React from 'react'
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.png";
// import garden from "../../assets/garden-logo.png";
import "./Hero.css";

const Hero = () => {
  return (
		<section>
			<Container>
				<Row>
					<Col lg="6" md="6">
						<div className="hero__content">
							<h2 className="mb-4 hero__title">
								Anytime Anywhere <br /> Learn on your <br />
								Suitable Schedule
							</h2>
							<p className="mb-5">
								Lorem ipsum dolor sit amet consectetur <br />
								adipisicing elit. Aut saepe voluptatum earum
								delectus <br /> deserunt id iste, quas officiis
								et repellat!
							</p>
						</div>
						<div className="search">
							<input type="text" placeholder="Search" />
							<button className="btn">Search</button>
						</div>
					</Col>

					<Col lg="6" md="6">
						<img
							src="https://images.pexels.com/photos/9159670/pexels-photo-9159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							className="w-100 hero__img"
						/>
					</Col>
				</Row>
			</Container>
		</section>
  );
}

export default Hero