import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: pulse 1.5s infinite;
  button {
    background-color: #5d5dff;
    font-size: 18px;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 15px 77px 15px 77px;
    cursor: pointer;
    transition: background-color 0.3s;
    -webkit-animation: pulse 1.5s infinite;
  }

  button:hover {
    background-color: #10107c;
    -webkit-animation: none;
  }

  @-webkit-keyframes pulse {
    0% {
      @include transform(scale(0.9));
    }
    70% {
      @include transform(scale(1));
      box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
    }
    100% {
      @include transform(scale(0.9));
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
    }
  }
`
