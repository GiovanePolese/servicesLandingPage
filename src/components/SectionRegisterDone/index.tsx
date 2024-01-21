import * as S from './styles'

export const SectionRegisterDone = () => {
  return (
    <S.Wrapper id="deposition">
      <div className="container">
        <S.Main>
          <S.Assessments>Cadastro concluído</S.Assessments>
          <S.Text>
            <p>Tudo certo com seu cadastro! Em breve nossa equipe entrará em contato</p>
            <p>para seguir com seu atendimento.</p>
          </S.Text>
        </S.Main>
      </div>
    </S.Wrapper>
  )
}
