import React, { useState } from "react";
import Product1 from "../../../assets/images/image-product-1.jpg";
import Product2 from "../../../assets/images/image-product-2.jpg";
import Product3 from "../../../assets/images/image-product-3.jpg";
import Product4 from "../../../assets/images/image-product-4.jpg";
import styled from "styled-components";
import PrevIcon from "../../../assets/images/icon-previous.svg";
import NextIcon from "../../../assets/images/icon-next.svg";
import CloseIcon from "../../../assets/images/icon-close.svg";

interface Props {
  product: any;
  currentProduct: any;
}

const S = {
  Product: styled.div`
    position: relative;
  `,
  ProductImage: styled.img`
    width: 100%;
    height: 0 auto;
    cursor: pointer;
    @media screen and (min-width: 770px) {
      height: 400px;
      border-radius: 15px;
    }
  `,
  PrevButton: styled.img`
    position: absolute;
    top: 220px;
    left: 20px;
    background-color: var(--color-white);
    padding: 15px 18px;
    border-radius: 50px;

    @media screen and (min-width: 770px) {
      display: none;
    }
  `,
  NextButton: styled.img`
    position: absolute;
    top: 220px;
    right: 20px;
    background-color: var(--color-white);
    padding: 15px 18px;
    border-radius: 50px;

    @media screen and (min-width: 770px) {
      display: none;
    }
  `,
  ThumbnailContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 770px) {
      display: none;
    }
  `,
  ThumbnailImage: styled.img<Props>`
    margin-top: 20px;
    width: 100%;
    height: 0 auto;
    border-radius: 15px;
    cursor: pointer;
    opacity: ${(props) => (props.product === props.currentProduct ? "0.5" : "1")};
    border: ${(props) => props.product === props.currentProduct && "2px solid var(--color-primary-orange)"};
  `,

  // LightBox/Overlay
  LighBoxContainer: styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  `,
  LightBoxProduct: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  LightBoxProductImage: styled.img`
    width: 100%;
    height: 0 auto;
    cursor: pointer;
    height: 400px;
    border-radius: 15px;
  `,
  LightBoxThumbnailImage: styled.img<Props>`
    margin-top: 20px;
    margin-right: 10px;
    height: 80px;
    width: 80px;
    border-radius: 15px;
    cursor: pointer;
    opacity: ${(props) => (props.product === props.currentProduct ? "0.5" : "1")};
    border: ${(props) => props.product === props.currentProduct && "2px solid var(--color-primary-orange)"};
  `,
  CloseIcon: styled.img`
    position: absolute;
    top: -40px;
    right: 30px;
    cursor: pointer;
  `,
  LightBoxNextButton: styled.img`
    position: absolute;
    top: 40%;
    right: -25px;
    background-color: var(--color-white);
    padding: 15px 18px;
    border-radius: 50px;
    cursor: pointer;
  `,
  LightBoxPrevButton: styled.img`
    position: absolute;
    top: 40%;
    left: -20px;
    background-color: var(--color-white);
    padding: 15px 18px;
    border-radius: 50px;
    cursor: pointer;
  `,
};

const Products = () => {
  const [index, setIndex] = useState(0);
  const allProducts = [Product1, Product2, Product3, Product4];
  const [currentProduct, setCurrentProduct] = useState(allProducts[index]);
  const [showLightBox, setShowLightBox] = useState(false);

  const prevHandler = () => {
    setIndex(index > 0 ? index - 1 : index);
    setCurrentProduct(allProducts[index]);
  };

  const nextHandler = () => {
    setIndex(index < 3 ? index + 1 : index);
    setCurrentProduct(allProducts[index]);
  };

  console.log(currentProduct);
  console.log(index);

  return (
    <>
      <div>
        <S.ProductImage
          src={currentProduct}
          onClick={() => {
            setShowLightBox(true);
          }}
          // width={375}
          // height={300}
        />

        {/* LightBox Product */}
        {showLightBox && (
          <S.LighBoxContainer>
            <S.LightBoxProduct>
              <S.CloseIcon onClick={() => setShowLightBox(false)} src={CloseIcon} alt="" width={25} height={25} />
              <S.LightBoxProductImage src={currentProduct} width={375} height={300} />
              <S.LightBoxPrevButton onClick={prevHandler} src={PrevIcon} alt="" />
              <S.LightBoxNextButton onClick={nextHandler} src={NextIcon} alt="" />
              <S.ThumbnailContainer>
                {allProducts.map((product, key: any) => {
                  return (
                    <div key={key}>
                      <S.LightBoxThumbnailImage
                        onClick={() => setCurrentProduct(product)}
                        src={product}
                        alt=""
                        product={product}
                        currentProduct={currentProduct}
                      />
                    </div>
                  );
                })}
              </S.ThumbnailContainer>
            </S.LightBoxProduct>
          </S.LighBoxContainer>
        )}

        <S.PrevButton onClick={prevHandler} src={PrevIcon} alt="" />
        <S.NextButton onClick={nextHandler} src={NextIcon} alt="" />

        <S.ThumbnailContainer>
          {allProducts.map((product, key: any) => {
            return (
              <div key={key}>
                <S.ThumbnailImage
                  onClick={() => setCurrentProduct(product)}
                  src={product}
                  width={80}
                  height={80}
                  alt=""
                  product={product}
                  currentProduct={currentProduct}
                />
              </div>
            );
          })}
        </S.ThumbnailContainer>
      </div>
    </>
  );
};

export default Products;
