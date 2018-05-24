import React from 'react';
import renderHTML from 'react-render-html';

import submenu from '../../media/homepage-submenu-ad.jpg';
import anotherImage from '../../media/homepage-another-image.jpg'
import submenuServices from '../../media/homepage-submenu-services.jpg'
import submenuWanted from '../../media/homepage-submenu-wanted.jpg'
import profileImage from '../../media/profile-image.jpg'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header id="main-header" className="u-cf">
        <div id="header-container">
          <a href="index.html">
            <div id="logo" className="fl-left"></div>
          </a>
          <nav>
            <div className="fl-right mobile-icon-container">
              <input type="checkbox" id="mobile-navigation" />
              <label for="mobile-navigation">
                <div id="mobile-icon-buton">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </label>
            </div>
            <a href="create-ad-1.html">
              <button className="yellow-button post-listing type14 bold">Post Your Ad</button>
            </a>
            <ul className="main-nav-lvl1 bold fl-right type14">
              <li className="main-nav-top-tier">
                <a href="#"><i className="fa fa-angle-down type12" aria-hidden="true"></i> Buy</a>
                  <div className="main-submenu-bg">
                    <span className="submenu-tag type25 strong">Buy</span>
                    <ul className="main-nav-lvl2">
                      <li>
                        <a href="#">Vehicles</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Motorcycles</a></li>
                          <li><a href="#">Cars</a></li>
                          <li><a href="#">Vans &#38; Trucks</a></li>
                          <li><a href="#">Threewheelers</a></li>
                          <li><a href="#">Bicycles</a></li>
                          <li><a href="#">Vechicle accesories</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Properties</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Houses</a></li>
                          <li><a href="#">Apartments</a></li>
                          <li><a href="#">Land</a></li>
                          <li><a href="#">Commercial Property</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Mobile Phones</a></li>
                          <li><a href="#">Computers &#38; Laptops</a></li>
                          <li><a href="#">Cameras &#38; Camcorders</a></li>
                          <li><a href="#">TVs</a></li>
                          <li><a href="#">Computer &#38; Laptop Accessories</a></li>
                          <li><a href="#">Mobile Phone Accessories</a></li>
                          <li><a href="#">Home Appliances</a></li>
                          <li><a href="#">Audio &#38; MP3</a></li>
                          <li><a href="#">Video Games</a></li>
                          <li><a href="#">Aircondition</a></li>
                          <li><a href="#">TV &#38; Video Accessories</a></li>
                          <li><a href="#">Solar &#38; Generators</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Fashion, Health &#38; Beauty</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Watches</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Health &#38; Beauty Products</a></li>
                          <li><a href="#">Jewellery</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Shoes and Bags</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Hobby, Sports &#38; Kids</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Musical Instruments</a></li>
                          <li><a href="#">Sports Equipment</a></li>
                          <li><a href="#">Arts &#38; Collectibles</a></li>
                          <li><a href="#">Kids &#38; Children Items</a></li>
                          <li><a href="#">Music &#38; Movies</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Animals, Food &#38; Agriculture</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Pets</a></li>
                          <li><a href="#">Farm Animals</a></li>
                          <li><a href="#">Animal Food &#38; Accessories</a></li>
                          <li><a href="#">Crops, Seeds &#38; Plants</a></li>
                          <li><a href="#">Farming Tools and Machinery</a></li>
                          <li><a href="#">Farm Products</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home &#38; Garden</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Furniture</a></li>
                          <li><a href="#">Kitchenware</a></li>
                          <li><a href="#">Bathroom &#38; Sanitaryware</a></li>
                          <li><a href="#">Garden</a></li>
                          <li><a href="#">Building Material</a></li>
                          <li><a href="#">Other Homeware</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Business &#38; Industry</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Industry Tools &#38; Machinery</a></li>
                          <li><a href="#">Office Equipment &#38; Stationery</a></li>
                          <li><a href="#">Raw Materials</a></li>
                          <li><a href="#">Healthcare Medical &#38; Equipment</a></li>
                          <li><a href="#">Licenses &#38; Titles</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Books &#38; Stationery</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Schools Books</a></li>
                          <li><a href="#">Stationery Items</a></li>
                          <li><a href="#">Magazines &#38; Novels</a></li>
                          <li><a href="#">Other Books</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Others</a></li>
                    </ul>
                    <img className="submenu-ad-image" src={submenu} alt="Ad" />
                  </div>
                </li>
                <li className="main-nav-top-tier">
                  <a href="#"><i className="fa fa-angle-down type12" aria-hidden="true"></i> Rent</a>
                  <div className="main-submenu-bg">
                    <span className="submenu-tag type25 strong">Rent</span>
                    <ul className="main-nav-lvl2">
                      <li>
                        <a href="#">Vehicles</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Motorcycles</a></li>
                          <li><a href="#">Cars</a></li>
                          <li><a href="#">Vans &#38; Trucks</a></li>
                          <li><a href="#">Threewheelers</a></li>
                          <li><a href="#">Bicycles</a></li>
                          <li><a href="#">Vechicle accesories</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Properties</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Houses</a></li>
                          <li><a href="#">Apartments</a></li>
                          <li><a href="#">Land</a></li>
                          <li><a href="#">Commercial Property</a></li>
                          <li><a href="#">Rooms</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Projectors</a></li>
                          <li><a href="#">Home Appliances</a></li>
                          <li><a href="#">Generators</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Fashion, Health and Beauty</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Jewellery</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Business and Industry</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Industry Tools &#38; Machinery</a></li>
                          <li><a href="#">Office Equipment &#38; Stationery</a></li>
                          <li><a href="#">Healthcare Medical &#38; Equipment</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Books and Stationery</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Magazines &#38; Novels</a></li>
                          <li><a href="#">Other Books</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Others</a></li>
                    </ul>
                    <img className="submenu-ad-image" src={anotherImage} alt="Another ad" />
                  </div>
                </li>
                <li className="main-nav-top-tier">
                  <a href="#"><i className="fa fa-angle-down type12" aria-hidden="true"></i> Services</a>
                  <div className="main-submenu-bg">
                    <span className="submenu-tag type25 strong">Services</span>
                    <ul className="main-nav-lvl2">
                      <li>
                        <a href="#">Vehicles</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Interior &#38; Exterior Cleaning</a></li>
                          <li><a href="#">Engine Tuning &#38; Wheel Alignment</a></li>
                          <li><a href="#">Vehicle Repair</a></li>
                          <li><a href="#">Painting</a></li>
                          <li><a href="#">Seat Cover &#38; Interior Decoration</a></li>
                          <li><a href="#">A/C Service</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Properties</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Plumber Service</a></li>
                          <li><a href="#">Carpenter Service</a></li>
                          <li><a href="#">Masonry Service</a></li>
                          <li><a href="#">Security</a></li>
                          <li><a href="#">Electrical Service</a></li>
                          <li><a href="#">Cleaning</a></li>
                          <li><a href="#">Broker</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Mobile Phones Repair</a></li>
                          <li><a href="#">Computers &#38; Laptops Repair</a></li>
                          <li><a href="#">Cameras &#38; Camcorders Repair</a></li>
                          <li><a href="#">TV Repair</a></li>
                          <li><a href="#">A/C Service &#38; Repair</a></li>
                          <li><a href="#">Other Home Appliances Repair</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Fashion, Health and Beauty</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Makeup &#38; Hair Style</a></li>
                          <li><a href="#">Spa &#38; Massage</a></li>
                          <li><a href="#">Ayurvedic Service</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Animals, Food and Agriculture</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Veterinary Service</a></li>
                          <li><a href="#">Machinery &#38; Tools Repair</a></li>
                          <li><a href="#">Pet Care</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home and Garden</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Labour</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Business and Industry</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Security</a></li>
                          <li><a href="#">Office Equipment &#38; Stationery Supplies</a></li>
                          <li><a href="#">Industry Tools &#38; Machinery Service</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Jobs</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Domestic Jobs</a></li>
                          <li><a href="#">International Jobs</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Education</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Tuition &#38; Seminar</a></li>
                          <li><a href="#">Day Care Center</a></li>
                          <li><a href="#">Nursery</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Travel &#38; Tourism</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Tour Packages</a></li>
                          <li><a href="#">Visa &#38; Air Tickets</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Event Management</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Venue Decoration</a></li>
                          <li><a href="#">Invitation Card Design</a></li>
                          <li><a href="#">Food Catering</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Others</a></li>
                    </ul>
                    <img className="submenu-ad-image" src={submenuServices} alt="Ad" />
                  </div>
                </li>
                <li className="main-nav-top-tier">
                  <a href="#"><i className="fa fa-angle-down type12" aria-hidden="true"></i> Wanted</a>
                  <div className="main-submenu-bg">
                    <span className="submenu-tag type25 strong">Wanted</span>
                    <ul className="main-nav-lvl2">
                      <li>
                        <a href="#">Vehicles</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Motorcycles</a></li>
                          <li><a href="#">Cars</a></li>
                          <li><a href="#">Vans &#38; Trucks</a></li>
                          <li><a href="#">Threewheelers</a></li>
                          <li><a href="#">Bicycles</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Properties</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Houses</a></li>
                          <li><a href="#">Apartments</a></li>
                          <li><a href="#">Land</a></li>
                          <li><a href="#">Commercial Property</a></li>
                          <li><a href="#">Rooms</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                        <ul className="main-nav-lvl3">
                          <li><a href="#">Mobile Phones</a></li>
                          <li><a href="#">Computers &#38; Laptops</a></li>
                          <li><a href="#">Cameras &#38; Camcorders</a></li>
                          <li><a href="#">TVs</a></li>
                          <li><a href="#">Others</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Others</a></li>
                    </ul>
                    <img className="submenu-ad-image" src={submenuWanted} alt="Ad" />
                  </div>
                </li>
                <li className="main-nav-top-tier"><a href="shop.html">Shops</a></li>
                <li className="main-nav-top-tier"><a href="profile-wishlist.html">Wish list</a></li>
                <li className="main-nav-top-tier login-menu">
                  <a>Login</a>
                  <ul className="contact-submenu">
                    <li>Welcome Guest</li>
                    <li><a href="profile-dashboard.html">Login</a></li>
                    <li><a href="profile-wishlist.html">Register</a></li>
                  </ul>
                </li>
                <li className="main-nav-top-tier logout-menu">
                  <a href="profile-dashboard.html" className="contact-image-container"><img className="contact-image" src={profileImage} /></a>
                  <ul className="contact-submenu">
                    <li>Welcome Username</li>
                    <li><a href="profile-dashboard.html">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
            </ul>
            <input type="text" className="type14 underline-input header-search fl-right" placeholder="&#xf002; Search  " />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
