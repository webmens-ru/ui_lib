import { createGlobalStyle } from 'styled-components';

import LightTTF from './ttf/OpenSans-Light.ttf'
import RegularTTF from './ttf/OpenSans-Regular.ttf';
import SemiBoldTTF from './ttf/OpenSans-SemiBold.ttf';
import BoldTTF from './ttf/OpenSans-Bold.ttf';
import ExtraBoldTTF from './ttf/OpenSans-ExtraBold.ttf';

export const OpenSans = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  src: url(${LightTTF}) format("truetype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${RegularTTF}) format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${SemiBoldTTF}) format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${BoldTTF}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url(${ExtraBoldTTF}) format("truetype");
  font-weight: 800;
  font-style: normal;
}
`;
