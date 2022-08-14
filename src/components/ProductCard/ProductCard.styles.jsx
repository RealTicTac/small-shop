import styled from "styled-components/macro";

import { GoogleSignIn, Base, Inverted } from "../Button/Button.styles";

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${GoogleSignIn},
    ${Base},
		${Inverted} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
