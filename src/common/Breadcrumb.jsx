import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';
 
const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
          {index < items.length - 1 && <span className="divider">/</span>}
        </span>
      ))}
    </nav>
  );
};
 
export default Breadcrumb;