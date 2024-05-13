import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Resume from "../../Resume/Resume";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import Downloadapp from "../Downloadapp/Downloadapp";
import Job from "../Job/Job";
import Job_categories from "../JobCategories/JobCategories";
import LastFooter from "../LastFooter/LastFooter";
import Review from "../Review/Review";
import JobCategories from "../JobCategories/JobCategories";
import About from "../About/About";
import WhatDo from "../WhatDo/WhatDo";
import Management from "../Management/Management";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      {/* <Job></Job> */}
      <JobCategories />
      {/* <Job></Job> */}
      {/* <Resume></Resume> */}
      <WhatDo />
      {/* <Review></Review> */}

      <Management />
      <Testimonial />

      <Company></Company>
      {/* <Footer></Footer> */}
      <LastFooter></LastFooter>
    </div>
  );
};

export default Home;
