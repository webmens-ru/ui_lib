import React from "react";
import SearchWhiteSvg from "../assets/ui-search-white.svg";
import PlusWhiteSvg from "../assets/ui-plus-white.svg";
import PlusBlackSvg from "../assets/ui-plus-black.svg";
import CameraWhiteSvg from "../assets/ui-camera-white.svg";
import PhoneCallBlack from "../assets/ui-phone-call-black.svg";
import MailBlack from "../assets/ui-mail-black.svg";
import ChatBlack from "../assets/ui-chat-black.svg";
import SettingBlack from "../assets/ui-setting-black.svg";
import ReloadBlue from "../assets/ui-reload-blue.svg";

export const svg = {
  searchWhite: SearchWhiteSvg,
  plusWhite: PlusWhiteSvg,
  plusBlack: PlusBlackSvg,
  cameraWhite: CameraWhiteSvg,
  phoneCallBlack: PhoneCallBlack,
  mailBlack: MailBlack,
  chatBlack: ChatBlack,
  settingBlack: SettingBlack,
  reloadBlue: ReloadBlue,
};

export const svgBeforeList = {
  without: null,
  "white-search": <img src={svg.searchWhite} alt="" />,
  "white-plus": <img src={svg.plusWhite} alt="" />,
  "black-plus": <img src={svg.plusBlack} alt="" />,
  "white-camera": <img src={svg.cameraWhite} alt="" />,
};