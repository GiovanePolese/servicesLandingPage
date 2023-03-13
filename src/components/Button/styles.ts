import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: #5D5DFF;
    font-size: 18px;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 15px 77px 15px 77px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #10107c;
  }

`