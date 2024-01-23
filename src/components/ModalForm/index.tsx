import { useContext, useState, MouseEvent as ReactMouseEvent } from 'react'
import { ModalsContext } from '../../contexts/ModalsContext'
import { Button } from '../Button'
import * as S from './styles'
import axios from 'axios'

export const ModalForm = () => {
  const { setModalsContextOpen } = useContext(ModalsContext)
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleMobileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    const formattedValue = formatMobileNumber(numericValue);

    setMobile(formattedValue);
  };

  const formatMobileNumber = (numericValue: string): string => {
    if (numericValue) {
      if (numericValue.length < 3) {
        return `(${numericValue.slice(0, 2)}`;
      }
      if (numericValue.length >= 3 && numericValue.length <= 7) {
        return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}`;
      }
      if (numericValue.length > 7) {
        return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;
      }
    }
    return '';
  };

  const handleSubmitButton = (e: ReactMouseEvent<HTMLButtonElement>) => {
    if (!name || !email || !mobile) {
      return;
    }
    e.preventDefault();

    const url = 'https://audiovisual.fly.dev/forms';
    const data = {
      full_name: name,
      email: email.toLowerCase(),
      mobile: mobile,
      lead_source: 'campaign1',
      lead_source_details: '',
      url: 'www.poleseaudiovisual.com.br',
    };

    axios.post(url, data)
      .then(response => {
        setModalsContextOpen((current) => !current);
        window.open('/cadastro-concluido', '_blank');
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
                  onChange={handleMobileInputChange}
                />
                <Button
                  text="Enviar"
                  color="secondary"
                  hoverColor="secondaryDark"
                  onClick={(e) => handleSubmitButton(e)}
                />
              </form>
            </S.Form>
            <p className='footer'>
              *Você não receberá spans indesejados, dados apenas para contato!
            </p>
          </S.Main>
          <img
            src="/images/close.png"
            alt="botão de fechar"
            onClick={() => setModalsContextOpen((current) => !current)}
          />
        </div>
      </S.Wrapper>
    </>
  )
}
