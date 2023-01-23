import React from "react";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import styled from "styled-components";

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;

    @media screen and (min-width: 770px) {
      margin: 30px 220px 0 220px;
      padding: 0 0 40px 0;
      border-bottom: 1px solid var(--color-secondary-grayish-blue);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,
  NavContainer: styled.div`
    display: flex;
    align-items: center;
  `,
};

interface PropsComponent {
  cartValue: number;
  setCartValue: Function;
}

const Header = ({ cartValue, setCartValue }: PropsComponent) => {
  return (
    <S.Container>
      <S.NavContainer>
        <Navigation />
      </S.NavContainer>
      <div>
        <Profile cartValue={cartValue} setCartValue={setCartValue} />
      </div>
    </S.Container>
  );
};

export default Header;
