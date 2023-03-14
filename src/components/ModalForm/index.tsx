import { useContext } from 'react'
import { ModalsContext } from '../../contexts/ModalsContext'
import { Button } from '../Button'
import * as S from './styles'

export const ModalForm = () => {
  const { setModalsContextOpen } = useContext(ModalsContext)
  return (
    <>
      <S.Dropback onClick={() => setModalsContextOpen((current) => !current)} />
      <S.Wrapper>
        <S.Main>
          <p>Digite as informações abaixo</p>
          <S.Form>
            <form action="" method="post">
              <input type="text" placeholder="Nome Completo*" />
              <input type="email" name="" id="" placeholder="Seu e-mail*" />
              <input type="tel" name="" id="" placeholder="Whatsapp com DDD*" />
              <Button text="Enviar" />
            </form>
          </S.Form>
        </S.Main>
        <img
          src="../../../public/images/close.png"
          alt="close"
          onClick={() => setModalsContextOpen((current) => !current)}
        />
      </S.Wrapper>
    </>
  )
}
