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
      margin: 80px 280px 0 280px;
    }
  `,
  ProductDetailsContainer: styled.div`
    padding: 20px;

    @media screen and (min-width: 770px) {
      padding: 50px 80px;
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
    background-color: var(--color-primary-orange);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 16px 0;
    border-radius: 5px;
    margin-top: 16px;
    margin-left: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    & > svg {
      stroke: red;
    }

    @media screen and (min-width: 770px) {
      margin-top: 0;
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
      <Products />
      <S.ProductDetailsContainer>
        <ProductDetails quantity={quantity} setQuantity={setQuantity} />
        <S.QuantityAndAddCartButton>
          <S.QuantityContainer>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </S.QuantityContainer>
          <S.AddToCartButton onClick={addToCart}>
            <img src={CartIcon} alt="" width={18} height={18} />
            <span>Add to cart</span>
          </S.AddToCartButton>
        </S.QuantityAndAddCartButton>
      </S.ProductDetailsContainer>
    </S.ProductContainer>
  );
};

export default Product;
