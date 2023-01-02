import { createGlobalStyle } from "styled-components";
import ggSans from './ggsans.woff2';

export default createGlobalStyle`
  @font-face{
    font-family: "gg sans";
    src: local("gg sans"),
    url(${ggSans}) format('woff2');
  }
`