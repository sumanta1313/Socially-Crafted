import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        {/* header */}
   
  {/* script-for sticky-nav */}
  {/* //script-for sticky-nav */}
  <div className="logo_products">
    <div className="container">
      <div className="w3ls_logo_products_left">
        <h1><a href="#"><span>Socially</span>Crafted</a></h1>
      </div>
      <div className="w3ls_logo_products_left1">
        <ul className="special_items">
          <b><li><NavLink to="/">Products</NavLink><i>/</i></li></b>
          <b><li><NavLink to="/about">About Us</NavLink><i>/</i></li></b>
          <b><li><NavLink to="/contact">Contact us</NavLink><i>/</i></li></b>
        </ul>
      </div>
      <div className="w3ls_logo_products_left1">
        <ul className="phone_email">
          <li><i className="fa fa-phone" aria-hidden="true" />(+91) 01234 56789</li>
          <li><i className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:store@grocery.com">SC@abcd.com</a></li>
        </ul>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  {/* //header */}
  {/* products-breadcrumb */}

  {/* //products-breadcrumb */}
    </>
  )
}

export default Header