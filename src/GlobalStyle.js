import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  border-radius : 5px;
  box-sizing:border-box;
  border: none;
  text-overflow: ellipsis;
  overflow : hidden;
  background : none;
}
button{
  cursor : pointer;
}
`

export default GlobalStyle;