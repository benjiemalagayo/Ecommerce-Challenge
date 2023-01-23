import React from "react";
import styled from "styled-components";
import MinusIcon from "../../../assets/images/icon-minus.svg";
import PlusIcon from "../../../assets/images/icon-plus.svg";

const S = {
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
    cursor: pointer;
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
    cursor: pointer;
  `,
};

interface PropsQuantity {
  quantity: number;
  setQuantity: Function;
}
const Quantity = (props: PropsQuantity) => {
  const minusHandler = () => {
    props.setQuantity(props.quantity > 0 ? props.quantity - 1 : props.quantity);
  };

  const addHandler = () => {
    props.setQuantity(props.quantity + 1);
  };
  return (
    <div>
      <S.QuantityButtonContainer>
        <S.MinusIconContainer onClick={minusHandler}>
          <img src={MinusIcon} alt="" />
        </S.MinusIconContainer>
        <S.Quantity>{props.quantity}</S.Quantity>
        <S.PlusIconContainer onClick={addHandler}>
          <img src={PlusIcon} alt="" />
        </S.PlusIconContainer>
      </S.QuantityButtonContainer>
    </div>
  );
};

export default Quantity;
