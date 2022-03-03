import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "./Courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
	{
		id: "01",
		title: "Music Online Lesson",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: "https://images.pexels.com/photos/7120405/pexels-photo-7120405.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	},

	{
		id: "02",
		title: "Writing Online Lesson",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	},

	{
		id: "03",
		title: "Mixing Online Lesson",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	},
];


const Courses = () => {
  return (
		<section>
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<div className="course__top d-flex justify-content-between align-items-center">
							<div className="course__top__left w-50">
								<h2>Our Popular Courses</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quae consequatur libero
									quod voluptatibus ullam quia quas, vitae
									voluptatem recusandae reprehenderit!
								</p>
							</div>

							<div className="w-50 text-end">
								<button className="btn">See All</button>
							</div>
						</div>
					</Col>
					{coursesData.map((item) => (
						<Col lg="4" md="6" sm="6">
							<CourseCard key={item.id} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
  );
}

export default Courses