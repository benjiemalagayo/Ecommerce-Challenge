import React, { useState } from "react";
import Cart from "../../../assets/images/icon-cart.svg";
import MyProfile from "../../../assets/images/image-avatar.png";
import styled from "styled-components";
// import ModalCart from '../ModalCart/ModalCart'
import ModalCart from "../ModalCart/ModalCart";

interface Props {
  cartValue: number;
}

const S = {
  Container: styled.div`
    /* position: relative; */
    display: flex;
    align-items: center;
  `,
  CartContainer: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  `,
  Cart: styled.img`
    margin-right: 20px;
  `,
  ProfileImg: styled.img`
    border-radius: 50px;
    cursor: pointer;
    &:active {
      border: 1px solid var(--color-primary-orange);
    }
  `,
  ModalContainer: styled.div`
    position: absolute;
    background-color: var(--color-white);
    left: 8px;
    top: 90px;
    width: 95%;
    height: 32%;
    border-radius: 5px;
    z-index: 100;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (min-width: 770px) {
      width: 23%;
      height: 28%;
      top: 100px;
      left: 1000px;
    }
  `,
  NotifQuantity: styled.span<Props>`
    background: ${(props) => props.cartValue !== 0 && "var(--color-primary-orange)"};
    color: white;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: 40%;
    top: -40%;
    pointer-events: none;
    z-index: 100;
  `,
};

interface PropsCartQuantity {
  cartValue: number;
  setCartValue: Function;
}

const Profile = ({ cartValue, setCartValue }: PropsCartQuantity) => {
  const [showModal, setShowModal] = useState(false);

  const modalCartHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Container>
      <S.CartContainer>
        <S.Cart onClick={modalCartHandler} src={Cart} alt="" />

        <S.NotifQuantity cartValue={cartValue}>{cartValue !== 0 && cartValue}</S.NotifQuantity>
      </S.CartContainer>
      <S.ProfileImg onClick={modalCartHandler} src={MyProfile} alt="" width={30} height={30} />

      {showModal && (
        <S.ModalContainer>
          <ModalCart cartValue={cartValue} setCartValue={setCartValue} />
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default Profile;
