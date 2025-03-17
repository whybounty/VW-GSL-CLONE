import * as S from "./Breadcrumbs.styled";

export default function Breadcrumbs({ items }) {
  return (
    <S.BreadcrumbWrapper>
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <S.Separator>▸</S.Separator>}
          {item.link ? (
            <S.BreadcrumbLink href={item.link}>{item.label}</S.BreadcrumbLink>
          ) : (
            <S.BreadcrumbText>{item.label}</S.BreadcrumbText>
          )}
        </span>
      ))}
    </S.BreadcrumbWrapper>
  );
}
