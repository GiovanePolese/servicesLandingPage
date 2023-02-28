import styled from "styled-components";

export const Wrapper = styled.div`
  .faq__desc.show-description {
    height: 2rem;
    margin-bottom: 15px;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
    color: black;
    padding-top: 10px;
  }
  .attribution a {
    color: gray;
  }

  .component {
    margin: 0 auto;
    max-width: 920px;
    width: 100%;
    background-color: #ffffff;
    background-image: url(../images/bg-pattern-desktop.svg);
    background-position: -565px -295px;
    background-repeat: no-repeat;
    box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
    border-radius: 23px;
    display: flex;
  }


  .faq {
    width: 100%;
    padding-top: 65px;
    padding-bottom: 80px;

    &__title {
      margin: 0;
      padding-bottom: 25px;
    }

    &__question {
      max-width: 350px;
      width: 100%;
      border-bottom: 1px solid blue;
    }

    &__question-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: none;
      background-color: transparent;
      padding: 0px;
      color: black;
      cursor: pointer;

      padding-top: 18px;
      padding-bottom: 18px;

      &::after {
        content: url('/images/arrowDown.svg');
        margin-right: 17px;
        transform: rotate(90deg);
      }

      &:hover {
        color: red;
      }
    }

    &__desc {
      margin-left: -40px;
      padding-right: 17px;
      margin-top: 0;
      margin-bottom: 0;
      height: 0;
      overflow: hidden;
      transition: all 200ms ease-out;
    }
  }

  /* Arrows */

  /* closed */
  .faq__question-button::after {
    transition: transform 300ms ease-out;
  }

  /* open */
  .font-weight-bold::after {
    transform: rotate(0deg);
  }

  .illustration {
    width: 100%;
    position: relative;

    &__box {
      position: absolute;
      z-index: 999;
      top: 200px;
      left: -95px;
    }

    &__woman-desktop {
      position: absolute;
      top: 60px;
      left: -77px;
      clip-path: inset(0px 0px 0px 77px);
    }

    &__woman-mobile {
      display: none;
    }
  }


  @media only screen and (max-width: 800px) {
    .illustration__woman-desktop {
      max-width: 120%;
    }
  }

  @media only screen and (max-width: 700px) {
    .container {
      /* added padding here to mobile container,
      so illustration__woman-desctop would not be cropped at the top */
      padding-top: 105px;
    }

    .component {
      max-width: 327px;
      background-image: url(../images/bg-pattern-mobile.svg);
      background-position: top;
      flex-direction: column;
    }

    .illustration {
      &__box {
        display: none;
      }

      &__woman-desktop {
        display: none;
      }

      &__woman-mobile {
        display: block;
        margin: 0 auto;
        position: absolute;
        top: -105px;
        left: 12px;
      }
    }

    .faq {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 132px;
      padding-bottom: 48px;

      &__question {
        max-width: 279px;
      }

      &__question-button {
        width: 279px;
        font-size: 13px;
        line-height: 13px;

        &::after {
          padding-right: 0px;
        }
      }
    }
  }
`