import React, { BaseSyntheticEvent } from "react";
import styled from "styled-components";
import Product from "../../../assets/images/image-product-1.jpg";
import DeleteIcon from "../../../assets/images/icon-delete.svg";

interface CartComponentProps {
  cartValue: number;
  setCartValue: Function;
}

const S = {
  Header: styled.div`
    border-bottom: 1px solid var(--color-secondary-grayish-blue);
  `,
  Cart: styled.div`
    padding: 16px 20px;
  `,
  BodyEmprtCart: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    color: var(--color-secondary-grayish-blue);
  `,
  Body: styled.div`
    padding: 20px;
  `,
  BodyLoaded: styled.div`
    display: flex;
    font-size: 14px;
    color: var(--color-secondary-dark-grayish-blue);
  `,
  ProductImage: styled.img`
    border-radius: 5px;
    margin-right: 15px;
  `,
  ProductDetails: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  Price: styled.span`
    margin-right: 5px;
  `,
  Quantity: styled.span`
    margin-right: 5px;
  `,
  Total: styled.span`
    margin-right: 5px;
    color: var(--color-secondary-very-dark-blue);
    font-weight: 700;
  `,
  Checkout: styled.button`
    background-color: var(--color-primary-orange);
    color: var(--color-white);
    border: none;
    width: 100%;
    padding: 20px 0;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 700;
  `,
  DeleteIcon: styled.div`
    cursor: pointer;
  `,
};

const ModalCart = (props: CartComponentProps) => {
  if (props.cartValue <= 0) {
    return (
      <>
        <S.Header>
          <S.Cart>Cart</S.Cart>
        </S.Header>
        <S.Body>
          <S.BodyEmprtCart>Your cart is empty.</S.BodyEmprtCart>
        </S.Body>
      </>
    );
  } else {
    return (
      <>
        <S.Header>
          <S.Cart>Cart</S.Cart>
        </S.Header>
        <S.Body>
          <S.BodyLoaded>
            <S.ProductImage src={Product} alt="" width={40} height={40} />
            <S.ProductDetails>
              <div>
                <div>Fall Limited Edition Sneakers</div>
                <div>
                  <S.Price>$125.00 X</S.Price>
                  <S.Quantity>{props.cartValue}</S.Quantity>
                  <S.Total>${props.cartValue * 125}.00</S.Total>
                </div>
              </div>
              <S.DeleteIcon>
                <img src={DeleteIcon} onClick={() => props.setCartValue(0)} alt="" />
              </S.DeleteIcon>
            </S.ProductDetails>
          </S.BodyLoaded>

          <S.Checkout>Checkout</S.Checkout>
        </S.Body>
      </>
    );
  }
};

export default ModalCart;
