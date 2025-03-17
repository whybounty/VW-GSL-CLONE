import React from 'react'
import * as S from "./Certificate.styled"

export default function Certificate() {
  return (
    <S.CertificateWrapper>
        <S.CertificateImage src="/vw.svg"/>
        <S.CertificateLabel>Zertifizierter Gebrauchtwagen</S.CertificateLabel>
    </S.CertificateWrapper>
  )
}