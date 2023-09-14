// import React from "react";
// import Header from "../common/header/Header";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Home from "../home/Home";
// import Footer from "../common/footer/Footer";
// import About from "../about/About";
// import Pricing from "../pricing/Pricing";
// import Blog from "../blog/Blog";
// import Services from "../services/Services";
// import Contact from "../contact/Contact";

// const Pages = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/services" component={Services} />
//           <Route exact path="/blog" component={Blog} />
//           <Route exact path="/pricing" component={Pricing} />
//           <Route exact path="/contact" component={Contact} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// export default Pages;

import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="about" path="/about" element={<About />} />
          <Route key="services" path="/services" element={<Services />} />
          <Route key="blog" path="/blog" element={<Blog />} />
          <Route key="pricing" path="/pricing" element={<Pricing />} />
          <Route key="contact" path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
