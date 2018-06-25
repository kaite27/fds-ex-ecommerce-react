import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id="contact-us">
      <footer>
        <div className="rows">
          <div className="span-1-of-2 col">
            <ul className="footer-nav">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">IOS App</Link>
              </li>
              <li>
                <Link to="/">Android App</Link>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-2">
            <ul className="social-links">
              <li>
                <Link to="/">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-google-plus-square" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rows">
          <p>copyright &copy; 2018 by Beigenut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
