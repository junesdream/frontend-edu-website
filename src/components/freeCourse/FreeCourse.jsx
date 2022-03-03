import React from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "./FreeCourseCard";

import "./FreeCourse.css";

const freeCourseData = [
	{
		id: "01",
		title: "Online talkshow",
		imgUrl: "https://images.pexels.com/photos/6238170/pexels-photo-6238170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		students: 5.3,
		rating: 1.7,
	},
	{
		id: "02",
		title: "Kids learning",
		imgUrl: "https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		students: 5.3,
		rating: 1.7,
	},

	{
		id: "03",
		title: "Online Music",
		imgUrl: "https://images.pexels.com/photos/7573225/pexels-photo-7573225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		students: 5.3,
		rating: 1.7,
	},

	{
		id: "04",
		title: "Online Design",
		imgUrl: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		students: 5.3,
		rating: 1.7,
	},
];

const FreeCourse = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg="12" className="text-center mb-5">
						<h2 className="fw-bold">Our Free Courses</h2>
					</Col>

					{freeCourseData.map((item) => (
						<Col lg="3" md="4" className="mb-4" key={item.id}>
							<FreeCourseCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default FreeCourse;
