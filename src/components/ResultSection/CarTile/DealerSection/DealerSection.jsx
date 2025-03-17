import React from 'react'
import * as S from "./DealerSection.styled"

export default function DealerSection() {
  return (
    <S.DealerWrapper>
        <S.DealerImage src="/location.svg" />
        <S.DealerInfoWrapper>
            <S.DealerLabel>Autohaus Kharazian</S.DealerLabel>
            <S.DealerLocation>56565 Musterstadt</S.DealerLocation>
        </S.DealerInfoWrapper>
    </S.DealerWrapper>
  )
}