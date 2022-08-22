import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 500px;
  margin: auto;
  margin-top: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    width: 370px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 402.69px;
  padding: 15px;

  background-color: var(--color-grey-3);

  margin: auto;
  margin-top: 39px;

  border-radius: 5px;

  h1 {
    margin-top: 20px;
    text-align: center;

    font-family: "Inter";
    color: var(--color-grey-0);
    font-weight: 700;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-grey-0);

    border: none;
    border-radius: 5px;

    height: 38.38px;

    margin-top: 25px;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  div {
    margin-top: 30px;

    p {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 10px;

      color: var(--color-grey-1);
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Inter";
      text-decoration: none;
      background-color: var(--color-grey-1);

      width: 100%;

      color: var(--color-grey-0);

      border: none;
      border-radius: 5px;

      height: 38.38px;
      margin-top: 25px;
    }

    a:hover {
      background-color: var(--color-grey-2);
    }
  }
`;

export const DivInput = styled.div`
  position: relative;
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

  button {
    background-color: transparent;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 5%;
  }

  button:hover {
    background-color: transparent;
  }

  span {
    font-family: "Inter";
    font-size: 0.8rem;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    margin-top: 3px;
    color: rgba(255, 0, 43, 0.79);
  }
`;
