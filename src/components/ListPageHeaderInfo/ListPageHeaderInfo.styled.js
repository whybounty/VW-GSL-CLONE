import styled from "styled-components";

export const ListPageHeaderInfoWrapper = styled.div`
    padding-top: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchHeadline = styled.h2`
    width: 100%;
`;

export const BoldText = styled.span`
    font-weight: bold;
`;

export const ToggleFilterWrapper = styled.div`
    align-items: center;
`;

export const ToggleFilterButton = styled.a`
    border-bottom: #00174f 1px solid;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: 200;
    color: #00174f;

    &:hover {
        color: darkblue;
        border-bottom: darkblue 2px solid;
    }
`;

export const FilterButtonImage = styled.img`
    width: 100%;
    max-width: 30px;
`;

export const SavingInfo = styled.div`
    text-wrap: nowrap;
`;



