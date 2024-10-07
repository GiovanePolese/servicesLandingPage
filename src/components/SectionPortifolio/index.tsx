import { Texts } from '../Texts'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'

export const SectionPortifolio = () => {
  return (
    <S.Wrapper id="portfolio">
      <div className="container">
        <S.Main>
          <S.Text>
            <h2>{Texts.portfolio.title}</h2>
            <p>{Texts.portfolio.subtitle}</p>
          </S.Text>

          <S.Cards className="desktop">
            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Texts.portfolio.cards.map((card, index: number) => (
                <SwiperSlide key={index}>
                  <S.Card>
                    <S.Photo>
                      <img
                        src={card.img}
                        className="photo"
                        alt={'Foto cliente ' + card.company}
                        loading='lazy'
                      />
                      <p>{card.company}</p>
                    </S.Photo>
                    <S.Border></S.Border>
                    <iframe
                      className="video"
                      src={card.video + '?mute=0'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </S.Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Cards>

          <S.Cards className="mobile">
            <Swiper
              slidesPerView={1.1}
              spaceBetween={0}
              freeMode={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Texts.portfolio.cards.map((card, index: number) => (
                <SwiperSlide key={index}>
                  <S.Card>
                    <S.Photo>
                      <img
                        src={card.img}
                        className="photo"
                        alt={'Foto cliente ' + card.company}
                      />
                      <p>
                        {card.company}
                      </p>
                    </S.Photo>
                    <S.Border></S.Border>
                    <iframe
                      className="video"
                      src={card.video + '?mute=0'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
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
