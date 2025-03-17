import React from 'react'
import * as S from "./ImageSwiper.styled"

import 'swiper/css';

function ImageSwiper() {
  return (
    <S.Swiper>
        <S.SwiperWrapper>
            <S.Image src="/golf.jpg" />
        </S.SwiperWrapper>
        <S.DotNav>
            <S.Dot />
            <S.Dot />
            <S.Dot />
            <S.Dot />
            <S.Dot />
        </S.DotNav>
    </S.Swiper>
  )
}

export default ImageSwiper