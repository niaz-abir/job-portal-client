import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Resume from "../../Resume/Resume";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import Downloadapp from "../Downloadapp/Downloadapp";
import Job from "../Job/Job";
import Job_categories from "../Job_Categoris/Job_categories";
import LastFooter from "../LastFooter/LastFooter";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Job></Job> */}
      <Job_categories></Job_categories>
      {/* <Job></Job> */}
      <Resume></Resume>
      <Review></Review>
      <Downloadapp></Downloadapp>
      <Company></Company>
      {/* <Footer></Footer> */}
      <LastFooter></LastFooter>
    </div>
  );
};

export default Home;
