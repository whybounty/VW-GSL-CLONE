import MyComponent, * as S from "./Header.styled";

export default function Header() {
    return (
        <S.HeaderWrapper>
            <S.BurgerMenu>
                <MyComponent />
                <S.BurgerText>Menü</S.BurgerText>
            </S.BurgerMenu>
        </S.HeaderWrapper>
    );
};