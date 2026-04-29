import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { catalogData } from '../data/catalogData';
import './ItemDetail.css';

function ItemDetail() {
  const { itemname } = useParams();
  const item = catalogData.find(i => i.itemname === decodeURIComponent(itemname));

  if (!item) {
    return (
      <div className="item-detail">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>Sorry, the product you're looking for doesn't exist.</p>
          <Link to="/" className="back-btn">Go Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const relatedItems = catalogData
    .filter(i => i.category === item.category && i.itemname !== item.itemname)
    .slice(0, 3);

  return (
    <div className="item-detail">
      <Link to="/" className="back-btn-icon">
        ← Back to Catalog
      </Link>

      <div className="detail-container">
        {/* Main Content */}
        <div className="detail-content">
          {/* Image Section */}
          <div className="image-section">
            <div className="image-container">
              <img src={item.image} alt={item.itemname} className="detail-image" />
            </div>
          </div>

          {/* Info Section */}
          <div className="info-section">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/" onClick={() => window.location.href = '/?category=' + item.category}>
                {item.category}
              </Link>
              <span>/</span>
              <span className="current">{item.itemname}</span>
            </div>

            <h1 className="item-title">{item.itemname}</h1>

            <div className="category-info">
              <span className="category-label">Category:</span>
              <span className="category-value">{item.category}</span>
            </div>

            {/* Dynamic Specifications */}
            <div className="specifications-section">
              <h2>Specifications</h2>
              <div className="specs-grid">
                {item.itemprops.map((prop, index) => (
                  <div key={index} className="spec-item">
                    <div className="spec-label">{prop.label}</div>
                    <div className="spec-value">{prop.value}</div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Related Items Section */}
        {relatedItems.length > 0 && (
          <div className="related-section">
            <h3>Related {item.category}</h3>
            <div className="related-items">
              {relatedItems.map((relatedItem, index) => (
                <Link
                  to={`/item/${encodeURIComponent(relatedItem.itemname)}`}
                  key={index}
                  className="related-card"
                >
                  <img src={relatedItem.image} alt={relatedItem.itemname} />
                  <h4>{relatedItem.itemname}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
