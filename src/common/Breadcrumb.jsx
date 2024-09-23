import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; // Assuming you have a CSS file for styling

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      <span className="divider">/</span>
      <Link to="/category" className="breadcrumb-link">Category</Link>
      <span className="divider">/</span>
      <Link to="/subcategory" className="breadcrumb-link">Subcategory</Link>
    </nav>
  );
};

export default Breadcrumb;
