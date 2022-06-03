//import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.table{
  width:100%;
  overflow-y: auto;
}

html {
  // para utilizar rem como pixel
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.font.families.primary};

}

h1, h2, h3, h4, h5, h6 {
  font-family: font-family: ${({ theme }) => theme.font.families.secondary};
  margin: ${({ theme }) => theme.spacings.large} 0;
}

p{
  margin: ${({ theme }) => theme.spacings.medium} 0;
}

ul, ol{
  margin: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};
}

a{
  color: ${({ theme }) => theme.colors.secondaryColor}
}
`;
