import styled from "styled-components";

export const Swiper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SwiperWrapper = styled.div`
    height: 300px;
    width: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const DotNav = styled.div`
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(0, 30, 80);

    &:nth-of-type(3) {
        width: 12px;
        height: 12px;
    }

    &:first-of-type {
        width: 6px;
        height: 6px;
    }

    &:last-of-type {
        width: 6px;
        height: 6px;
    }
`;