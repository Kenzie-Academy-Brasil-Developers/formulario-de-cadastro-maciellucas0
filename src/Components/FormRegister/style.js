import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 80%;
  height: 80vh;
  padding: 15px;

  background-color: var(--color-grey-3);

  margin: auto;

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
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;
