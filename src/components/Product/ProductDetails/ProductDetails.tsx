import React from "react";
import styled from "styled-components";
import MinusIcon from "../../../assets/images/icon-minus.svg";
import PlusIcon from "../../../assets/images/icon-plus.svg";

const S = {
  Company: styled.div`
    color: var(--color-primary-orange);
    font-weight: 700;
  `,
  Title: styled.h1`
    margin: 16px 0;
  `,
  Details: styled.p`
    color: var(--color-secondary-grayish-blue);
  `,
  Price: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;

    @media screen and (min-width: 770px) {
      flex-direction: column;
      align-items: start;
    }
  `,
  CurrentPrice: styled.span`
    font-weight: 700;
    font-size: 25px;
    margin-right: 12px;
  `,
  Sale: styled.span`
    color: var(--color-primary-orange);
    background-color: var(--color-primary-pale-orange);
  `,
  BeforePrice: styled.span`
    text-decoration: line-through;
    color: var(--color-secondary-grayish-blue);
  `,
  QuantityButtonContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  MinusIconContainer: styled.div`
    background-color: var(--color-secondary-light-grayish-blue);
    width: 25%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: center;
    padding: 10px 0;
  `,
  Quantity: styled.div`
    background-color: var(--color-secondary-light-grayish-blue);
    text-align: center;
    width: 50%;
    padding: 10px 0;
  `,
  PlusIconContainer: styled.div`
    background-color: var(--color-secondary-light-grayish-blue);
    width: 25%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    padding: 10px 0;
  `,
};

interface PropsQuantity {
  quantity: number;
  setQuantity: Function;
}

const ProductDetails = (props: PropsQuantity) => {
  const minusHandler = () => {
    props.setQuantity(props.quantity > 0 ? props.quantity - 1 : props.quantity);
  };

  const addHandler = () => {
    props.setQuantity(props.quantity + 1);
  };
  return (
    <div>
      <S.Company>Sneaker Comany</S.Company>
      <S.Title>Fall Limited Edition Sneakers</S.Title>
      <S.Details>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </S.Details>
      <S.Price>
        <div>
          <S.CurrentPrice>$125.00</S.CurrentPrice>
          <S.Sale>50%</S.Sale>
        </div>

        <S.BeforePrice>$250.00</S.BeforePrice>
      </S.Price>
      {/* <S.QuantityButtonContainer>
        <S.MinusIconContainer onClick={minusHandler}>
          <img src={MinusIcon} alt="" />
        </S.MinusIconContainer>
        <S.Quantity>{props.quantity}</S.Quantity>
        <S.PlusIconContainer onClick={addHandler}>
          <img src={PlusIcon} alt="" />
        </S.PlusIconContainer>
      </S.QuantityButtonContainer> */}
    </div>
  );
};

export default ProductDetails;
