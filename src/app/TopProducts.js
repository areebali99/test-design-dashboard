import React from 'react';
import './TopProducts.css';

const TopProducts = ({ style = {} }) => {
  const productData = [
    {
      id: '01',
      name: 'Home Decor Range',
      popularity: 0.45,
      sales: '45%',
      color: '#0095ff',
      bgColor: '#f0f9ff'
    },
    {
      id: '02', 
      name: 'Disney Princess Pink Bag 18\'',
      popularity: 0.29,
      sales: '29%',
      color: '#00e58f',
      bgColor: '#f0fdf4'
    },
    {
      id: '03',
      name: 'Bathroom Essentials',
      popularity: 0.18,
      sales: '18%',
      color: '#884dff',
      bgColor: '#fbf1ff'
    },
    {
      id: '04',
      name: 'Apple Smartwatches',
      popularity: 0.25,
      sales: '25%',
      color: '#ff8900',
      bgColor: '#fef6e6'
    }
  ];

  return (
    <div className="top-products" style={style}>
      <h2 className="title">Top Products</h2>
      
      <div className="header">
        <span className="header-item">#</span>
        <span className="header-item">Name</span>
        <span className="header-item">Popularity</span>
        <span className="header-item">Sales</span>
      </div>

      <div className="products-list">
        {productData.map((product) => (
          <div key={product.id} className="product-row">
            <span className="product-id">{product.id}</span>
            <span className="product-name">{product.name}</span>
            <div className="popularity-bar">
              <div 
                className="popularity-fill"
                style={{
                  width: `${product.popularity * 100}%`,
                  backgroundColor: product.color
                }}
              />
            </div>
            <div 
              className="sales-badge"
              style={{
                color: product.color,
                backgroundColor: product.bgColor,
                border: `1px solid ${product.color}`
              }}
            >
              {product.sales}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

