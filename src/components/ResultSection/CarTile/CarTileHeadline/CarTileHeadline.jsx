import React from 'react'
import * as S from "./CarTileHeadline.styled"

export default function CarTileHeadline() {
  return (
    <S.TileHeadline>
        <div>
            <S.CarTypeHeadline>Jahreswagen von Volkswagen</S.CarTypeHeadline>
            <S.CarHeadline>Volkswagen Golf 7</S.CarHeadline>
        </div>
        <S.FavoriteWrapper>
            <S.FavoriteImage src="/heart-icon.svg"/>
        </S.FavoriteWrapper>
    </S.TileHeadline>
  )
}