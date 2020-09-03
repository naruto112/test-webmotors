import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 943px) {
    background: #fff;
    border-radius: 2px;
    padding: 12px;

    border: 2px solid #b5b5b5;
    color: #312e38;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    span {
      display: flex;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
    }

    svg {
      color: #eb0c29;
    }

    input {
      flex: 1;
      background: transparent;
      font-weight: bold;
      border: 0;
      color: #312e38;

      &::placeholder {
        color: #312e38;
      }
    }

    select {
      flex: 1;
      background: transparent;
      font-weight: bold;
      font-size: 14px;
      width: 100%;
      text-overflow: ellipsis;
      border: 0;
      color: #312e38;
    }
  }

  @media screen and (max-width: 943px) {
    background: #fff;
    border-radius: 2px;
    padding: 12px;
    margin-bottom: 10px;

    border: 2px solid #b5b5b5;
    color: #312e38;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    span {
      display: flex;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 12px;
    }

    svg {
      color: #eb0c29;
    }

    input {
      flex: 1;
      background: transparent;
      font-weight: bold;
      border: 0;
      color: #312e38;

      &::placeholder {
        color: #312e38;
      }
    }

    select {
      flex: 1;
      background: transparent;
      font-weight: bold;
      font-size: 14px;
      width: 100px;
      text-overflow: ellipsis;
      border: 0;
      color: #312e38;
    }
  }
`;
