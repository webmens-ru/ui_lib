import Icons from "../icons";

export interface IIconProps {
  iconWidth: string;
  iconName: keyof typeof Icons;
}

export type IconName = keyof typeof Icons