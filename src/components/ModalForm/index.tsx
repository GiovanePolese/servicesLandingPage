import { useContext, useState } from 'react'
import { ModalsContext } from '../../contexts/ModalsContext'
import { Button } from '../Button'
import * as S from './styles'
import axios from 'axios'

export const ModalForm = () => {
  const { setModalsContextOpen } = useContext(ModalsContext)
  const [responseData, setResponseData] = useState(null);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('Submit')
    e.preventDefault();

    const url = 'https://audiovisual.fly.dev/forms';
    const data = {
      full_name: name,
      email: email,
      mobile: mobile,
      lead_source: 'campaign1',
      lead_source_details: 'www.poleseaudiovisual.com.br',
    };

    axios.post(url, data)
      .then(response => {
        setResponseData(response.data);
        console.log(responseData);
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
  }

  return (
    <>
      <S.Dropback onClick={() => setModalsContextOpen((current) => !current)} />
      <S.Wrapper>
        <div className="container">
          <S.Main>
            <p>
              <strong>Digite as informações abaixo</strong> e dê o primeiro
              passo para <strong>construir sua imagem</strong>
            </p>
            <S.Form>
              <form action="" method="post">
                <input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome Completo*"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail*"
                  required
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Whatsapp com DDD*"
                  required
                  value={mobile}
                  onChange={event => setMobile(event.target.value)}
                />
                <Button
                  text="Enviar"
                  color="secondary"
                  hoverColor="secondaryDark"
                  onClick={e => handleSubmitButton(e)}
                />
              </form>
            </S.Form>
            <p className='footer'>
              *Você não receberá spans indesejados, dados apenas para contato!
            </p>
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
