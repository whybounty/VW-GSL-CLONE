import React from 'react'
import * as S from "./CarPriceWrapper.styled"

export default function CarPriceWrapper() {
  return (
    <S.PriceWrapper>
        <S.Price>
        25.480 € inkl. MwSt.
        </S.Price>
        <S.PriceInfo>
            MwSt. ausweisbar (21.412 € excl. MwSt.)
        </S.PriceInfo>
    </S.PriceWrapper>
  )
}