import React, { useState, useEffect } from 'react';
import DesktopNavbar from './NavbarDesktop';
import MobileNavbar from './NavbarMobile';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyDesktop = window.innerWidth >= 1024;
      if (isCurrentlyDesktop !== isDesktop) {
        setIsDesktop(isCurrentlyDesktop);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]); 

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
