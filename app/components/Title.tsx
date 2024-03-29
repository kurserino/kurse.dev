import { CSSProperties, FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

type TitleProps = PropsWithChildren<{
  style?: CSSProperties;
  $small?: boolean;
  $medium?: boolean;
}>;

const StyledTitle = styled.h1<TitleProps>`
  font-weight: 900;
  font-size: ${({ $small, $medium }) =>
    $small ? "28px" : $medium ? "35px" : "53px"};
  ${({ $small, $medium }) => !($small || $medium) && `margin-bottom: 13px;`}
`;

const Title: FC<TitleProps> = ({ children, style, ...props }) => {
  return (
    <Flex $column style={{ marginBottom: 33, ...style }} className="title">
      <StyledTitle {...props}>{children}</StyledTitle>
      {!(props.$small || props.$medium) && (
        <svg
          width="67"
          height="8"
          viewBox="0 0 67 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="67"
            height="8"
            style={{ fill: "var(--primary-color)" }}
          />
        </svg>
      )}
    </Flex>
  );
};
export { Title };
