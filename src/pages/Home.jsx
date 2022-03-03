import React, { Fragment } from 'react'
import Company from '../components/company/Company'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import About from "../components/about/About";
import Courses from "../components/courses/Courses";
import ChooseUs from '../components/choose/Choose';
import Features from '../components/feature/Features';
import FreeCourse from '../components/freeCourse/FreeCourse';
import Testimonials from '../components/testimonial/Testimonial';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
		<Fragment>
			<Header />
			 <Hero />
        <Company />
        <About />
        <Courses />
        <ChooseUs />
        <Features />
        <FreeCourse />
        <Testimonials />
        <Newsletter />	
			<Footer />
		</Fragment>
  );
}

export default Home