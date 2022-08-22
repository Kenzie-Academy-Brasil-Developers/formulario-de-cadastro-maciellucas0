import styled from "styled-components";

export const LiTechs = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 50px;

  gap: 20px;

  background-color: var(--color-grey-4);

  border-radius: 9px;

  :hover {
    background-color: var(--color-grey-3);
    cursor: pointer;
  }

  h2 {
    position: absolute;
    left: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    color: var(--color-grey-0);
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 700px) {
      max-width: 20ch;
    }
  }

  p {
    position: absolute;
    right: 60px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--color-grey-2);

    @media (min-width: 700px) {
      right: 170px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 15px;
    color: var(--color-grey-0);
    cursor: pointer;
  }
`;
