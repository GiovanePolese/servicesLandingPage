import * as S from './styles'

export interface ButtonProps {
  buttonId?: string;
  text: string;
  textColor?: string;
  color?: string;
  hoverColor?: string;
  width?: string;
  onClick?: (e: any) => void;
}

export const Button = ({
  buttonId,
  onClick,
  text,
  textColor,
  color,
  width,
  hoverColor,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      textColor={textColor}
      hoverColor={hoverColor}
      color={color}
      width={width}
      text={text}
    >
      <button id={buttonId}>{text.toUpperCase()}</button>
    </S.Button>
  )
}
