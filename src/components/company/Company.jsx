import React from "react";
import "./Company.css";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
		<section className="company">
			<Container>
				<Row>
					<Col lg="2" md="3" sm="4" xs="6">
						<h3 className=" d-flex align-items-center gap-1">
							<i class="ri-youtube-fill"></i> <span>Youtube</span>
						</h3>
					</Col>

					<Col lg="2" md="3" sm="4" xs="6">
						<h3 className=" d-flex align-items-center gap-1">
							<i class="ri-pinterest-line"></i>
							<span>Printerest</span>
						</h3>
					</Col>

					<Col lg="2" md="3" sm="4" xs="6">
						<h3 className=" d-flex align-items-center gap-1">
							<i class="ri-microsoft-fill"></i>
							<span>Microsoft</span>
						</h3>
					</Col>

					<Col lg="2" md="3" sm="4" xs="6">
						<h3 className=" d-flex align-items-center gap-1">
							<i class="ri-apple-fill"></i> <span>Apple</span>
						</h3>
					</Col>

					<Col lg="2" md="3" sm="4" xs="6">
						<h3 className=" d-flex align-items-center gap-1">
							<i class="ri-discord-fill"></i> <span>Discord</span>
						</h3>
					</Col>

					<Col lg="2" md="3" sm="4" xs="6">
						<h2 className=" d-flex align-items-center gap-1">
							<i class="ri-google-fill"></i>
							<span>Google</span>
						</h2>
					</Col>
				</Row>
			</Container>
		</section>
  );
};

export default Company;
