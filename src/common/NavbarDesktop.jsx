import React from 'react';
import './NavbarDesktop.css'; 
import logo from '../assets/TradeMeLogoBig.png';


import { Link } from 'react-router-dom';

const NavbarDesktop = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <div className="logo">
            <img src={logo} alt="TradeMe Logo" />
          </div>
          <div className="browse-section">
            <a href="#browse" className="nav-item browse">Browse</a>
            <div className="divider-line"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M20 19.25L16.1333 15.3833M18.2222 10.3611C18.2222 14.2885 15.0385 17.4722 11.1111 17.4722C7.18375 17.4722 4 14.2885 4 10.3611C4 6.43375 7.18375 3.25 11.1111 3.25C15.0385 3.25 18.2222 6.43375 18.2222 10.3611Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="#search" className="nav-item search">Search all of TradeMe</a>
          </div>
        </div>
        <div className="right-section">
          <div className="browse-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M20.8401 4.85987C20.3294 4.34888 19.7229 3.94352 19.0555 3.66696C18.388 3.39039 17.6726 3.24805 16.9501 3.24805C16.2276 3.24805 15.5122 3.39039 14.8448 3.66696C14.1773 3.94352 13.5709 4.34888 13.0601 4.85987L12.0001 5.91987L10.9401 4.85987C9.90843 3.82818 8.50915 3.24858 7.05012 3.24858C5.59109 3.24858 4.19181 3.82818 3.16012 4.85987C2.12843 5.89156 1.54883 7.29084 1.54883 8.74987C1.54883 10.2089 2.12843 11.6082 3.16012 12.6399L4.22012 13.6999L12.0001 21.4799L19.7801 13.6999L20.8401 12.6399C21.3511 12.1291 21.7565 11.5227 22.033 10.8552C22.3096 10.1878 22.4519 9.47236 22.4519 8.74987C22.4519 8.02738 22.3096 7.31198 22.033 6.64452C21.7565 5.97706 21.3511 5.37063 20.8401 4.85987V4.85987Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <a href="#watchlist" className="nav-item watchlist">Watchlist</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M17 3.24981C17.2626 2.98717 17.5744 2.77883 17.9176 2.63669C18.2608 2.49455 18.6286 2.42139 19 2.42139C19.3714 2.42139 19.7392 2.49455 20.0824 2.63669C20.4256 2.77883 20.7374 2.98717 21 3.24981C21.2626 3.51246 21.471 3.82426 21.6131 4.16742C21.7553 4.51058 21.8284 4.87838 21.8284 5.24981C21.8284 5.62125 21.7553 5.98905 21.6131 6.33221C21.471 6.67537 21.2626 6.98717 21 7.24981L7.5 20.7498L2 22.2498L3.5 16.7498L17 3.24981Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <a href="#listing" className="nav-item listing">Start a Listing</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <g clip-path="url(#clip0_272_12800)">
          <path d="M1 1.25H5L7.68 14.64C7.77144 15.1004 8.02191 15.514 8.38755 15.8083C8.75318 16.1026 9.2107 16.259 9.68 16.25H19.4C19.8693 16.259 20.3268 16.1026 20.6925 15.8083C21.0581 15.514 21.3086 15.1004 21.4 14.64L23 6.25H6M10 21.25C10 21.8023 9.55228 22.25 9 22.25C8.44772 22.25 8 21.8023 8 21.25C8 20.6977 8.44772 20.25 9 20.25C9.55228 20.25 10 20.6977 10 21.25ZM21 21.25C21 21.8023 20.5523 22.25 20 22.25C19.4477 22.25 19 21.8023 19 21.25C19 20.6977 19.4477 20.25 20 20.25C20.5523 20.25 21 20.6977 21 21.25Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_272_12800">
          <rect width="24" height="24" fill="white" transform="translate(0 0.25)"/>
          </clipPath>
          </defs>
          </svg>
            <a href="#cart" className="nav-item cart">My Cart</a>
            <a href="#profile" className="nav-item profile">My Profile</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M12 22.25C17.5228 22.25 22 17.7728 22 12.25C22 6.72715 17.5228 2.25 12 2.25C6.47715 2.25 2 6.72715 2 12.25C2 17.7728 6.47715 22.25 12 22.25Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.7502 18.9997C17.95 18.1995 16.8648 17.75 15.7332 17.75H8.2665C7.13491 17.75 6.04967 18.1995 5.24951 18.9997M16.2665 10.5167C16.2665 12.8731 14.3562 14.7833 11.9998 14.7833C9.64342 14.7833 7.73317 12.8731 7.73317 10.5167C7.73317 8.16025 9.64342 6.25 11.9998 6.25C14.3562 6.25 16.2665 8.16025 16.2665 10.5167Z" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </nav>
      <div className="red-block">
        <div className="left-red-section">
          <a href="#marketplace" className="red-text">Browse Marketplace</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.0711 13.3139L17.0211 8.36388C17.1134 8.26837 17.2237 8.19219 17.3457 8.13978C17.4677 8.08737 17.599 8.05979 17.7317 8.05863C17.8645 8.05748 17.9962 8.08278 18.1191 8.13306C18.242 8.18334 18.3536 8.25759 18.4475 8.35149C18.5414 8.44538 18.6157 8.55703 18.666 8.67993C18.7162 8.80282 18.7415 8.9345 18.7404 9.06728C18.7392 9.20006 18.7117 9.33128 18.6592 9.45329C18.6068 9.57529 18.5307 9.68564 18.4351 9.77788L12.7781 15.4349C12.5906 15.6224 12.3363 15.7277 12.0711 15.7277C11.806 15.7277 11.5517 15.6224 11.3641 15.4349L5.70714 9.77788C5.61163 9.68564 5.53545 9.57529 5.48304 9.45329C5.43063 9.33128 5.40305 9.20006 5.40189 9.06728C5.40074 8.9345 5.42604 8.80282 5.47632 8.67993C5.5266 8.55703 5.60086 8.44538 5.69475 8.35149C5.78864 8.25759 5.90029 8.18334 6.02319 8.13306C6.14609 8.08278 6.27777 8.05748 6.41054 8.05863C6.54332 8.05979 6.67454 8.08737 6.79655 8.13978C6.91855 8.19219 7.0289 8.26837 7.12114 8.36388L12.0711 13.3139Z" fill="white"/>
          </svg>
          <span className="divider"></span>
          <a href="#stores" className="red-text">Stores</a>
          <span className="divider"></span>
          <a href="#deals" className="red-text">Deals</a>
          <span className="divider"></span>
          <a href="#courier" className="red-text">Book a Courier</a>
        </div>
        <div className="right-red-section">
          <a href="#listing" className="red-text">List an Item</a>
          <span className="divider"></span>
          <a href="#help" className="red-text">Help & Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default NavbarDesktop;
