import React from 'react' //rfce
import * as S from "./ProductListPage.styled"

import ListPageHeader from '../../components/ListPageHeader/ListPageHeader'
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import Header from "../../components/Header/Header"
import ListPageHeaderInfo from '../../components/ListPageHeaderInfo/ListPageHeaderInfo'

export default function ProductListPage() {
  const breadcrumbItems = [
    { label: "Startseite", link: "/" },
    { label: "Modelle und Konfigurator", link: "/models" },
    { label: "Verfügbare Neu- und Gebrauchtwagen - Suche" },
  ];

  return (
    <S.ListPage>

      <Header />

      <S.ListPageWrapper>
        <S.HeaderWrapper>

          <Breadcrumbs items={breadcrumbItems} />
          <ListPageHeader />
          <ListPageHeaderInfo />

        </S.HeaderWrapper>
      </S.ListPageWrapper>

    </S.ListPage>
  );
}
