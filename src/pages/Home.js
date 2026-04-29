import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { catalogData } from '../data/catalogData';
import './Home.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Group items by category
  const categorizedItems = useMemo(() => {
    const grouped = {};
    catalogData.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, []);

  const categories = Object.keys(categorizedItems);

  const displayedItems = selectedCategory
    ? categorizedItems[selectedCategory]
    : Object.values(categorizedItems).flat();

  return (
    <div className="home">
      <div className="home-header">
        <h2>Product Catalog</h2>
        <p>Browse through our extensive collection of products across multiple categories</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <button
          className={`filter-btn ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories ({catalogData.length})
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category} ({categorizedItems[category].length})
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {selectedCategory ? (
        <div className="category-section">
          <h3 className="category-title">{selectedCategory}</h3>
          <div className="items-grid">
            {categorizedItems[selectedCategory].map((item, index) => (
              <Link
                to={`/item/${encodeURIComponent(item.itemname)}`}
                key={index}
                className="item-card"
              >
                <div className="item-image-wrapper">
                  <img src={item.image} alt={item.itemname} className="item-image" />
                  <span className="category-badge">{item.category}</span>
                </div>
                <div className="item-info">
                  <h4 className="item-name">{item.itemname}</h4>
                  <p className="item-props-count">
                    {item.itemprops.length} specification{item.itemprops.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="categories-container">
          {categories.map(category => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category}</h3>
              <div className="items-grid">
                {categorizedItems[category].slice(0, 4).map((item, index) => (
                  <Link
                    to={`/item/${encodeURIComponent(item.itemname)}`}
                    key={index}
                    className="item-card"
                  >
                    <div className="item-image-wrapper">
                      <img src={item.image} alt={item.itemname} className="item-image" />
                      <span className="category-badge">{item.category}</span>
                    </div>
                    <div className="item-info">
                      <h4 className="item-name">{item.itemname}</h4>
                      <p className="item-props-count">
                        {item.itemprops.length} specification{item.itemprops.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {categorizedItems[category].length > 4 && (
                <button
                  className="view-more-btn"
                  onClick={() => setSelectedCategory(category)}
                >
                  View All {categorizedItems[category].length} {category}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
