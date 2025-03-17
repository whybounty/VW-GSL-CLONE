import React from 'react'
import * as S from "./EmissionSection.styled"

export default function EmissionSection() {

    const emissions = [
        {
            id: 1,
            value: "Benzin",
            icon: "/fuel.svg"
        },
        {
            id: 2,
            value: "07 / 2024",
            icon: "/calendar.svg"
        },
        {
            id: 3,
            value: "15.400",
            icon: "/distance.svg"
        },
        {
            id: 4,
            value: "110 kW (150 PS)",
            icon: "/engine.svg"
        },
    ]

  return (
    <S.EmissionWrapper>
        {emissions.map((item) => (
            <S.EmissionItem key={item.id}>
                <S.EmissionImage src={item.icon}/>
                <S.EmissionLabel>{item.value}</S.EmissionLabel>
            </S.EmissionItem>
        ))}
    </S.EmissionWrapper>
  )
}