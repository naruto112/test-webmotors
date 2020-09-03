import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  @media screen and (min-width: 943px) {
    background: #eb0c29;
    height: 56px;
    border-radius: 4px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#eb0c29")};
    }
  }

  @media screen and (max-width: 943px) {
    background: #eb0c29;
    height: 56px;
    border-radius: 4px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100% !important;
    margin-left: 0px !important;
    margin-bottom: 20px;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#eb0c29")};
    }
  }
`;
