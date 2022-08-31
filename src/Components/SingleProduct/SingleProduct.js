import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { setCartCount } = props;
  const { title, image } = props.product;
  return (
    <div data-aos="fade-left" className="col-md-4">
      <div className="card p-2 border">
        <h1>{title.slice(0, 10)}</h1>
        <img className="w-50 m-auto" src={image} alt="" />
        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success">
            Add to cart
          </button>
          <ReactModal product={props.product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
