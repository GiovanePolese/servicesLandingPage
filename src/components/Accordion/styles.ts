import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  .faq__desc.show-description {
    height: fit-content;
    margin-bottom: 25px;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
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
      font-size: ${(props) => props.theme.fonts.size.xxlarge};
      color: ${(props) => props.theme.colors.primary};
      font-weight: 800;
      text-align: center;
    }

    &__question {
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    }

    &__question-button {
      width: 100%;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      padding: 18px 0;
      color: ${(props) => props.theme.colors.primary};
      text-align: left;
      cursor: pointer;

      &::before {
        content: url('/images/arrow.svg');
      }

      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }

      p {
        margin-left: 15px;
        font-size: ${(props) => props.theme.fonts.size.large};
        color: ${(props) => props.theme.colors.primary};

        @media (max-width: 768px) {
          font-size: ${(props) => props.theme.fonts.size.medium};
        }
      }
    }

    &__desc {
      font-size: ${(props) => props.theme.fonts.size.small};
      color: ${(props) => props.theme.colors.primary};
      margin-left: 60px;
      padding-right: 17px;
      margin-bottom: 0;
      height: 0;
      overflow: hidden;
      transition: all 300ms ease-out;
    }
  }

  /* Arrows */

  /* closed */
  .faq__question-button::before {
    transition: transform 300ms ease-out;
  }

  /* open */
  .font-weight-bold::before {
    transform: rotate(90deg);
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

  @media (max-width: 800px) {
    .illustration__woman-desktop {
      max-width: 120%;
    }
  }

  @media (max-width: 700px) {
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

      padding-bottom: 48px;

      &__question-button {
        &::after {
          padding-right: 0px;
        }
      }
    }
  }
`
