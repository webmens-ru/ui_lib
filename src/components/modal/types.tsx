export interface IModalProps {
  isShow: boolean;
  title?: string;
  children?: JSX.Element;
  withPopup?: boolean;
  buttons?: JSX.Element[]
}