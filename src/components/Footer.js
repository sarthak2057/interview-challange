import Wrapper from '../assets/wrapper/Footer';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa';
import { BiSearchAlt2, BiCurrentLocation } from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';

import img1 from '../assets/img/download/image 19.png';
import img2 from '../assets/img/download/image 20.png';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-links">
        <div className="footer-item">
          <h5 className="title">Customer care</h5>
          <a href="#" className="link">
            Account
          </a>
          <a href="#" className="link">
            My Orders
          </a>
          <a href="#" className="link">
            Wishlist
          </a>
          <a href="#" className="link">
            FAQs
          </a>
          <a href="#" className="link">
            Support
          </a>
        </div>
        <div className="footer-item">
          <h5 className="title">About</h5>
          <a href="#" className="link">
            Company info
          </a>
          <a href="#" className="link">
            Interior Works
          </a>
        </div>
        <div className="footer-item">
          <h5 className="title">Users Policy</h5>
          <a href="#" className="link">
            Privacy Policy
          </a>
          <a href="#" className="link">
            Terms and Condition
          </a>
          <a href="#" className="link">
            Data Policy
          </a>
          <a href="#" className="link">
            Cookies Policy
          </a>
          <a href="#" className="link">
            Refund Policy
          </a>
          <a href="#" className="link">
            Return Policy
          </a>
        </div>
        <div className="footer-item">
          <h5 className="title">Connect with us</h5>
          <div className="icons">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaGoogle />
            </span>
          </div>
          <h5 className="title download">soon on:</h5>
          <div className="download">
            <img src={img1} alt="download-image" />
            <img src={img2} alt="download-image" />
          </div>
        </div>
        <div className="footer-item">
          <h5 className="title">stay connected</h5>
          <a href="#" className="link">
            <BiCurrentLocation />
            <span>Baneshwor, Kathmandu Nepal</span>
          </a>
          <a href="#" className="link">
            <BsPersonPlus />
            <span>+977-910000000</span>
          </a>
          <a href="#" className="link">
            <AiOutlineMail />
            <span>test@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="subscribe">
        <p>Subscribe to get amazing offers</p>
        <div className="input-value">
          <input value="" placeholder="Enter your email.." />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
