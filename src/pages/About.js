import Footer from "../inc/Footer";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";

import React, { useState, useEffect } from "react";

function About(){

  
  let [pages, setPages] = useState({});

  async function getpages() {
      var fd=new FormData();
      fd.append("name","About Us");
      var res = await fetch("http://localhost:2000/page/showpage",{
          method:'POST',
          body:fd
      });
      var data = await res.json();
  
      setPages(data);
  }

  useEffect(()=>{
      getpages();
  })

    return(
        <>
        <div>
        <Header/>
  {/* products-breadcrumb */}
  <div className="products-breadcrumb">
    <div className="container">
      <ul>
        <li><i className="fa fa-home" aria-hidden="true" /><a href="index.html">Home</a><span>|</span></li>
        <li>About Us</li>
      </ul>
    </div>
  </div>
  {/* //products-breadcrumb */}
  {/* banner */}
  <div className="banner">
    <div className="w3l_banner_nav_left">
      <nav className="navbar nav_bottom">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header nav_2">
          <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div> 
        {/* Collect the nav links, forms, and other content for toggling */}
        <Sidebar/>
      </nav>
    </div>

           


    <div className="w3l_banner_nav_right">
      {/* about */}
      <div className="privacy about">
      <div className="container main">
              <div className="row">
                <div className="col-md-12">
                  <h3>{pages.ptitle}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <img className="pimgc" src={"http://localhost:2000/page_images/"+pages.pimg} />
                </div>
                <div className="col-md-7">
                  <p dangerouslySetInnerHTML={{ __html: pages.pdetails }}></p>
                </div>
              </div>
           
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* //about */}
    </div>
    <div className="clearfix" />
  </div>
  {/* //banner */}
  {/* team */}
  <div className="team">
    <div className="container">
      <h3>Meet Our Amazing Team</h3>
      <div className="agileits_team_grids">
        <div className="col-md-3 agileits_team_grid">
          <img src="images/32.jpg" alt=" " className="img-responsive-1" />
          <h4>Sourin Pal</h4>
          <p>Team Member</p>
          <ul className="agileits_social_icons agileits_social_icons_team">
            <li><a href="#" className="facebook"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
            <li><a href="#" className="instagram"><i className="fa fa-github" aria-hidden="true" /></a></li>
            <li><a href="#" className="google"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
          </ul>
        </div>
        <div className="col-md-3 agileits_team_grid">
          <img src="images/33.jpg" alt=" " className="img-responsive-2" />
          <h4>Sumanta Paul</h4>
          <p>Team Leader</p>
          <ul className="agileits_social_icons agileits_social_icons_team">
            <li><a href="#" className="facebook"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
            <li><a href="#" className="instagram"><i className="fa fa-github" aria-hidden="true" /></a></li>
            <li><a href="#" className="google"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
          </ul>
        </div>
        <div className="col-md-3 agileits_team_grid">
          <img src="images/34.jpg" alt=" " className="img-responsive-3" />
          <h4>Waqqar Rashid</h4>
          <p>Team Member</p>
          <ul className="agileits_social_icons agileits_social_icons_team">
            <li><a href="#" className="facebook"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
            <li><a href="#" className="instagram"><i className="fa fa-github" aria-hidden="true" /></a></li>
            <li><a href="#" className="google"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
          </ul>
        </div>
        {/* <div className="clearfix"> </div> */}
      </div>
    </div>
  </div>
  {/* //team */}
  {/* testimonials */}
 
  {/* //testimonials */}
  {/* newsletter */}
  
  <Footer/>
</div>

    </>
    )
}

export default About;