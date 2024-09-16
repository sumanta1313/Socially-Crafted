import React from 'react'


function Sidebar() {
  return (
    <>
    <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
          <ul className="nav navbar-nav nav_1">
            <li><a href="products.html"><b>Room Decoration</b></a></li>
            <li className="dropdown mega-dropdown active">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <b>Arts &amp; Lamps</b> <span className="caret" /></a>				
              <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                <div className="w3ls_vegetables">
                  <ul>	
                    <li><a href="vegetables.html">Wall Arts</a></li>
                    <li><a href="vegetables.html">Table Lamps</a></li>
                  </ul>
                </div>                  
              </div>				
            </li>
            <li><a href="kitchen.html"><b>Jewellery</b></a></li>
            <li><a href="short-codes.html"><b>Paintings</b></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <b>All States</b> <span className="caret" /></a>
              <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                <div className="w3ls_vegetables">
                  <ul>
                    <li><a href="drinks.html">West Bengal</a></li>
                    <li><a href="drinks.html">Uttar Pradesh</a></li>
                    <li><a href="drinks.html">Andhra Pradesh</a></li>
                    <li><a href="drinks.html">Tamil Nadu</a></li>
                    <li><a href="drinks.html">Karnataka</a></li>
                    <li><a href="drinks.html">Madhya Pradesh</a></li>
                    <li><a href="drinks.html">Maharashtra</a></li>
                    <li><a href="drinks.html">Goa</a></li>
                    <li><a href="drinks.html">Kerala</a></li>
                    <li><a href="drinks.html">Sikkim</a></li>
                    <li><a href="drinks.html">Jammu &amp; Kashmir</a></li>
                    <li><a href="drinks.html">Lakshadweep</a></li>
                    <li><a href="drinks.html">Tripura</a></li>
                    <li><a href="drinks.html">Manipur</a></li>
                    <li><a href="drinks.html">Assam</a></li>
                    <li><a href="drinks.html">Nagaland</a></li>
                    <li><a href="drinks.html">Meghalaya</a></li>
                    <li><a href="drinks.html">Chhattisgarh</a></li>
                    <li><a href="drinks.html">Arunachal Pradesh</a></li>
                    <li><a href="drinks.html">Mizoram</a></li>
                    <li><a href="drinks.html">Dadra &amp; Nagar Haveli</a></li>
                    <li><a href="drinks.html">Uttarakhand</a></li>
                    <li><a href="drinks.html">Daman &amp; Diu</a></li>
                    <li><a href="drinks.html">Puducherry</a></li>
                    <li><a href="drinks.html">Delhi</a></li>
                    <li><a href="drinks.html">Chandigarh</a></li>
                    <li><a href="drinks.html">Bihar</a></li>
                    <li><a href="drinks.html">Odisha</a></li>
                    <li><a href="drinks.html">Jharkhand</a></li>
                    <li><a href="drinks.html">Haryana</a></li>
                  </ul>
                </div>                  
              </div>	
            </li>
            <li><a href="pet.html"><b>Re-Cycled Arts</b></a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <b>Necessary Gods</b> <span className="caret" /></a>
              <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                <div className="w3ls_vegetables">
                  <ul>
                    <li><a href="frozen.html">Furniture</a></li>
                    <li><a href="frozen.html">Utensils</a></li>
                  </ul>
                </div>                  
              </div>	
            </li>
          </ul>
        </div>{/* /.navbar-collapse */}
    </>
  )
}

export default Sidebar