import styled from "styled-components";

export const EmissionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    border-top: solid;
    border-bottom: solid;
    border-color: #dedede;
    border-width: 1px;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
`;

export const EmissionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
`;

export const EmissionImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const EmissionLabel = styled.p`
	margin: 0;
    padding: 0;
    font-size: 16px;
    color: rgb(0, 30, 80);
`;