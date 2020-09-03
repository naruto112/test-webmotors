import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  @media screen and (min-width: 943px) {
    width: 933px;
  }

  @media screen and (min-width: 943px) {
    header {
      margin-top: 80px;
      margin-bottom: 50px;
      width: 100%;
      img {
        width: 220px;
      }
    }

    main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      img {
        width: 30px;
      }

      div {
        display: flex;
        align-items: center;

        img {
          margin: 10px;
        }

        span {
          font-size: 22px;
        }

        div:last-child {
          margin-left: 10px;
        }
      }

      button {
        background: transparent;
        padding: 8px 30px;
        border: 2px solid #d6c25d;
        font-weight: 550;
        color: #d6c25d;
        border-radius: 3px;
      }
    }
  }

  @media screen and (max-width: 943px) {
    header {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 10px;
      width: 100%;
      img {
        width: 300px;
      }
    }

    main {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      img {
        width: 30px;
      }

      div {
        display: flex;
        align-items: center;

        img {
          margin: 10px;
        }

        span {
          font-size: 12px;
        }

        div:last-child {
          margin-left: 10px;
        }
      }

      button {
        width: 80%;
        background: transparent;
        padding: 8px 30px;
        border: 2px solid #d6c25d;
        font-weight: 550;
        color: #d6c25d;
        border-radius: 3px;
      }
    }
  }
`;

export const Filterbox = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    padding: 34px;
  }

  @media screen and (max-width: 943px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
`;

export const SelectState = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    padding-bottom: 20px;
    width: 100%;
    align-items: center;

    input {
      color: #fff;
      text-align: center;
      background: #a0a0a0;
    }

    span {
      margin-left: 10px;
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 943px) {
    display: flex;
    padding-bottom: 20px;
    width: 100%;
    align-items: center;

    input {
      color: #fff;
      text-align: center;
      background: #a0a0a0;
    }

    span {
      margin-left: 10px;
      margin-right: 30px;
    }
  }
`;

export const FilterCarInit = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    width: 100%;
    margin-bottom: 20px;

    .left-field {
      width: 50%;
      margin-right: 35px;
    }

    .right-field-make {
      width: 100%;
      margin-right: 10px;
    }

    .right-field-models {
      width: 100%;
    }
  }
`;
export const FilterCarLast = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    width: 100%;
    margin-bottom: 20px;

    .left-field-year {
      width: 35%;
      margin-right: 10px;
    }

    .left-field-price {
      width: 37%;
      margin-right: 35px;
    }

    .right-field-version {
      width: 100%;
    }
  }
`;

export const FooterBox = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
  }
`;

export const ButtonFilter = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    align-items: baseline;
    width: auto;
    height: auto;
  }
`;

export const FilterClean = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    width: auto;
    height: auto;
    margin-left: 40px;

    span {
      cursor: pointer;
      color: #b7b0b0;
      font-weight: 600;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 943px) {
    display: flex;
    flex-direction: row;

    span {
      cursor: pointer;
      color: #b7b0b0;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const FilterAdvanced = styled.div`
  @media screen and (min-width: 943px) {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #eb0c29;
    width: 400px;
    margin-top: 20px;

    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 943px) {
    display: flex;
    align-items: center;
    font-weight: 700;
    width: auto;
    color: #eb0c29;
    width: 200px;

    span {
      font-size: 14px;
    }
  }
`;
