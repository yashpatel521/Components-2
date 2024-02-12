
const productCard = () => {
  return 
    <div className="product-card">
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button>Add to Cart</button>
    </div>
  );
};



function ProductCardContainer() {
    return (
        <h1>Discover Your Favorites</h1>
    )
}

export ProductCardContainer