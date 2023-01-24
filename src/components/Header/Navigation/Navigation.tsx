import React, { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/icon-menu.svg";
import CloseIcon from "../../../assets/images/icon-close.svg";

const S = {
  NavContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  MenuIcon: styled.img`
    cursor: pointer;

    @media screen and (min-width: 770px) {
      display: none;
    }
  `,
  Logo: styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;

    @media screen and (min-width: 770px) {
      margin-right: 20px;
      margin-left: 0;
    }
  `,
  SidebarModal: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  `,
  SideNavbar: styled.div`
    height: 100vh;
    width: 70%;
    background-color: white;
    padding: 20px;
  `,
  MenuContainer: styled.ul`
    margin-top: 40px;

    @media screen and (min-width: 770px) {
      margin-top: 0;
    }
  `,
  MenuList: styled.li`
    margin-top: 20px;
    font-weight: bold;

    @media screen and (min-width: 770px) {
      margin-top: 0;
      margin-right: 20px;
      font-weight: normal;
      position: relative;
      cursor: pointer;

      color: var(--color-secondary-dark-grayish-blue);
      transition: 0.3s;
      &::after {
        content: "";
        position: absolute;
        background-color: var(--color-primary-orange);
        width: 0;
        height: 3px;
        left: 0;
        bottom: -51px;
        transition: 0.3s;
      }
      &:hover {
        color: var(--color-secondary-very-dark-blue);
      }
      &:hover::after {
        width: 100%;
      }
    }
  `,

  DesktopNavigationMenu: styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 770px) {
      display: none;
    }
  `,
};

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navMenu = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <>
      <S.NavContainer>
        {/* Mobile */}
        <S.MenuIcon
          onClick={() => {
            setShowNavbar(true);
          }}
          src={MenuIcon}
          alt=""
          width={20}
          height={20}
        />
        <S.Logo>sneakers</S.Logo>

        {/* Desktop */}
        <S.DesktopNavigationMenu>
          {navMenu.map((menu, key) => {
            return <S.MenuList key={key}>{menu}</S.MenuList>;
          })}
        </S.DesktopNavigationMenu>
      </S.NavContainer>

      {/* Sidebar Modal */}
      {showNavbar && (
        <S.SidebarModal
          onClick={() => {
            setShowNavbar(false);
          }}
        >
          <S.SideNavbar
            onClick={(e: Event | BaseSyntheticEvent) => {
              e.stopPropagation();
            }}
          >
            <img
              onClick={() => {
                setShowNavbar(false);
              }}
              src={CloseIcon}
              alt=""
            />
            <S.MenuContainer>
              {navMenu.map((menu, key) => {
                return <S.MenuList key={key}>{menu}</S.MenuList>;
              })}
            </S.MenuContainer>
          </S.SideNavbar>
        </S.SidebarModal>
      )}
    </>
  );
};

export default Navigation;
