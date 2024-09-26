import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import { useLocation, Link } from 'react-router-dom';
import CompareOverlay from './CompareOverlay'; 
import './compare.css';

const CompareItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchItems = async () => {
      const { state } = location;
      const selectedCards = state?.selectedCards;

      if (selectedCards && selectedCards.length > 0) {
        try {
          const response = await axios.get('http://localhost:3000/api/compare', {
            params: {
              itemIds: selectedCards,
            },
          });
          setItems(response.data);
        } catch (err) {
          setError(`Error fetching data: ${err.response ? err.response.data.message : err.message}`);
          console.error(err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchItems();
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <Breadcrumb />
        <div>{error}</div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <Breadcrumb />
        <div>No items to compare.</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      
      <div className="compare-header">
          Compare your saved items
          <Link to="/watchlist" className="back-to-watchlist">
              Back to Watchlist
          </Link>
      </div>

      <div className="compare-items-container">
        {items.map((item) => (
          <CompareOverlay
            key={item._id} 
            item={item} 
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CompareItems;
