import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: 1;

  div {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-2);
    padding: 20px 20px;

    @media (min-width: 710px) {
      width: 369px;
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 24px;

      color: var(--color-grey-0);
    }

    button {
      background-color: var(--color-grey-2);
      border: none;
      border-radius: 5px;

      color: var(--color-grey-0);
      cursor: pointer;
    }
    button:hover {
      background-color: var(--color-grey-3);
    }
  }

  form {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;

    background-color: var(--color-grey-3);

    padding: 20px;

    @media (min-width: 710px) {
      width: 369px;
    }

    span {
      color: red;
    }

    label {
      color: var(--color-grey-0);
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;

      margin-top: 10px;
    }

    input {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 16.2426px;
      gap: 10.15px;
      color: var(--color-grey-1);

      background: var(--color-grey-2);

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
    }

    select {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 16.2426px;
      gap: 10.15px;

      background: var(--color-grey-2);

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      color: var(--color-grey-1);
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 22.3336px;

      background: var(--color-primary);

      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;

      cursor: pointer;
      color: var(--color-grey-0);

      margin-top: 20px;
    }
  }
`;
