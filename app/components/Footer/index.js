import React from 'react';
import renderHTML from 'react-render-html';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer id="main-footer">
        <div id="footer-container">
          <div className="footer-left-container">
            <a className="social-media-link type30" href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a>
            <a className="social-media-link type30" href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
          </div>
          <div className="footer-right-container">
            <ul className="footer-link-list">
              <li className="type12 bold">HEADER</li>
              <li><a className="footer-link type12 bold" href="#">Terms &#38; Conditions</a></li>
              <li><a className="footer-link type12 bold" href="#">Privacy</a></li>
           </ul>
           <ul className="footer-link-list">
              <li className="type12 bold">LOREM</li>
              <li><a className="footer-link type12 bold" href="#">About Us</a></li>
              <li><a className="footer-link type12 bold" href="#">Career</a></li>
              <li><a className="footer-link type12 bold" href="#">Contact Us</a></li>
           </ul>
           <ul className="footer-link-list">
              <li className="type12 bold">IPSUM</li>
              <li><a className="footer-link type12 bold" href="#">Advertise with us</a></li>
              <li><a className="footer-link type12 bold" href="#">Premium Adverts</a></li>
           </ul>
         </div>
       </div>
     </footer>
    );
  }
}

export default Footer;
