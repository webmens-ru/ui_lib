import Icons from "../icons";

export interface IIconProps {
  iconWidth?: string;
  iconName: keyof typeof Icons;
  onClick?: VoidFunction;
}

export type IconName = keyof typeof Icons