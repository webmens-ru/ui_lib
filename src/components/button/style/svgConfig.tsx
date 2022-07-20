import React from 'react';
import SearchWhiteSvg from '../../icon/assets/ui-search-white.svg';
import PlusWhiteSvg from '../../icon/assets/ui-plus-white.svg';
import PlusBlackSvg from '../../icon/assets/ui-plus-black.svg';
import CameraWhiteSvg from '../../icon/assets/ui-camera-white.svg';
import PhoneCallBlack from '../../icon/assets/ui-phone-call-black.svg';
import MailBlack from '../../icon/assets/ui-mail-black.svg';
import ChatBlack from '../../icon/assets/ui-chat-black.svg';
import SettingBlack from '../../icon/assets/ui-setting-black.svg';
import ReloadBlue from '../../icon/assets/ui-reload-blue.svg';

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
  'white-search': <img src={svg.searchWhite} alt="" />,
  'white-plus': <img src={svg.plusWhite} alt="" />,
  'black-plus': <img src={svg.plusBlack} alt="" />,
  'white-camera': <img src={svg.cameraWhite} alt="" />,
  mail: <img src={svg.mailBlack} alt="" />,
  phone: <img src={svg.phoneCallBlack} alt="" />,
  chat: <img src={svg.chatBlack} alt="" />,
  reload: <img src={svg.reloadBlue} alt="" />,
  setting: <img src={svg.settingBlack} alt="" />,
};
