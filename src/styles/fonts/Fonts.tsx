import { createGlobalStyle } from "styled-components";

import Light from "./woff/OpenSans-Light.woff";
import Light2 from "./woff2/OpenSans-Light.woff2";
import Regular from "./woff/OpenSans-Regular.woff";
import Regular2 from "./woff2/OpenSans-Regular.woff2";
import SemiBold from "./woff/OpenSans-SemiBold.woff";
import SemiBold2 from "./woff2/OpenSans-SemiBold.woff2";
import Bold from "./woff/OpenSans-Bold.woff";
import Bold2 from "./woff2/OpenSans-Bold.woff2";
import ExtraBold from "./woff/OpenSans-ExtraBold.woff";
import ExtraBold2 from "./woff2/OpenSans-ExtraBold.woff2";

export const OpenSans = createGlobalStyle`
  @font-face {
  font-family: 'Open Sans';
  src: url(${Light2}) format("woff2"),
    url(${Light}) format("woff");
  font-weight: 300;
  font-display: fallback;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${Regular2}) format("woff2"),
    url(${Regular}) format("woff");
  font-weight: 400;
  font-display: fallback;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${SemiBold2}) format("woff2"),
    url(${SemiBold}) format("woff");
  font-weight: 600;
  font-display: fallback;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${Bold2}) format("woff2"),
    url(${Bold}) format("woff");
  font-weight: 700;
  font-display: fallback;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${ExtraBold2}) format("woff2"),
    url(${ExtraBold}) format("woff");
  font-weight: 800;
  font-display: fallback;
}
`;
