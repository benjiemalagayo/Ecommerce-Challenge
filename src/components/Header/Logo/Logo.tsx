import React from 'react'
import styled from 'styled-components'

const S = {
    Logo: styled.div`
        margin-left: 16px;
        font-weight: bold;
        font-size: 40px;
    `
}

const Logo = () => {
  return (
    <S.Logo>sneakers</S.Logo>
  )
}

export default Logo