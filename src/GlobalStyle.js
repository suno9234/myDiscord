import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  border: none;
  text-overflow: ellipsis;
  background : none;
  margin: 0;
  padding : 0;
  font-family : "gg sans","Apple SD Gothic Neo",NanumBarunGothic,"맑은 고딕","Malgun Gothic",Gulim,굴림,Dotum,돋움,"Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size:16px;
  line-height:20px;
  font-height:20px;
  font-weight:500;
  background-color : inherit;
}
loginPage{
  border-radius : 5px;
}
button{
  cursor : pointer;
}
`

export default GlobalStyle;