import React, { useState } from "react";
import Products from "./Products/Products";
import styled from "styled-components";
import ProductDetails from "./ProductDetails/ProductDetails";
import Quantity from "./Quantity/Quantity";
import CartIcon from "../../assets/images/icon-cart.svg";

const S = {
  ProductContainer: styled.div`
    @media screen and (min-width: 770px) {
      display: flex;
      margin: 50px 70px 0 70px;
      gap: 50px;
    }
  `,
  Products: styled.div`
    @media screen and (min-width: 770px) {
      width: 40%;
    }
  `,
  ProductDetailsContainer: styled.div`
    padding: 20px;

    @media screen and (min-width: 770px) {
      width: 50%;
      margin-top: 50px;
    }
  `,
  QuantityAndAddCartButton: styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 770px) {
      flex-direction: column;
    }
  `,
  QuantityContainer: styled.div`
    width: 100%;

    @media screen and (min-width: 770px) {
      width: 40%;
    }
  `,
  AddToCartButton: styled.button`
    font-weight: 700;
    background-color: var(--color-primary-orange);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 16px 0;
    border-radius: 10px;
    margin-top: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    /* box-shadow: var(--color-primary-orange) 0px 5px 10px -10px; */
    &:hover {
      opacity: 0.5;
    }

    @media screen and (min-width: 770px) {
      margin-top: 0;
      margin-left: 20px;
      width: 50%;
    }
  `,
};

interface PropsCartValue {
  setCartValue: Function;
}

const Product = (props: PropsCartValue) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    if (quantity == 0) {
      alert("empty");
      return;
    }
    props.setCartValue((value: number) => value + quantity);
    console.log(quantity);
  };

  return (
    <S.ProductContainer>
      <S.Products>
        <Products />
      </S.Products>
      <S.ProductDetailsContainer>
        <ProductDetails quantity={quantity} setQuantity={setQuantity} />
        <S.QuantityAndAddCartButton>
          <S.QuantityContainer>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </S.QuantityContainer>
          <S.AddToCartButton onClick={addToCart}>
            <div>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <span>Add to cart</span>
          </S.AddToCartButton>
        </S.QuantityAndAddCartButton>
      </S.ProductDetailsContainer>
    </S.ProductContainer>
  );
};

export default Product;
