import Footer from "../inc/Footer";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
function Contact(){
    return(
        <>
        <div>
        <Header/>
  {/* products-breadcrumb */}
  <div className="products-breadcrumb">
    <div className="container">
      <ul>
        <li><i className="fa fa-home" aria-hidden="true" /><a href="index.html">Home</a><span>|</span></li>
        <li>Contact Us</li>
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
        <h3>Visit Us</h3>
        <p className="animi">For Any Kind of Enquiry or Donation Related Query Please Visit Us.</p>
        <div className="agile_about_grids">
          <div className="col-md-6 agile_about_grid_right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.218280533899!2d88.43295287539802!3d22.570937979492882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275be8320d919%3A0xe663ed60dae7dd4e!2sTechno%20India%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1724128692369!5m2!1sen!2sin" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-md-6 agile_about_grid_left">
                    <p> <h2><span><b>ADDRESS</b></span></h2> <h4>Techno India Institute of Technology
                      HCCP+96C, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</h4></p>
          </div>
        </div>
      </div>
      {/* //about */}
    </div>
  </div>
  {/* //banner */}
  {/* team */}
          <div className="team">
            <div className="container">
              <h3>Stay Conneted With Us</h3>
              <div className="agileits_team_grids">
                <div className="col-md-3 agileits_team_grid">
                  {/* <img src="images/32.jpg" alt=" " className="img-responsive" /> */}
                  <h4>For Further Any Update Do Subscribe Our Social Media handles.</h4>
                  <ul className="agileits_social_icons agileits_social_icons_team">
                    <li><a href="#" className="google"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
                    <li><a href="#" className="facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                    <li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                    <li><a href="#" className="google"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>    
  {/* //team */}
  {/* testimonials */}

  {/* //testimonials */}
  {/* newsletter */}

  {/* //newsletter */}


  <Footer/>
</div>

    </>
    )
}

export default Contact;