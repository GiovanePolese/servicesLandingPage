import { Button } from "../Button"
import * as S from "./styles"

export const ModalForm = () => {
  return (
    <S.Wrapper>
      <S.Main>
        <p>Digite as informações abaixo</p>
        <S.Form>
          <form action="" method="post">
            <input type="text" placeholder="Nome Completo*"/>
            <input type="email" name="" id="" placeholder="Seu e-mail*" />
            <input type="tel" name="" id="" placeholder="Whatsapp com DDD*"/>
            <Button  text="Enviar"/>
            
          </form>
        </S.Form>
        
      </S.Main>
    </S.Wrapper>
  )
}