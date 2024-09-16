import Footer from "../inc/Footer";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useState,useEffect } from "react";
function Home(){
  let [products,setProducts]=useState([])


    async function getpro(){
        var resp=await fetch("http://localhost:2000/product/sel");
        var data=await resp.json();

        console.log(data)

        setProducts(data);
        
    }
    useEffect(()=>{
        getpro(); 
    },[])
    return(
        <>
       <div>
<Header/>
<div className="products-breadcrumb">
    <div className="container">
      <ul>
        <li><i className="fa fa-home" aria-hidden="true" /><a href="index.html">Home</a><span>|</span></li>
        <li>Hand Crafts</li>
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
       {/* /.navbar-collapse */}
       <Sidebar/>
      </nav>
    </div>
    <div className="w3l_banner_nav_right">
      <div className="w3l_banner_nav_right_banner3">
        <h3>We Sell, Your Products</h3>
      </div>
      <div className="w3l_banner_nav_right_banner3_btm">
        <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
          <div className="view view-tenth">
            <img src="images/13.jpg" alt=" " className="img-responsive" />
            <div className="mask">
              <h4>Socialy Crafted</h4>
              <p>We Have The World's Finest handmade Products That Will Enhance The Beauty & Elegance of Your HOme, Products That you need.</p>
            </div>
          </div>
          <h4>Made in India</h4>
          <ol>
            <i><li>Made by Indians.</li></i>
            <i><li>Large production.</li></i>
            <i><li>We Buy, and sell for you.</li></i>
          </ol>
        </div>
        <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
          <div className="view view-tenth">
            <img src="images/14.jpg" alt=" " className="img-responsive" />
            <div className="mask">
              <h4>Socialy Crafted</h4>
              <p>We Have The World's Finest handmade Products That Will Enhance The Beauty & Elegance of Your HOme, Products That you need.</p>
            </div>
          </div>
          <h4>Represent India</h4>
          <ol>
            <i><li>Various States Produce handmade Products.</li></i>
            <i><li>We Also Exports Our Products.</li></i>
            <i><li>We Representing Our Indian Handicrafts.</li></i>
          </ol>
        </div>
        <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
          <div className="view view-tenth">
            <img src="images/15.jpg" alt=" " className="img-responsive" />
            <div className="mask">
              <h4>Socialy Crafted</h4>
              <p>We Have The World's Finest handmade Products That Will Enhance The Beauty & Elegance of Your HOme, Products That you need.</p>
            </div>
          </div>
          <h4>Indian Culture</h4>
          <ol>
            <i><li>Different States Have Different Culture.</li></i>
            <i><li>We Just Promote There Business.</li></i>
            <i><li>Stay Connet With Us.</li></i>
          </ol>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="w3ls_w3l_banner_nav_right_grid">
        <h3>Home Decor</h3>
        <div className="w3ls_w3l_banner_nav_right_grid1">
          <h6>Handicraft Products</h6>

          {products.map((p)=>
          <div className="col-md-3 w3ls_w3l_banner_left" key={p._id}>
            <div className="hover14 column">
              <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                <div className="agile_top_brand_left_grid_pos">
                  {/* <img src="images/offer.png" alt=" " className="img-responsive" /> */}
                </div>
                <div className="agile_top_brand_left_grid1">
                  <figure>
                    <div className="snipcart-item block">
                      <div className="snipcart-thumb">
                        <a href="#"><img src={"http://localhost:2000/product_img/"+p.pimg} alt=" " className="chompa" /></a>
                        <p>{p.name}</p>
                        <h4>{p.price}</h4>
                      </div>
                      <div className="snipcart-details">
                        
                            <input type="button" name="Buy Now" defaultValue="Buy Now" className="button" /> 
                            <input type="button" name="Add to Cart" defaultValue="Add to Cart" className="button" />

                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
             )}


          
          <div className="clearfix"> </div>
        </div>
     
      </div>
    </div>
    <div className="clearfix" />
  </div>
  {/* //banner */}
  {/* newsletter */}

  {/* //newsletter */}
  {/* footer */}


<Footer/>


  </div>


        </>
    )
}
export default Home;