import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 31.95px;

  margin: auto;
  margin-top: 50px;

  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 97.59px;
    height: 16.9px;
    display: flex;
  }

  a {
    background: var(--color-grey-3);
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Inter";
    text-decoration: none;

    border-radius: 4px;
    border: none;

    width: 79.54px;
    height: 31.95px;

    color: var(--color-grey-0);

    cursor: pointer;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 90px;

  margin-top: 30px;
  border-bottom: 0.5px solid var(--color-grey-1);
  border-top: 0.5px solid var(--color-grey-1);

  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
    margin-left: 5%;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    margin-right: 5%;
    color: var(--color-grey-1);
  }

  @media (min-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      margin-left: 22.8%;
    }

    p {
      margin-right: 22.8%;
    }
  }
`;
export const Div = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }

  button {
    background-color: var(--color-grey-3);
    border: none;
    border-radius: 5px;

    width: 30px;
    height: 30px;

    cursor: pointer;

    color: var(--color-grey-1);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 550px) {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    p {
      width: 80%;
      text-align: center;
    }
  }
`;
