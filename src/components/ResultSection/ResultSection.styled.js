import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1;

    @media screen and (min-width: 860px) {
        grid-template-columns: 1fr 3fr;
        gap: 2rem;
    }
`;

export const ResulsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 860px) {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
`;