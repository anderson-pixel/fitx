import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
}
`;