import React from 'react'
import * as S from "./ResultSection.styled"
import FilterSection from './FilterSection/FilterSection'
import CarTile from './CarTile/CarTile'

export default function ResultSection() {

  return (
    <S.SectionWrapper>
        {/* Linker Bereich */}
        <FilterSection />

        {/* Rechter Bereich */}
        <S.ResulsWrapper>
            <CarTile />
            <CarTile />
        </S.ResulsWrapper>
    </S.SectionWrapper>
  )
}