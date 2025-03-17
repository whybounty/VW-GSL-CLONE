import React from 'react'
import * as S from "./CarTile.styled"
import ImageSwiper from './ImageSwiper/ImageSwiper'
import CarTileHeadline from './CarTileHeadline/CarTileHeadline'
import CarPriceWrapper from './CarPriceWrapper/CarPriceWrapper'
import EmissionSection from './EmissionSection/EmissionSection'
import Certificate from './Certificate/Certificate'
import DealerSection from './DealerSection/DealerSection'

export default function CarTile() {
  return (
    <S.CarTileWrapper>
        <ImageSwiper />
        <S.DataWrapper>
            <CarTileHeadline />
            <CarPriceWrapper />
            <EmissionSection />
            <DealerSection />
        </S.DataWrapper>
        <Certificate />
    </S.CarTileWrapper>
  )
}