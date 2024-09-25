import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import WatchlistOverlay from './WatchlistOverlay';
import './Watchlist.css';

const App = () => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatchlistItems = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/watchlist');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setWatchlistItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlistItems();
  }, []);

  const handleSelect = (id) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((cardId) => cardId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleCompare = () => {
    if (selectedCards.length >= 2) {
      navigate('/compare', { state: { selectedCards } }); 
    }
  };

  const filledWatchlist = watchlistItems.slice(0, 4);

  return (
    <div className="App">
      <Navbar />
      <Breadcrumb />
      <div className="MainContent">
        <div className="WatchlistContainer">
          {loading && <p>Loading your watchlist...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && filledWatchlist.length === 0 && <p>No items in your watchlist.</p>}
          {filledWatchlist.map((item) => (
            <WatchlistOverlay
              key={item._id}
              selected={selectedCards.includes(item._id)}
              onSelect={() => handleSelect(item._id)}
              title={item.title}
              description={item.description}
              closingDate={new Date(item.closingDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
              location={item.location}
              buy_now={item.buy_now}
              current_bid={item.current_bid}
              image={item.image}  // Ensure the image is passed correctly
            />
          ))}
        </div>

        {selectedCards.length >= 2 && (
          <div className="compare-button-container">
            <button
              className="compare-button"
              onClick={handleCompare}
              aria-disabled={selectedCards.length < 2}
            >
              Compare Selected Items
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
