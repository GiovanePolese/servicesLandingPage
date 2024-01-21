import { Texts } from '../Texts'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'

export const SectionDepositions = () => {
  return (
    <S.Wrapper id="deposition">
      <div className="container">
        <S.Main>
          <S.Assessments>Avaliações</S.Assessments>
          <S.Text>
            <h2>{Texts.review.title}</h2>
            <p>{Texts.review.subtitle}</p>
          </S.Text>

          <S.Cards className="desktop">
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Texts.review.cards.map((card, index: number) => (
                <SwiperSlide key={index}>
                  <S.Card>
                    <S.Photo>
                      <img
                        src={card.img}
                        className="photo"
                        alt={'Foto cliente ' + card.name}
                        loading='lazy'
                      />
                    </S.Photo>
                    <iframe
                      className="video"
                      src={card.video + '?mute=0'} // vídeo com som habilitado
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <S.Border></S.Border>
                    <S.TextCard>
                      <p>
                        {card.name} / <span>{card.profissao}</span>
                      </p>
                    </S.TextCard>
                  </S.Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Cards>

          <S.Cards className="mobile">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={0}
              freeMode={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Texts.review.cards.map((card, index: number) => (
                <SwiperSlide key={index}>
                  <S.Card>
                    <S.Photo>
                      <img
                        src={card.img}
                        className="photo"
                        alt={'Foto cliente ' + card.name}
                      />
                    </S.Photo>
                    <iframe
                      className="video"
                      src={card.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <S.Border></S.Border>
                    <S.TextCard>
                      <p>
                        {card.name} / <span>{card.profissao}</span>
                      </p>
                    </S.TextCard>
                  </S.Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Cards>
        </S.Main>
      </div>
    </S.Wrapper>
  )
}
