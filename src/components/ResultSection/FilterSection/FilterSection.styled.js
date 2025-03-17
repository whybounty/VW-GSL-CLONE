import styled from "styled-components";

export const FilterSection = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: solid;
    border-color: #dedede;
    box-sizing: border-box;
    height: fit-content;

    @media screen and (max-width: 860px) {
        display: none;
    }
`;