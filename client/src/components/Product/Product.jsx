import './Product.css';

const Product = ({ img, name, price, desc }) => {
  return (
    <div className="Product">
      <img src={img} alt="" className="product-image" />
      <h3 className="product-name">{name}</h3>
      <span className="product-price">Giá: {price} VNĐ</span>
      <p className="product-desc">{desc}</p>

      <button className="product-add-btn">Add to cart</button>
    </div>
  );
};

export default Product;
