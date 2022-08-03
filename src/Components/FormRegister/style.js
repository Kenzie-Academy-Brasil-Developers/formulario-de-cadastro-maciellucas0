import styled from "styled-components";

export const Navigation = styled.nav`
  width: 80%;
  height: 31.95px;

  margin: auto;
  margin-top: 50px;

  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  @media (min-width: 800px) {
    width: 370px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 80%;
  padding: 15px;

  background-color: var(--color-grey-3);

  margin: auto;
  margin-top: 39px;

  border-radius: 5px;

  h1 {
    width: auto;
    font-family: "Inter";
    font-weight: 700;
    color: var(--color-grey-0);
    display: flex;
    justify-content: center;
  }

  span {
    color: var(--color-grey-1);
    font-family: "Inter";
    font-size: 0.8rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

  button {
    background-color: var(--color-primary-negative);
    color: var(--color-grey-0);

    border: none;
    border-radius: 5px;

    height: 38.38px;

    margin-top: 35px;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 800px) {
    width: 370px;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    font-family: "Inter";
    color: var(--color-grey-0);
    font-size: 10px;
  }

  input {
    background-color: var(--color-grey-2);

    border: none;
    border-radius: 5px;
    padding: 0px 12.9865px;

    height: 38.38px;

    margin-top: 10px;

    color: white;
  }

  select {
    background-color: var(--color-grey-2);

    border: none;
    border-radius: 5px;
    padding: 0px 12.9865px;

    height: 38.38px;

    margin-top: 10px;
    color: var(--color-grey-1);
  }
`;
