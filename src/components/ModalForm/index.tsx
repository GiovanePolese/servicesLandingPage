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
        <div className="container">
          <S.Main>
            <p>
              <strong>Digite as informações</strong> abaixo e dê o primeiro
              passo para <strong>alavancar seu negócio</strong>
            </p>
            <S.Form>
              <form action="" method="post">
                <input type="text" placeholder="Nome Completo*" required />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Seu e-mail*"
                  required
                />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Whatsapp com DDD*"
                  required
                />
                <Button
                  text="Enviar"
                  color="secondary"
                  hoverColor="secondaryDark"
                />
              </form>
            </S.Form>
          </S.Main>
          <img
            src="../../../public/images/close.png"
            alt="botão de fechar"
            onClick={() => setModalsContextOpen((current) => !current)}
          />
        </div>
      </S.Wrapper>
    </>
  )
}
