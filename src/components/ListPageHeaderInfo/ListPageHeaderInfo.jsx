import * as S from "./ListPageHeaderInfo.styled";

export default function ListPageHeaderInfo() {
    return (
        <S.ListPageHeaderInfoWrapper>
            <S.SearchHeadline><S.BoldText>71.939 Treffer</S.BoldText> ab 250 €</S.SearchHeadline>
            <S.SavingInfo>Saving Info</S.SavingInfo>
        </S.ListPageHeaderInfoWrapper>
    );
};

//<S.ToggleFilterWrapper>
//<S.FilterButtonImage src="/arrow_back.png" />
//<S.ToggleFilterButton>Hide Filter</S.ToggleFilterButton>
//</S.ToggleFilterWrapper>